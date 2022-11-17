import { Component } from 'react';
import usersJson from '../../assets/users.json';
import { UsersFilters } from '../UserFilters';

import { UsersItem } from './UsersItem';

export class UsersList extends Component {

  state = {
    users: usersJson
  }

  handleUserDelete = userId => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== userId)
    }))
  }

  render() {
    const { users } = this.state
    return (
      <div className="mb-5">
        <UsersFilters />

        {users.map(user => (
          <UsersItem key={user.id} user={user} onUserDelete={this.handleUserDelete} />
        ))}
      </div>
    );
  }
};