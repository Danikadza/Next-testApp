import Comment from "./Comment";

interface CommentsProps {
    total: number;
    skip: number;
    limit: number;
    comments: [{
        id: number;
        body: string;
        postId: number;
        likes: number;
        user: {
            id: number;
            username: string;
            fullname: string;
        }
    }]
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

    const comments = commentsData.comments

    const commentWord = getCommentWord(commentsData.total);

    return (
        <>
        <h1>{commentsData.total} {commentWord}</h1>
        {
        comments.map((comment:CommentProps) => 
          <Comment key={comment.id} postId={comment.postId} id={comment.id} user={comment.user} body={comment.body} likes={comment.likes} />
        )
      }
        </>
    )
}

export default Comments