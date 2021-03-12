import './subRedditSelection.css'
import React from 'react';

function Select (props) {
    const handleClick = (e) => {
        props.subSelect(e.target.innerHTML)
    }

    return (
        <div className="subReddit-container">
            <div onClick={handleClick} className="subReddits">
                r/funny
            </div>
            <div onClick={handleClick} className="subReddits">
                r/ukpolitics
            </div>
            <div onClick={handleClick} className="subReddits">
                r/NatureIsFuckingLit
            </div>
            <div onClick={handleClick} className="subReddits">
                r/AnimalsBeingBros
            </div>
        </div>
    );
};

export default Select;