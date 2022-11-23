import { Timer } from './components/Timer';
import { Users } from './components/Users';
import { Header, Layout } from './components/Layout';
import {Rerender} from './components/Rerender'

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      {/* <Timer /> */}
      <Users />
      {/* <Rerender /> */}
    </Layout>
  );
};

// new Users() => constuctor()