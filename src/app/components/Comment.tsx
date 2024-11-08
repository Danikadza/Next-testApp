import Image from "next/image";

interface CommentProps {
        id: number;
        body: string;
        postId: number;
        likes: number;
        user: {
            id: number;
            username: string;
            fullname: string;
        };
        onDelete: (id: number) => void;
}

const Comment = ({id, body, postId, likes, user, onDelete}: CommentProps) => {
    return (
        <>
        <div className="comment">
            <Image src='/Avatar.svg' alt="avatar" width={46} height={46}/>
            <div className="comment__body">
                <div className="comment__body__username">{user.username}</div>
                <div className="comment__body__text">{body}</div>
                <div className="comment__body__info">
                    <div className="comment__body__info__date">Today</div>
                    <button className="comment__body__info__delete" onClick={() => onDelete(id)}>Удалить</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Comment