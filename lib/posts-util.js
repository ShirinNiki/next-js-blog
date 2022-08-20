const fs = require("fs");
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

export function getPostFiles() {
  const postFiles = fs.readdirSync(postDirectory);
  return postFiles;
}

export function getPostData(fileName) {
  const postSlug = fileName.replace(/\.md$/, ""); // remove the file extension
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFie) => {
    return getPostData(postFie);
  });
  const storedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return storedPosts;
}

export function getFeaturedPost() {
  const allPosts = getAllPosts();
  // const getFeaturedPosts = allPosts;
  const getFeaturedPosts = allPosts.filter((post) => post.isFeatured);

  return getFeaturedPosts;
}
