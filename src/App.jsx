import { Timer } from './components/Timer';
import { Users } from './components/Users';
import { Header, Layout } from './components/Layout';
import {Rerender} from './components/Rerender'
import { Posts } from './components/Posts';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      <Posts />
    </Layout>
  );
};
