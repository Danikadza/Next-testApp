import React from "react";
import Image from "next/image";

const Rating = () => {
    return (
        <div className="rating">
            <button  className="rating__likes"><Image src="/Like.svg" alt="like" width={13} height={11}/>Like</button>
            <button  className="rating__dislikes"><Image src="/Dislike.svg" alt="like" width={13} height={11}/>Trash</button>
        </div>
    )
}

export default Rating 