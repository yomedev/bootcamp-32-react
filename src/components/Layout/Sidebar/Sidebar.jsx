import { useContext } from "react";
import { Login } from "./Login";
import { Nav } from "./Nav/Nav";
import { AuthContext } from '../../../context/auth.context'

export const Sidebar = () => {
  const { isAuth } = useContext(AuthContext)
  return (
    <aside className="nav nav-pills p-5 bg-light col-2" style={{ height: 'auto' }}>
      <div className="d-flex flex-column" style={{ position: 'sticky', top: 30, left: 0, height: '85vh' }}>
        {isAuth ? <Nav /> : <Login />}
      </div>

    </aside>
  );
};