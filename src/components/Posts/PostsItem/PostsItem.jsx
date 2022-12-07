import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { useAuth } from '../../../context/auth.context';

import { cutString } from '../../../helpers/cut-string'
import { deletePostThunk } from '../../../redux/posts/thunk.posts';


export const PostsItem = ({ post }) => {
  const { isAuth } = useAuth()
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') ?? 1;
  const search = searchParams.get('search') ?? '';

  const location = useLocation()

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deletePostThunk({ postId: post.id, page, search }))
  }

  return (

    <div className="col-12 col-xl-6 col-xxl-4 mb-4">
      <div className="card">
        <img
          height="250px"
          alt={post.title}
          src={post.preview_image}
          className="card-img-top"
          style={{ objectFit: 'cover' }}
        />

        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>

          <p className="card-text">{cutString(post.content, 60)}</p>

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">Views: {post.views}</li>
            <li className="list-group-item">Created: {formatDistanceToNow(new Date(post.created_at))}</li>
          </ul>

          {isAuth && <div className="d-flex">
            <button type="button" className="btn btn-danger" onClick={handleDelete}>
              Delete post
            </button>

            <Link to={`/posts/${post.id}`} state={{ from: location }} className="btn btn-primary ms-3">
              Read post
            </Link>
          </div>}
        </div>
      </div>
    </div>
  );
};