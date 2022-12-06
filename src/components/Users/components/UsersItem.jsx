import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteUserAction } from '../../../redux/users/action.users';



export const UsersItem = ({ user }) => {
  const { id, name, email, bio, skils, isOpenToWork } = user;

  const dispatch = useDispatch()

  const handleDeleteUser = () => {
    dispatch(deleteUserAction(id))
  }

  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title d-flex">
          {name}
          {isOpenToWork && <p className="badge bg-success ms-3">Open to work</p>}
        </h5>

        <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
        <p className="card-text">{bio}</p>

        <div className="d-flex mb-2">
          {skils.map(skil => (
            <span key={skil} className="badge bg-dark me-1">
              {skil}
            </span>
          ))}
        </div>

        <div className="d-flex">
          <button type='button' className='btn btn-danger' onClick={handleDeleteUser}>Delete</button>
        </div>
      </div>
    </div>
  );
};

UsersItem.propTypes = {
  user: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    skils: PropTypes.arrayOf(PropTypes.string.isRequired),
    isOpenToWork: PropTypes.bool.isRequired,
  }).isRequired,
};