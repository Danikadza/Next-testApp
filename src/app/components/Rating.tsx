import React from "react";
import Image from "next/image";

interface RatingProps {
    likes: number;
    dislikes: number;
}

const Rating = ({likes, dislikes} : RatingProps) => {
    return (
        <div className="rating">
            <button  className="rating__likes"><Image src="/Like.svg" alt="like" width={13} height={11}/>Like {likes}</button>
            <button  className="rating__dislikes"><Image src="/Dislike.svg" alt="like" width={13} height={11}/>Trash {dislikes}</button>
        </div>
    )
}

export default Rating 