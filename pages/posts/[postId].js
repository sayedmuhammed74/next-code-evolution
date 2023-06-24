const Post = ({ post }) => {
  return (
    <>
      <h1>Post</h1>
      <div>
        <h1>
          {post.id} - {post.title}
        </h1>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  const paths = data.map((post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { postId } = params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
}
