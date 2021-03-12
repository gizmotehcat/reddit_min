import React from 'react';
import Posts from '../posts/posts';

function SearchResults (props) {
    if (props.posts) {
        return (
            <div className="TrackList">
                {props.posts.map( data => 
                <Posts 
                key      = {data.id}
                title    = {data.title}
                content  = {data.selftext}
                author   = {data.author}
                time     = {data.created}
                likes    = {data.ups}
                other    = {data}
                />  
                )}
            </div>
       )
    } else {
        return null;    
    }
};

export default SearchResults;