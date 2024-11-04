import Post from "./components/Post";

async function fetchData() {
  const data = await fetch('https://dummyjson.com/posts');
  const result = await data.json();
  return result.posts
}
 
interface PostProps {
  id: string;
  title: string;
  body: string;
  date: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  tags: string[];
}

export default async function Home() {

  const posts = await fetchData();
  return (
    <div className="post__group">
      {
        posts.map((post:PostProps) => 
          <Post key={post.id} id={post.id} title={post.title} text={post.body} date="Today" tags={post.tags} likes={post.reactions.likes} dislikes={post.reactions.dislikes}/>
        )
      }
      
    </div>
  );
}
