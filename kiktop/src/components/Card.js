import React from 'react';
import { MdFavoriteBorder} from 'react-icons/md';
import { BsChatDots } from 'react-icons/bs';
import { FaRegShareSquare } from 'react-icons/fa';

// card = posts feed

// user = descendingUser
const Card = ({ user, toggleFollow }) => {
    return (
        <div className="card">
            <div className="break" />
            <div className="section">
                <div className="user-info">
                    <img className="user-profile" src={user.avatar} width={'100%'} alt="user profile img"/>
                    <div>
                        <div className="section">
                            <h3 className="bold">{user.username}</h3>
                            <p className="username" title={user.romanized_name}>{user.name}</p>
                        </div>
                        <p>{user.caption}</p>
                    </div>
                </div>
                {/* if user is followed, show the Followed button */}
                {user.button_visible && <div className={user.is_followed ? "followed-button" : "follow-button"} onClick={() => toggleFollow(user)}>
                    {user.is_followed ? "Following" : "Follow"}
                </div>}
            </div>
            <video className="video" controls>
                <source src={user.video} type="video/mp4" />
            </video>
            <div className="section socials">
                <MdFavoriteBorder />
                <div className="social-tag">{user.likes}</div>
                <BsChatDots />
                <div className="social-tag">{user.comments}</div>
                <FaRegShareSquare />
            </div>
        </div>
    )
};

export default Card;