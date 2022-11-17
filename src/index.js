import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.scss'

// const elementP = React.createElement(
//   'p',
//   null,
//   'My link'
// )





const linkElement = <a href='/home' title='title'>My link JSX</a>

// const linkElement = React.createElement(
//   'a',
//   {
//     href: '/home',
//     title: 'link',
//   },
//   "My link"
// )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// <a ... >My link</a>

// import ReactDOM from 'react-dom/client';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

