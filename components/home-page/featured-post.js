import PostGride from "../posts/post-grid";

function FeaturedPost(props) {
  //console.log("featurePst", props.posts);
  return (
    <section>
      <h2>featured-post</h2>
      <PostGride posts={props} />
    </section>
  );
}

export default FeaturedPost;
