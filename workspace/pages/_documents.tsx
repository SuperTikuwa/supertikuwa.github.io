import Document, { Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4774589443305457" crossOrigin="anonymous"></script>
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}