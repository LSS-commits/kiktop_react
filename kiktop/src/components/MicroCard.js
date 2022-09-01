import React from 'react';

// micro card = suggested accounts

const MicroCard = () => {
    return (
        <div className="section microcard">
            <img className="user-profile" src={''} width={'100%'} alt="user profile img"/>
            <div>
                <h3 className="bold">username</h3>
                <p>name</p>
            </div>
        </div>
    )
};

export default MicroCard;