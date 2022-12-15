import { lazy } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './components/Layout';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { CancelRequestPage } from './pages/ExercisesPage/CancelRequestPage/CancelRequestPage';

const HomePage = lazy(() => import('./pages/HomePage'));
const RtkPostsPage = lazy(() => import('./pages/RtkPostsPage'));
const NewPostPage = lazy(() => import('./pages/NewPostPage'));
const PostsListPage = lazy(() => import('./pages/PostsListPage'));
const SinglePostPage = lazy(() => import('./pages/SinglePostPage'));
const CommentsPage = lazy(() => import('./pages/SinglePostPage/CommentsPage'));

const ExercisesPage = lazy(() => import('./pages/ExercisesPage'));
const CounterPage = lazy(() => import('./pages/ExercisesPage/CounterPage'));
const UsersPage = lazy(() => import('./pages/ExercisesPage/UsersPage'));

const LoginPage = lazy(() => import('./pages/LoginPage'));
const JoinPage = lazy(() => import('./pages/JoinPage'));

const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export const App = () => {

  return (
    <BrowserRouter basename="/bootcamp-24-react/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/posts" element={<PostsListPage />} />
          <Route path="/posts/:postId" element={<SinglePostPage />}>
            <Route path="comments" element={<CommentsPage />} />
          </Route>
          <Route path='/' element={<PrivateRoute />}>
            <Route path="/new-post" element={<NewPostPage />} />
            <Route path="/exercises" element={<ExercisesPage />}>
              <Route index element={<Navigate to="users" />} />
              <Route path="counter" element={<CounterPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="cancel-request" element={<CancelRequestPage />} />
            </Route>
          </Route>
          <Route path='/' element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
