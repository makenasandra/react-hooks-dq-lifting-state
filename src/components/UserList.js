import React from "react";
import UserCard from "./UserCard";

function UserList(props) {
  const {handleViewTweets,users} = props;
  return (
    <div className="ui cards">
      {props.users.map((user) => (
        <UserCard
          key={user.id}
          handleUserClick={()=>handleViewTweets(user)}
          {...user}
        />
      ))}
    </div>
  );
}

export default UserList;
