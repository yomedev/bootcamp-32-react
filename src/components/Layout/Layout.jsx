import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom'

import { AuthProvider } from '../../context/auth.context';

import { Sidebar } from './Sidebar/Sidebar';
import { ConfettiContainer } from '../Confetti';

export const Layout = () => {
  return (
    <AuthProvider>
      <div className="d-flex h-100">
        <Sidebar />

        <main className="tab-content p-5 h-100 col-10" style={{ minHeight: '100vh' }}>
          <div className="tab-pane fade show active"><Outlet /></div>
        </main>
      </div>
      <ToastContainer />
      <ConfettiContainer />
    </AuthProvider>

  );
};

