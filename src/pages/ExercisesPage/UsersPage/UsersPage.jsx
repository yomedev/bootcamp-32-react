import { useEffect, useMemo, useState } from 'react';

import { FiPlus } from 'react-icons/fi';

import usersJson from './users.json';
import { Modal } from '../../../components/Modal';

import { AvailabilityFilters } from '../../../components/Users/components/AvailabilityFilters';
import { NewUserForm } from '../../../components/Users/components/NewUserForm';
import { SearchInput } from '../../../components/Users/components/SearchInput';
import { SkillsFilters } from '../../../components/Users/components/SkillsFilters';
import { UsersList } from '../../../components/Users/components/UsersList';
import { useDispatch, useSelector } from 'react-redux';
import { createUserAction, toggleModalAction } from '../../../redux/users/slice.users';


const ALL_SKILLS_VALUE = 'all';

const USERS_LOCALESTORAGE_KEY = 'users-key'


export const UsersPage = () => {
  const { data: users, isModalOpen } = useSelector(state => state.users)

  const dispatch = useDispatch()

  const toggleModal = () => {
    dispatch(toggleModalAction())
  };

  const handleCreateNewUser = user => {
    dispatch(createUserAction(user))
    dispatch(toggleModalAction())
  };

  useEffect(() => {
    localStorage.setItem(USERS_LOCALESTORAGE_KEY, JSON.stringify(users))
  }, [users.length])

  const [isAvailable, setIsAvailable] = useState(false)
  const handleChangeAvailability = () => {
    setIsAvailable(prev => !prev);
  };

  const [skills, setSkills] = useState(ALL_SKILLS_VALUE)
  const handleChangeSkills = event => {
    const { value } = event.target;
    setSkills(value)
  };

  const [search, setSearch] = useState('')
  const handleChangeSearch = event => {
    const { value } = event.target;
    setSearch(value)
  };

  const handleResetSearch = () => {
    setSearch('')
  };


  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      if (isAvailable && user.isOpenToWork !== isAvailable) return false
      if (skills !== 'all' && !user.skils.includes(skills)) return false
      if (!user.name.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [isAvailable, skills, search, users.length])

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

      <UsersList users={filteredUsers}  />
    </>
  );
}

