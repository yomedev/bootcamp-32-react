import { Component } from 'react';



import { Button } from '../Button';
import { PostsError } from './PostsError';

import { PostsItem } from './PostsItem';
import { PostsLoader } from './PostsLoader';
import { SearchPosts } from './SearchPosts'
import { getPostsService } from '../../services/posts.service';
import { Status } from '../../constants/fetch-status';

const arr = [...Array(9)];

// idle -> loading -> success -> error

export class Posts extends Component {
  state = {
    posts: null,
    status: Status.Idle,
    search: '',
  };

  async componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts = async (params) => { // params => {page, search}
    this.setState({ status: Status.Loading })
    try {
      const resPosts = await getPostsService(params)
      this.setState({ posts: resPosts, status: Status.Success })
    } catch (error) {
      this.setState({ status: Status.Error })
    }
  }

  handleChange = event => {
    this.setState({ search: event.target.value })
  }

  handleSubmit = () => {
    const { search } = this.state
    this.fetchPosts({ search })
  }

  handleLoadMore = async () => {
    console.log(this.state.posts.page + 1);

    const { posts, search } = this.state
    if (posts.page < posts.total_pages) {
      const resPosts = await getPostsService({ page: posts.page + 1, search }) // content of page 2
      this.setState(prevState => ({ posts: { ...resPosts, data: [...prevState.posts.data, ...resPosts.data] } }))
    }

  }

  /*
  {
  data: [],
  page: 1,
  total_pages: 
  ...
  }
  */

  render() {
    const { posts, status, search } = this.state;

    if (status === Status.Idle || status === Status.Loading) {
      return <PostsLoader />;
    }

    if (status === Status.Error) {
      return <PostsError />
    }

    if (status === Status.Success && !posts) {
      return <></>
    }

    return (
      <>
        <SearchPosts search={search} onChangeSearch={this.handleChange} onSubmitSearch={this.handleSubmit} />
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
              <Button key={index} onClick={() => this.fetchPosts({ page: index + 1, search })}>{index + 1}</Button> // fetchPosts({search: 'cat', page: 1})
            ))}
            <Button className='ms-1 btn-primary' onClick={this.handleLoadMore}>Load more</Button>
          </div>

        </div>
      </>
    );
  }
}
