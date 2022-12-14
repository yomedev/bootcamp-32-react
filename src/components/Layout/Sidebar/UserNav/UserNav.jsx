import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../../../context/auth.context';
import { logoutAction } from '../../../../redux/auth/slice.auth';

import { Button } from '../../../Button';
import { UserCard } from '../../../UserCard/UserCard';

export const UserNav = () => {
  const dispatch = useDispatch()

  const location = useLocation()
  console.log(location);
  const isJoinin = location.state?.isJoinin || false

  const handleLogout = () => {
    dispatch(logoutAction())
  }

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">{isJoinin ? 'Welcome new User' : 'Welcome back!'}</h2>
        <UserCard />
        <NavLink to="/" style={{ textAlign: 'left', marginLeft: '-10px' }} className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-light'}>
          Home page
        </NavLink>
        <NavLink to="/posts" style={{ textAlign: 'left', marginLeft: '-10px' }} className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-light'}>
          Posts
        </NavLink>
        <NavLink to="/new-post" style={{ textAlign: 'left', marginLeft: '-10px' }} className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-light'}>
          Create New Post
        </NavLink>
        <NavLink to="/exercises" style={{ textAlign: 'left', marginLeft: '-10px' }} className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-light'}>
          Exercises
        </NavLink>
      </div>

      <Button className="btn-danger mt-auto" onClick={handleLogout}>Log Out</Button>
    </div >
  );
};