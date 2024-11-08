"use client";

import Comment from "./Comment";
import React, { useState, useEffect} from 'react';


interface CommentsProps {
    total: number;
    skip: number;
    limit: number;
    comments: {
        id: number;
        body: string;
        postId: number;
        likes: number;
        user: {
            id: number;
            username: string;
            fullname: string;
        }
    }[]
}

interface CommentProps {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: {
        id: number;
        username: string;
        fullname: string;
    }
}

function getCommentWord(count:number) {
    if (count % 10 === 1 && count % 100 !== 11) {
        return 'комментарий';
    } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 12 || count % 100 > 14)) {
        return 'комментария';
    } else {
        return 'комментариев';
    }
}

const Comments = (commentsData: CommentsProps) => {

    const [comments, setComments] = useState(commentsData.comments);

    const [commentsTotal, setCommentsTotal] = useState(commentsData.total);

    const [commentWord, setCommentsWord] = useState(getCommentWord(commentsData.total));


    const handleDelete = (id: number) => {
        const updatedComments = comments.filter(comment => comment.id !== id);
        setComments(updatedComments);
        setCommentsTotal(commentsTotal - 1)
    };

    useEffect(() =>{
        setCommentsWord(getCommentWord(commentsTotal))
    },[commentsTotal]);

    return (
        <>
        <h1>{commentsTotal} {commentWord}</h1>
        {
        comments.map((comment:CommentProps) => 
          <Comment key={comment.id} postId={comment.postId} id={comment.id} user={comment.user} body={comment.body} likes={comment.likes} onDelete={handleDelete}/>
        )
      }
        </>
    )
}

export default Comments