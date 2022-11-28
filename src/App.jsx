import { useEffect } from 'react';
import { Header, Layout } from './components/Layout';
import { Memo } from './components/Memo/Memo';
import { Posts } from './components/Posts'
import { Rerender } from './components/Rerender/Rerender';
import { Users } from './components/Users/Users';
import { AuthContext, AuthProvider } from './context/auth.context'

export const App = () => {

  return (
    <AuthProvider>
      <Layout>
        <Header title="Hello world!" />
        {/* <Memo /> */}
        {/* <Posts /> */}
        {/* <Users /> */}
        {/* <Rerender /> */}
        <Posts />
      </Layout>
    </AuthProvider>
  );
};
