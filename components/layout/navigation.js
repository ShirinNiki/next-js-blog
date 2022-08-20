import React from "react";
import Link from "next/link";

function Navigation() {
  return (
    <div className="container p-0">
      <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
        <a className="navbar-brand d-block d-lg-none">Navigation</a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav m-auto">
            <Link href="/">
              <span className="nav-item nav-link active">Home</span>
            </Link>

            <Link href="/contact" className="nav-item nav-link">
              <span className="nav-item nav-link">Contact</span>
            </Link>

            <Link href="/posts" className="nav-item nav-link">
              <span className="nav-item nav-link">Posts</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
