import { getAllPosts } from "../../lib/posts-util";
import AllPosts from "../../components/posts/all-posts";
const DUMMMY_DATA = [
  {
    slug: "lorem_ipsum_dolor_sit_amet",
    title: "Lorem ipsum dolor sit amet",
    image: "blog-1.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero ",
    date: "2022-02-12",
  },
  {
    slug: "lorem_ipsum_dolor_sit_amet2",
    title: "Lorem ipsum dolor sit amet22",
    image: "blog-2.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero ",
    date: "2022-06-12",
  },
  {
    slug: "lorem_ipsum_dolor_sit_amet3",
    title: "Lorem ipsum dolor sit amet22",
    image: "blog-3.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero ",
    date: "2022-06-12",
  },
  {
    slug: "lorem_ipsum_dolor_sit_amet4",
    title: "Lorem ipsum dolor sit amet22",
    image: "blog-4.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero ",
    date: "2022-06-14",
  },
  {
    slug: "lorem_ipsum_dolor_sit_amet5",
    title: "Lorem ipsum dolor sit amet5",
    image: "blog-5.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero ",
    date: "2022-06-15",
  },
];

function AllPostsPage(props) {
  console.log(props);
  return <AllPosts posts={props.posts} />;
}
export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
