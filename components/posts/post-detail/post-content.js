import Image from "next/image";
import PostHeader from "./post-header";

import ReactMarkdown from "react-markdown";

function PostContent(props) {
  const { post } = props;
  const customRender = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${image.src}`}
          width={400}
          height={300}
          alt={image.alt}
        />
      );
    },
  };
  return (
    <article>
      <PostHeader title={post.title} />
      <div className="container py-5 px-2 bg-white">
        <div className="row px-4">
          <div className="col-12">
            <Image
              className="img-fluid mb-4"
              src="/images/posts/detail.jpg"
              alt={post.title}
              width={670}
              height={420}
            />
            <h2 className="mb-3 font-weight-bold">{post.title}</h2>
            <div className="d-flex">
              <p className="mr-3 text-muted">
                <i className="fa fa-calendar-alt"></i>
                {post.date}
              </p>
            </div>
            <p>{post.excerpt}</p>
            <Image
              className="w-50 float-left mr-4 mb-3"
              src={`/images/posts/${post.image}`}
              alt="Image"
              width={350}
              height={280}
            />
            <ReactMarkdown components={customRender}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PostContent;
