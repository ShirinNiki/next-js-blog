import Image from "next/image";
import Link from "next/link";
function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  // console.log("xx:", props);
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${image}`;
  const postPath = `/posts/${slug}`;
  // console.log(props);
  return (
    <div className="row blog-item px-3 pb-5">
      <div className="col-md-5">
        <Image
          className="img-fluid mb-4 mb-md-0"
          src={imagePath}
          alt={title}
          width={270}
          height={210}
          layout="responsive"
        />
      </div>
      <div className="col-md-7">
        <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">
          {title}
        </h3>
        <div className="d-flex mb-3">
          <small className="mr-2 text-muted">
            <i className="fa fa-calendar-alt"></i> {formattedDate}
          </small>
        </div>
        <p>{excerpt}</p>
        <Link href={postPath}>
          <a className="btn btn-link p-0">
            Read More <i className="fa fa-angle-right"></i>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default PostItem;
