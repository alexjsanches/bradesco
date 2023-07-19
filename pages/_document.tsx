import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <meta property="og:title" content="B Mais Saúde" />
          <meta property="og:description" content="Planos de saúde e odontológicos" />
          <link rel="icon" href="favicon/favicon.ico" />
          <meta name="facebook-domain-verification" content="jf5fsutqw4u76q01h4q9osrk9v1hzc" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
