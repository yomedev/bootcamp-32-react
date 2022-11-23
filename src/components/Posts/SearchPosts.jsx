import { Component } from 'react';

import { Button } from '../Button';

export class SearchPosts extends Component {

  // handleSubmit = () => {
  //   this.props.onSubmit({ search: this.state.search })
  // }

  render() {
    const { search, onChangeSearch, onSubmitSearch } = this.props
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" value={search} onChange={onChangeSearch} placeholder="Type to search..." />
        <Button onClick={onSubmitSearch}>Search</Button>
      </div>
    );
  }
}