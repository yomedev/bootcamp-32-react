import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { PostsError, PostsItem, PostsLoader, PostsSearch } from '../../components/Posts';
import { useDeletePostMutation, useGetPostsQuery, useLazyGetPostsQuery } from '../../redux/rtk-posts/api.posts'

export const RtkPostsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') ?? 1;
  const search = searchParams.get('search') ?? '';

  const { data: posts, isLoading, isError, isSuccess, isUninitialized } = useGetPostsQuery({search, page})
  const [deletePost] = useDeletePostMutation()
  // const [getPosts, { data: posts, isLoading, isError, isSuccess, isUninitialized }] = useLazyGetPostsQuery()

  // const handleGetPost = () => {
  //   getPosts({ search, page })
  // }

  // if (isUninitialized) {
  //   return <Button onClick={handleGetPost}>Get posts</Button>
  // }

  if (isLoading) {
    return <PostsLoader />;
  }

  if (isError) {
    return <PostsError />;
  }

  if (isSuccess && !posts?.data?.length) {
    return <p>Posts not found</p>
  }

  return (
    <>
      <PostsSearch />

      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {posts.data.map(post => (
            <PostsItem key={post.id} post={post} onDelete={deletePost}  />
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
  )
}
