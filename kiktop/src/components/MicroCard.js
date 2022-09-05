import React from 'react';

// micro card = top accounts

const MicroCard = ({user}) => {
    return (
        <div className="section microcard">
            <img className="user-profile" src={user.avatar} width={'100%'} alt="user profile img"/>
            <div>
                <h3 className="bold">{user.username}</h3>
                <p>{user.romanized_name}</p>
            </div>
        </div>
    )
};

export default MicroCard;