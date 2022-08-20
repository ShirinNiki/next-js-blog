import React, { Fragment } from "react";
import Hero from "./hero";

import Navigation from "./navigation";

function Layout(props) {
  return (
    <div className="wrapper">
      <Hero />
      <div className="content">
        <Navigation />
        <main>{props.children}</main>
      </div>
    </div>
  );
}

export default Layout;
