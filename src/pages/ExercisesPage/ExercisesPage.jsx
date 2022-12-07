import { Suspense } from 'react';
import {NavLink, Outlet} from 'react-router-dom'

const subPages = [
  { href: '/exercises/timer', title: 'Timer' },
  { href: '/exercises/counter', title: 'Counter' },
  { href: '/exercises/re-render', title: 'Re-render' },
  { href: '/exercises/users', title: 'Users' },
  { href: '/exercises/middleware', title: 'Middleware' },
];

export const ExercisesPage = () => {
  return (
    <>
      <ul className="nav nav-tabs mb-5">
        {subPages.map(item => (
          <li key={item.href} className="nav-item">
            <NavLink className="nav-link" to={item.href}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Suspense fallback={<p>Exercise loading...</p>}>
        <Outlet />
      </Suspense>
      
    </>
  );
};