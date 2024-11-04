import Post from '../components/Post';
import Comments from '../components/Comments';

async function fetchPostData(id:string) {
  const data = await fetch(`https://dummyjson.com/posts/${id}`);
  const result = await data.json();
  return result
}

async function fetchCommentsData(id:string) {
  const data = await fetch(`https://dummyjson.com/posts/${id}/comments`);
  const result = await data.json();
  return result
}

interface PostIdProps {
  params: {
    postId: string; 
  };
}


export default async function PostId({params}:PostIdProps) {
  const {postId} = await params; 
  if (postId !== undefined && typeof postId === 'string' ){
    const post = await fetchPostData(postId);
    const comments = await fetchCommentsData(postId);
    return (
      <div className='commentsPage'>
      <Post id={post.id} title={post.title} text={post.body} date="Today" tags={post.tags} likes={post.reactions.likes} dislikes={post.reactions.dislikes}/>
      <Comments total={comments.total} skip={comments.skip} limit={comments.limit} comments={comments.comments}/>
      </div>
    );
  }
  else {
    return (
      <div>
      <h1>Ошибка</h1>
      </div>
    );
  }
  
}
