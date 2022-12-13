import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import defaultUserImg from '../../assets/images/user.png'
import { getProfileThunk } from '../../redux/profile/thunk.profile';

export const UserCard = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfileThunk())
  }, [])
  return (
    <div className="list-group-item list-group-item-action py-3 mb-4">
      <div className="d-flex w-100 align-items-center ">
        <img
          alt=""
          width="80px"
          height="80px"
          className="d-block"
          src={defaultUserImg}
          style={{ borderRadius: '50%', boxSizing: 'border-box' }}
        />
        <div className="ms-3 d-flex flex-column">
          <strong className="mb-1">
            FirstName LastName
          </strong>
          <small className="text-muted">Email</small>
        </div>
      </div>
    </div>
  );
};