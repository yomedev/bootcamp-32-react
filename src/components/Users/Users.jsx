import { Component, useEffect, useMemo, useState } from 'react';

import { FiPlus } from 'react-icons/fi';

import usersJson from '../../assets/users.json';
import { Modal } from '../Modal/Modal';

import { AvailabilityFilters } from './components/AvailabilityFilters';
import { NewUserForm } from './components/NewUserForm';
import { SearchInput } from './components/SearchInput';
import { SkillsFilters } from './components/SkillsFilters';
import { UsersList } from './components/UsersList';

const ALL_SKILLS_VALUE = 'all';

const USERS_LOCALESTORAGE_KEY = 'users-key'

const getLocalData = () => {
  return JSON.parse(localStorage.getItem(USERS_LOCALESTORAGE_KEY))
}

export const Users = () => {
  const [users, setUsers] = useState(() => getLocalData() ?? usersJson)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAvailable, setIsAvailable] = useState(false)
  const [skills, setSkills] = useState(ALL_SKILLS_VALUE)
  const [search, setSearch] = useState('')

  useEffect(() => {
    localStorage.setItem(USERS_LOCALESTORAGE_KEY, JSON.stringify(users))
  }, [users.length])

  const handleChangeSkills = event => {
    const { value } = event.target;
    setSkills(value)
  };

  const handleChangeAvailability = () => {
    setIsAvailable(prev => !prev);
  };

  const handleChangeSearch = event => {
    const { value } = event.target;
    setSearch(value)
  };

  const handleResetSearch = () => {
    setSearch('')
  };

  const handleDeleteUser = userId => {
    setUsers(prev => prev.filter(user => user.id !== userId))
  };

  const handleCreateNewUser = user => {
    setUsers(prev => [{ ...user, id: Date.now() }, ...prev])
    setIsModalOpen(false)
  };

  const toggleModal = () => {
    setIsModalOpen(prev => !prev)
  };



  const filteredUsers = useMemo(() => {
    console.log('filter');
    return users.filter(user => {
      if (isAvailable && user.isOpenToWork !== isAvailable) return false
      if (user.skils.includes(skills)) return false
      if (!user.name.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [isAvailable, skills, search])

  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <AvailabilityFilters value={isAvailable} onChangeAvailability={handleChangeAvailability} />

        <SkillsFilters value={skills} onChangeSkills={handleChangeSkills} />

        <button type="button" className="btn btn-primary btn-lg ms-auto" onClick={toggleModal}>
          <FiPlus />
        </button>
      </div>

      <SearchInput value={search} onResetSearch={handleResetSearch} onChangeSearch={handleChangeSearch} />

      {isModalOpen && (
        <Modal onModalClose={toggleModal}>
          <NewUserForm onSubmit={handleCreateNewUser} onModalClose={toggleModal} />
        </Modal>
      )}

      <UsersList users={filteredUsers} onUserDelete={handleDeleteUser} />
    </>
  );
}

// export class Users extends Component {
//   state = {
//     users: usersJson,
//     isModalOpen: false,
//     isAvailable: false,
//     skills: ALL_SKILLS_VALUE,
//     search: '',
//   };

//   componentDidMount() {
//     const localeData = localStorage.getItem(USERS_LOCALESTORAGE_KEY)
//     if (localeData) {
//       this.setState({ users: JSON.parse(localeData) });
//     }
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log(snapshot);
//     if (prevState.users.length !== this.state.users.length) {
//       localStorage.setItem(USERS_LOCALESTORAGE_KEY, JSON.stringify(this.state.users))
//     }
//   }

//   getSnapshotBeforeUpdate() {
//     return 10
//   }

//   handleChangeSkils = event => {
//     const { value } = event.target;
//     this.setState({ skills: value });
//   };

//   handleChangeAvailability = () => {
//     this.setState(prevState => ({ isAvailable: !prevState.isAvailable }));
//   };

//   handleChangeSearch = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleResetSearch = () => {
//     this.setState({ search: '' });
//   };

//   handleDeleteUser = userId => {
//     this.setState(prevState => {
//       return { users: prevState.users.filter(user => user.id !== userId) };
//     });
//   };

//   handleCreateNewUser = user => {
//     this.setState(prevState => ({ users: [{ ...user, id: Date.now() }, ...prevState.users], isModalOpen: false }));
//   };

//   toggleModal = () => {
//     this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
//   };

//   apllyFilters = () => {
//     const { users, search, skills, isAvailable } = this.state;

//     let newUsers = users;

//     if (search) {
//       newUsers = newUsers.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
//     }

//     if (isAvailable) {
//       newUsers = newUsers.filter(user => user.isOpenToWork);
//     }

//     if (skills !== ALL_SKILLS_VALUE) {
//       newUsers = newUsers.filter(user => user.skils.includes(skills));
//     }

//     return newUsers;
//   };

//   render() {
//     const { isAvailable, skills, search, isModalOpen } = this.state;

//     return (
//       <>
//         <div className="d-flex align-items-center mb-5">
//           <AvailabilityFilters value={isAvailable} onChangeAvailability={this.handleChangeAvailability} />

//           <SkillsFilters value={skills} onChangeSkills={this.handleChangeSkils} />

//           <button type="button" className="btn btn-primary btn-lg ms-auto" onClick={this.toggleModal}>
//             <FiPlus />
//           </button>
//         </div>

//         <SearchInput value={search} onResetSearch={this.handleResetSearch} onChangeSearch={this.handleChangeSearch} />

//         {isModalOpen && (
//           <Modal onModalClose={this.toggleModal}>
//             <NewUserForm onSubmit={this.handleCreateNewUser} onModalClose={this.toggleModal} />
//           </Modal>
//         )}

//         <UsersList users={this.apllyFilters()} onUserDelete={this.handleDeleteUser} />

//         <ConfettiContainer />
//       </>
//     );
//   }
// }