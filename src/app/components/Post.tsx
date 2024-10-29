import React from "react";
import Rating from "./Rating";

const Post = () => {
    return (
        <div className="post">
            <h1 className="post__header">Post1</h1>
            <div className="post__text">Post text</div>
            <div className="post__info">
                <Rating/>
                <button className="post__info__comments">Open comments</button>
                <div className="post__info__date">date</div>
                <div className="post__info__tags">Tag</div>
            </div>
        </div>
    )
}

export default Post