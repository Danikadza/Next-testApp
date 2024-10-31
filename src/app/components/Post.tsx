import React from "react";
import Rating from "./Rating";
import Link from "next/link";

interface PostProps {
    id: string;
    title: string;
    text: string;
    date: string;
    likes: number;
    dislikes: number;
    tags: string;
}

const Post = ({title, text, date, likes, dislikes, tags, id}: PostProps) => {
    console.log(title)
    return (
        <div className="post">
            <h1 className="post__title">{title}</h1>
            <div className="post__text">{text}</div>
            <div className="post__info">
                <Rating likes={likes} dislikes={dislikes}/>
                <Link href="/" className="post__info__comments">Open comments</Link>
                <div className="post__info__date">{date}</div>
                <div className="post__info__tags">{tags}</div>
            </div>
        </div>
    )
}

export default Post