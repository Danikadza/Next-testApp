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

const Comments = (commentsData: CommentsProps) => {

    const comments = commentsData.comments

    return (
        <>
        <h1>{commentsData.total} комментариев</h1>
        {
        comments.map((comment:CommentProps) => 
          <Comment key={comment.id} postId={comment.postId} id={comment.id} user={comment.user} body={comment.body} likes={comment.likes} />
        )
      }
        </>
    )
}

export default Comments