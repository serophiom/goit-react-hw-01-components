import React from 'react';
import FriendListItem from './FriendListItem';
import friends from '../../friends.json'


const FriendList = () => {
  return (
    <ul className="friend-list">
    {friends.map(({ name, isOnline, avatar, id }) => (
                <li className="item" key={id}>
                    <FriendListItem 
                    name={name}
                    isOnline={isOnline}
                    avatar={avatar}
                    />
                </li>
            ))   
    }
  </ul>
  );
};

export default FriendList;