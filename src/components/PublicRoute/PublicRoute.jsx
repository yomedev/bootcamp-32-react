import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { selectAuth } from '../../redux/auth/select.auth'

export const PublicRoute = () => {
  const location = useLocation()
  console.log(location);
  const {access_token} = useSelector(selectAuth)
  return access_token ? <Navigate to={location.state?.login ?? '/posts'} state={location.state} /> : <Outlet />
}