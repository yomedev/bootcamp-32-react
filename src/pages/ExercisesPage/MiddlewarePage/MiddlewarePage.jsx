import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../../../components/Button'
import { getPostsThunk } from '../../../redux/store'

export const MiddlewarePage = () => {
  const dispatch = useDispatch()
  return <Button onClick={() => dispatch(getPostsThunk())}>Get posts</Button>
}
