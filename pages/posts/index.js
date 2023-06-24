import Link from 'next/link';

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <h1>
              {post.id} - {post.title}
            </h1>
          </Link>
          <hr />
        </div>
      ))}
      <Link href="/">Home</Link>
    </div>
  );
};

export default Posts;

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
