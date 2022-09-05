import React from 'react';

// mini card = top accounts (followers column)

const MiniCard = () => {
    return (
        <div className="section minicard">
            <div className="section">
                <img className="user-profile" src={''} width={'100%'} alt="user profile img"/>
                <div>
                    <h3 className="bold">username</h3>
                    <p>name</p>
                </div>
            </div>
            <div className="is-followed">Followed</div>
        </div>
    )
};

export default MiniCard;