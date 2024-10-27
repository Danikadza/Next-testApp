import React from "react";
import Link from "next/link";
import Rating from "./Rating";

const Post = () => {
    return (
        <div>
            <h1>Post1</h1>
            <div>Post text</div>
            <div>
                <Rating/>
            </div>
        </div>
    )
}

export default Post