import React from 'react';
import { FaHeart, FaCommentDots, FaShareSquare } from 'react-icons/fa';
// import { IconContext } from 'react-icons';

// card = posts feed

const Card = () => {

    return (
        <div className="card">
            <div className="break" />
            <div className="section">
                <div className="user-info">
                    <img className="user-profile" src={''} width={'100%'} alt="user profile img"/>
                    <div>
                        <div className="section">
                            <h3 className="bold">username</h3>
                            <p className="username">name</p>
                            <p>{timeStampReformat}</p>
                        </div>
                        <p>{user.caption}</p>
                    </div>
                </div>
                <div className="is-followed">Followed</div>
            </div>
            <video className="video" controls>
                <source src={user.video} type="video/mp4" />
            </video>
            <div className="section socials">
                {/* <i className="far fa-heart"></i> */}
                <FaHeart />
                <div className="social-tag">likes</div>
                {/* <i className="far fa-comments-dots"></i> */}
                <FaCommentDots />
                <div className="social-tag">comments</div>
                {/* <i className="far fa-share-square"></i> */}
                <FaShareSquare />
            </div>
        </div>
    );
};

export default Card;