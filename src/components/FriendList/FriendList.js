import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import friends from '../../friends.json';
import './FriendList.css';


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



FriendList.propTypes = {
  name: PropTypes.string,
  isOnline: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.number,
}

export default FriendList;