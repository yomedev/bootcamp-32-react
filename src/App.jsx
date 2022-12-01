import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header, Layout } from './components/Layout';
import { Memo } from './components/Memo/Memo';
import { Posts } from './components/Posts'
import { Rerender } from './components/Rerender/Rerender';
import { Users } from './components/Users/Users';
import { AuthContext, AuthProvider } from './context/auth.context'
import ExercisesPage from './pages/ExercisesPage';
import HomePage from './pages/HomePage';
import NewPostPage from './pages/NewPostPage';
import PostsListPage from './pages/PostsListPage';
import SinglePostPage from './pages/SinglePostPage'
import CommentsPage from './pages/SinglePostPage/CommentsPage';
import TimerPage from './pages/ExercisesPage/TimerPage'
import CounterPage from './pages/ExercisesPage/CounterPage'
import RerenderPage from './pages/ExercisesPage/RerenderPage'
import NotFoundPage from './pages/NotFoundPage'

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
            <Route path='*' element={<div>No such exercise</div>} />
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Route>

        
      </Routes>
    </BrowserRouter>
  );
};
