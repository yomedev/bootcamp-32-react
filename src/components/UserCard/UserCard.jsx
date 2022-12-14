import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultUserImg from '../../assets/images/user.png'
import { Status } from '../../constants/fetch-status';
import { selectAuth } from '../../redux/auth/select.auth';
import { selectProfile } from '../../redux/profile/select.profile';
import { getProfileThunk } from '../../redux/profile/thunk.profile';

export const UserCard = () => {
  const {status, data} = useSelector(selectProfile)
  const dispatch = useDispatch()
  const {access_token, token_type} = useSelector(selectAuth)
  useEffect(() => {
    if (access_token && token_type) {
      dispatch(getProfileThunk())  
    }
  }, [access_token, token_type, dispatch])

  if (status === Status.Loading || status === Status.Idle) {
    return <p>Loading...</p>
  }

  if (status === Status.Error) {
    return <p>Error</p>
  }

  return (
    <div className="list-group-item list-group-item-action py-3 mb-4">
      <div className="d-flex w-100 align-items-center ">
        <img
          alt=""
          width="80px"
          height="80px"
          className="d-block"
          src={data?.avatar || defaultUserImg}
          style={{ borderRadius: '50%', boxSizing: 'border-box' }}
        />
        <div className="ms-3 d-flex flex-column">
          <strong className="mb-1">
            {data?.first_name} {data?.last_name}
          </strong>
          <small className="text-muted">{data?.email}</small>
        </div>
      </div>
    </div>
  );
};