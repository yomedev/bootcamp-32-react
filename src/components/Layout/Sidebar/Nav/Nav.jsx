import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { useAuth } from '../../../../context/auth.context';

import { Button } from '../../../Button';

export const Nav = () => {
  const { logout } = useAuth();
  
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back!</h2>
        <NavLink
          to="/"
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn btn-light'}
        >
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

      <Button className="btn-danger mt-auto" onClick={logout}>Log Out</Button>
    </div >
  );
};