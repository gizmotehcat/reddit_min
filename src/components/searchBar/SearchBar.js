import './SearchBar.css';
import React from 'react';

function SearchBar (props) {
    const onEnter = (e) => {
        if (e.key === "Enter") {
            props.searchTerm(e.target.value);
        };
    };

    return (
        <input onKeyPress={onEnter} placeholder={props.subReddit} type="search" />
    );
};

export default SearchBar;