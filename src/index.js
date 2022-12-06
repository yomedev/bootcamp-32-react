import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.scss'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './context/auth.context';
import { store, persistedStore } from './redux/store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


// null => 'test'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <App />
    </PersistGate>

  </Provider>



  // </React.StrictMode>
);