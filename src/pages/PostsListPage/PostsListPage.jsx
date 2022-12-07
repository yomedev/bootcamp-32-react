import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { Button } from '../../components/Button';
import { PostsError, PostsItem, PostsLoader, PostsNotFound, PostsSearch } from '../../components/Posts';
import { Status } from '../../constants/fetch-status';
import { getPostsThunk } from '../../redux/posts/thunk.posts';
import { getPostsService } from '../../services/posts.service';

export const PostsListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') ?? 1;
  const search = searchParams.get('search') ?? '';

  const dispatch = useDispatch()

  const {posts, status} = useSelector(state => state.posts) 

  useEffect(() => {
    dispatch(getPostsThunk({search, page}))
  }, [search, page, dispatch]);

  if (status === Status.Loading || status === Status.Idle) {
    return <PostsLoader />;
  }

  if (status === Status.Error) {
    return <PostsError />;
  }

  return (
    <>
      <PostsSearch />

      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {posts.data.map(post => (
            <PostsItem key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group mx-auto py-3">
          {[...Array(posts.total_pages)].map((_, index) => (
            <Button
              key={index}
              disabled={index + 1 === posts.page}
              onClick={() => setSearchParams({ page: index + 1, search })}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};