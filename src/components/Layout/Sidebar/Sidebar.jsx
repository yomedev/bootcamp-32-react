import { UserNav } from "./UserNav";
import { NotAuth } from "./NotAuth";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../redux/auth/select.auth";
import {Status} from '../../../constants/fetch-status'

export const Sidebar = () => {
  const {status} = useSelector(selectAuth)
  return (
    <aside className="nav nav-pills p-5 bg-light col-2" style={{ height: 'auto' }}>
      <div className="d-flex flex-column" style={{ position: 'sticky', top: 30, left: 0, height: '85vh' }}>
        {status === Status.Success ? <UserNav /> : <NotAuth />}
      </div>

    </aside>
  );
};