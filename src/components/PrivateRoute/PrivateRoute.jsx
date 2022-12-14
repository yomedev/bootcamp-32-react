import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { selectAuth } from '../../redux/auth/select.auth'

export const PrivateRoute = () => {
  const {access_token} = useSelector(selectAuth)
  return access_token ? <Outlet /> : <Navigate to='/login' />
}


/*
<PrivateRoute>
NewPost
Exercises
</PrivateRoute>
*/
