import PostItem from "./post-item";

function PostGride(props) {
  const { posts } = props.posts;
  // console.log("postGride", posts);
  // console.log("post-props", props);
  return (
    <div className="container bg-white pt-5">
      {posts.map((post) => {
        return <PostItem key={post.slug} post={post} />;
      })}
    </div>
  );
}

export default PostGride;
