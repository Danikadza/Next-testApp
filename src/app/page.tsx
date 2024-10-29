import Post from "./components/Post";

async function fetchData() {
  const data = await fetch('https://dummyjson.com/posts');
  const result = await data.json();
  return result.posts
}
 
export default async function Home() {

  const posts = await fetchData();

  return (
    <div className="post__group">
      <Post id={posts[0].id} title={posts[0].title} text={posts[0].body} date="Today" tags={posts[0].tags} likes={posts[0].reactions.likes} dislikes={posts[0].reactions.dislikes}/>
    </div>
  );
}
