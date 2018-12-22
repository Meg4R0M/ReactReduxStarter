import React, { Component } from 'react';
import UserList from '../containers/user_list'
import UserDetail from "../containers/user_detail";

export default class App extends Component {
  render() {
    return (
        <div className="mt-md-2">
          <UserList/>
          <UserDetail/>
        </div>
    );
  }
}
