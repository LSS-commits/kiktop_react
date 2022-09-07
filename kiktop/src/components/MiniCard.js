import React from 'react';

// mini card = suggested accounts

// user = notFollowingUser

const MiniCard = ({user, toggleFollow}) => {
    return (
        <div className="section minicard">
            <div className="section">
                <img className="user-profile" src={user.avatar} width={'100%'} alt="user profile img"/>
                <div>
                    <h3 className="bold">{user.username}</h3>
                    <p>{user.romanized_name}</p>
                </div>
            </div>
            {/* if user is followed, show the Followed button */}
            {user.button_visible && <div className={user.is_followed ? "followed-button" : "follow-button"} onClick={() => toggleFollow(user)}>
                {user.is_followed ? "Following" : "Follow"}
            </div>}
        </div>
    )
};

export default MiniCard;