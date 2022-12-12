import { useMemo, useState } from 'react';

import { FiPlus } from 'react-icons/fi';

import { Modal } from '../../../components/Modal';

import { NewUserForm } from '../../../components/Users/components/NewUserForm';
import { SearchInput } from '../../../components/Users/components/SearchInput';
import { UsersList } from '../../../components/Users/components/UsersList';
import { Button } from '../../../components/Button'
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalAction } from '../../../redux/users/slice.users';
import { selectFilteredUsers, selectIsModalOpen, selectOpenToWorkTotal, selectSearch, selectUsersList } from '../../../redux/users/select.users';
import { store } from '../../../redux/store';

export const UsersPage = () => {
  const filteredUsers = useSelector(selectFilteredUsers)
  const isModalOpen = useSelector(selectIsModalOpen)
  const openToWorkTotal = useSelector(selectOpenToWorkTotal)

  const dispatch = useDispatch()

  const toggleModal = () => {
    dispatch(toggleModalAction())
  };

  return (
    <>
      <Button className="btn-primary d-flex align-items-center btn-lg mb-5" onClick={toggleModal}>
        <span className="me-2">Add new user</span>
        <FiPlus />
      </Button>

      <p>Open to work total: {openToWorkTotal}</p>

      <SearchInput />

      {isModalOpen && (
        <Modal onModalClose={toggleModal}>
          <NewUserForm />
        </Modal>
      )}

      <UsersList users={filteredUsers} />
    </>
  );
}



