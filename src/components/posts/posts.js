import './posts.css'
import React, {useEffect, useState} from 'react';
import ReactMarkdown from "react-markdown";
import {subRedditMessFetch} from '../../util/redditAPI';

function Posts (props) {
    const [totalComments, setTotalComments] = useState();
    const [permalink] = useState(props.other.permalink);

    const getPostMess = () => {
        let difference = (Date.now()/1000) - props.time;
        let message;
        if(difference < 86400) {
            message =  "a few hours ago";
        } else {
            message = Math.floor(difference/86400) + " days ago";
        }
        return message;
    }

    const parseImg = () => {
        let image = "";
        if(props.other.preview){
            image = props.other.preview.images[0].source.url;
            image = image.replaceAll(/amp;/ig, '');
            return (<img alt={props.title} src={image} />);
        }
        return image;
    }

    useEffect(() => {
        if(permalink !== "") {
            async function fetchComm() {
                const response = await subRedditMessFetch(permalink);
                setTotalComments(response.length);
            }
            fetchComm();
        }
      },[permalink]);

    return (
        <div className="post-wrapper">
            <div className="post-container">
                <div className="post-header">
                   {props.title}
                </div>
                <div className="post-content">
                    {parseImg()}
                    <ReactMarkdown source={props.content} />
                </div>
                <div className="post-footer">
                    <div className="post-by">
                        Posted by {props.author} {getPostMess()}
                    </div>
                    <div className="post-likes">
                        {props.likes} Upvotes
                    </div>
                    <div className="post-comments-total">
                         {totalComments} comments
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;