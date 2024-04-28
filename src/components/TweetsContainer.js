import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [currentUser, setCurrentUser] = useState(users[0]);

  function handleViewTweets(user){
    console.log("u clicked the user", user.handle);
    setCurrentUser(user);
  }

  console.log("In TweetsContainer, state is", users);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} handleViewTweets={handleViewTweets}/>
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
