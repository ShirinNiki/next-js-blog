import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div>
          <script src="https://code.jquery.com/jquery-3.4.1.min.js" defer />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"
            defer
          />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
