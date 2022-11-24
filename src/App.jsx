import { Timer } from './components/Timer';
import { Users } from './components/Users';
import { Header, Layout } from './components/Layout';
import {Rerender} from './components/Rerender'
import { Posts } from './components/Posts';
import {Counter} from './components/Counter'

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      <Timer />
      <Counter />
      
    </Layout>
  );
};
