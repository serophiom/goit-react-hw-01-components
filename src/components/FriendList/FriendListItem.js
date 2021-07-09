import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ name, isOnline, avatar }) => {
    return (
        <>
        {isOnline
        ? <span className="status-true"></span>
        : <span className="status-false"></span>
        }
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
        </>
    )
}

FriendListItem.defaultProps = {
    avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
  }

export default FriendListItem;