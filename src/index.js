import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.scss'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './context/auth.context';
import { store } from './redux/store'
import { Provider } from 'react-redux';


// null => 'test'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>



  // </React.StrictMode>
);