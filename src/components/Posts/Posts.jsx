import { Component, useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import { PostsError } from './PostsError';

import { PostsItem } from './PostsItem';
import { PostsLoader } from './PostsLoader';
import { SearchPosts } from './SearchPosts'
import { getPostsService } from '../../services/posts.service';
import { Status } from '../../constants/fetch-status';
import { useFetch } from '../../hooks/useFetch';



export const Posts = () => {
  const [posts, setPosts] = useState(null)
  const [search, setSearch] = useState('')

  const [fetchPosts, isPostsLoading, isPostsError] = useFetch(params => {
    getPostsService(params).then(resPosts => setPosts(resPosts))
  })

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts]) 

  const handleChange = event => {
    setSearch(event.target.value)
  }

  const handleSubmit = () => {
    fetchPosts({ search })
  }

  const handleLoadMore = async () => {
    if (posts.page < posts.total_pages) {
      const resPosts = await getPostsService({ page: posts.page + 1, search })
      setPosts(prev => ({ ...resPosts, data: [...prev.data, ...resPosts.data] }))
    }
  }

  if (isPostsLoading) {
    return <PostsLoader />;
  }

  if (isPostsError) {
    return <PostsError />
  }

  if (!posts) {
    return <></>
  }

  return (
    <>
      <SearchPosts search={search} onChangeSearch={handleChange} onSubmitSearch={handleSubmit} />
      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {posts.data.map((post) => (
            <PostsItem key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group my-2 mx-auto btn-group-lg">
          {[...Array(posts.total_pages)].map((_, index) => (
            <Button key={index} onClick={() => fetchPosts({ page: index + 1, search })}>{index + 1}</Button>
          ))}
          <Button className='ms-1 btn-primary' onClick={handleLoadMore}>Load more</Button>
        </div>
      </div>
    </>
  );
}

// export class Posts extends Component {
//   state = {
//     posts: null,
//     status: Status.Idle,
//     search: '',
//   };

//   async componentDidMount() {
//     this.fetchPosts()
//   }

//   fetchPosts = (params) => {
//     this.setState({ status: Status.Loading })
//     getPostsService(params)
//       .then(result => {
//         this.setState({ posts: result, status: Status.Success })
//       })
//       .catch(() => {
//         this.setState({ status: Status.Error })
//       })
//   }

//   handleChange = event => {
//     this.setState({ search: event.target.value })
//   }

//   handleSubmit = () => {
//     const { search } = this.state
//     this.fetchPosts({ search })
//     this.setState({ page: 1 })
//   }

//   handleLoadMore = async () => {
//     const { posts, search } = this.state
//     if (posts.page < posts.total_pages) {
//       const resPosts = await getPostsService({ page: posts.page + 1, search }) // content of page 2
//       this.setState(prevState => ({ posts: { ...resPosts, data: [...prevState.posts.data, ...resPosts.data] } }))
//     }
//   }

//   render() {
//     const { posts, status, search } = this.state;
//     if (status === Status.Idle || status === Status.Loading) {
//       return <PostsLoader />;
//     }

//     if (status === Status.Error) {
//       return <PostsError />
//     }

//     if (status === Status.Success && !posts) {
//       return <></>
//     }

//     return (
//       <>
//         <SearchPosts search={search} onChangeSearch={this.handleChange} onSubmitSearch={this.handleSubmit} />
//         <div className="container-fluid g-0 pb-5 mb-5">
//           <div className="row">
//             {posts.data.map((post) => (
//               <PostsItem key={post.id} post={post} />
//             ))}
//           </div>
//         </div>

//         <div className="pagination">
//           <div className="btn-group my-2 mx-auto btn-group-lg">
//             {[...Array(posts.total_pages)].map((_, index) => (
//               <Button key={index} onClick={() => this.fetchPosts({ page: index + 1, search })}>{index + 1}</Button>
//             ))}
//             <Button className='ms-1 btn-primary' onClick={this.handleLoadMore}>Load more</Button>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
