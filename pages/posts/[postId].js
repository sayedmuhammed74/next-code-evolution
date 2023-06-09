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
  return {
    paths: [
      { params: { postId: '1' } },
      { params: { postId: '2' } },
      { params: { postId: '3' } },
    ],
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
