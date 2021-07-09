import React from 'react';

const FriendListItem = ({ name, isOnline, avatar }) => {
    return (
        <>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
        </>
    )
}

export default FriendListItem;
