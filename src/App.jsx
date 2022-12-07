import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header, Layout } from './components/Layout';

import NewPostPage from './pages/NewPostPage';
import SinglePostPage from './pages/SinglePostPage'
import CommentsPage from './pages/SinglePostPage/CommentsPage';
import TimerPage from './pages/ExercisesPage/TimerPage'
import RerenderPage from './pages/ExercisesPage/RerenderPage'
import {Users} from './components/Users'
import UsersPage from './pages/ExercisesPage/UsersPage';
import MiddlewarePage from './pages/ExercisesPage/MiddlewarePage';

const HomePage = lazy(() => import('./pages/HomePage'))
const PostsListPage = lazy(() => import('./pages/PostsListPage'))
const ExercisesPage = lazy(() => import('./pages/ExercisesPage'))
const CounterPage = lazy(() => import('./pages/ExercisesPage/CounterPage'))

export const App = () => {

  return (
    <BrowserRouter basename='/my-homework'>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/posts' element={<PostsListPage />} />
          <Route path='/posts/:postId' element={<SinglePostPage />} >
            <Route path='comments' element={<CommentsPage />} />
          </Route>

          <Route path='/new-post' element={<NewPostPage />} />
          <Route path='/exercises' element={<ExercisesPage />} >
            <Route index element={<Navigate to='timer' />} />
            <Route path='timer' element={<TimerPage />} />
            <Route path='counter' element={<CounterPage />} />
            <Route path='re-render' element={<RerenderPage />} />
            <Route path='users' element={<UsersPage />} />
            <Route path='middleware' element={<MiddlewarePage />} />
            <Route path='*' element={<div>No such exercise</div>} />
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Route>


      </Routes>
    </BrowserRouter>
  );
};
