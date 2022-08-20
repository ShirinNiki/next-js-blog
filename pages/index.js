import Head from "next/head";
import { Fragment } from "react";
import FeaturedPost from "../components/home-page/featured-post";
import { getFeaturedPost } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my Blog</title>
      </Head>
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPost();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
