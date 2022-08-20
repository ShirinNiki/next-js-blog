import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="sidebar">
      <div className="sidebar-text  d-flex flex-column h-100 justify-content-center text-center">
        <Image
          className="mx-auto d-block bg-primary img-fluid rounded-circle p-3"
          src="/images/site/shirin.jpg"
          alt="an Image showing Shirin"
          width={250}
          height={250}
        />
        <h1 className="font-weight-bold">Shirin Niki</h1>
        <p className="mb-4">
          Web Developer | PHP, JavaScript, TypeScript, React
        </p>
        <p className="mb-4">
          Web developer with industry experience in developing the website and
          web applications with PHP, TypeScript, JavaScript, HTML5 and CSS3 with
          cutting-edge technologies such as React.js, Next.js, Redux, SASS and …
          in agile environments.
        </p>
        <div className="d-flex justify-content-center mb-5">
          <a className="btn btn-outline-primary mr-2" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-outline-primary mr-2" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-outline-primary mr-2" href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="btn btn-outline-primary mr-2" href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <a href="" className="btn btn-lg btn-block btn-primary mt-auto">
          Hire Me
        </a>
      </div>
      <div className="sidebar-icon d-flex flex-column h-100 justify-content-center text-right">
        <i className="fas fa-2x fa-angle-double-right text-primary"></i>
      </div>
    </section>
  );
}

export default Hero;
