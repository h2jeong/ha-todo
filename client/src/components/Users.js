import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserList from "./UserList";
import "./Users.css";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("Users rendered", this.props);
    const { users, onSelect, userId } = this.props;
    const userList = users
      ? users.map(user => (
          <UserList user={user} onSelect={onSelect} key={user.id} />
        ))
      : [];

    return (
      <div className="users">
        <Link to="/" className="goHome">
          Home
        </Link>
        <h3>유저리스트</h3>
        {userList}
        <Link to={`/users/${userId}`}>선택</Link>
        <Link to="/">뒤로가기</Link>
      </div>
    );
  }
}

export default Users;
