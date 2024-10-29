"use client";

import React, { useState } from "react";
import Image from "next/image";

interface RatingProps {
    likes: number;
    dislikes: number;
}

const Rating = ({ likes, dislikes }: RatingProps) => {

    const [rating, setRating] = useState<string>();

    const handleLikeClick = () => {
        if (rating === 'like') {
            setRating(undefined);
        } else {
            setRating('like');
        }
    };

    const handleDislikeClick = () => {
        if (rating === 'dislike') {
            setRating(undefined);
        } else {
            setRating('dislike');
        }
    };

    return (
        <div className="rating">
            <button className={`rating__likes ${rating === 'like' ? 'liked' : ''}`} onClick={handleLikeClick} ><Image src="/Like.svg" alt="like" width={13} height={11} />Like {likes}</button>
            <button className={`rating__dislikes ${rating === 'dislike' ? 'disliked' : ''}`} onClick={handleDislikeClick}><Image src="/Dislike.svg" alt="like" width={13} height={11} />Trash {dislikes}</button>
        </div>
    )
}

export default Rating 