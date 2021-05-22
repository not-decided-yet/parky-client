import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap" rel="stylesheet"/>
          <meta name="application-name" content="Parky" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Parky" />
          <meta name="description" content="It's a Parky day!" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/static/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#4560FF" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#4560FF" />

          <link rel="manifest" href="/static/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://parky.ml" />
          <meta name="twitter:title" content="Parky" />
          <meta
            name="twitter:description"
            content="It's a Parky day!"
          />
          <meta
            name="twitter:image"
            content="https://parky.ml/static/icons/android-chrome-192x192.png"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Parky" />
          <meta property="og:description" content="It's a Parky day!" />
          <meta property="og:site_name" content="Parky" />
          <meta property="og:url" content="https://parky.ml" />
          <meta
            property="og:image"
            content="https://parky.ml/static/icons/apple-touch-icon.png"
          />

          <link
            rel="apple-touch-startup-image"
            href="/static/images/apple_splash_2048.png"
            sizes="2048x2732"
          />
          <link
            rel="apple-touch-startup-image"
            href="/static/images/apple_splash_1668.png"
            sizes="1668x2224"
          />
          <link
            rel="apple-touch-startup-image"
            href="/static/images/apple_splash_1536.png"
            sizes="1536x2048"
          />
          <link
            rel="apple-touch-startup-image"
            href="/static/images/apple_splash_1125.png"
            sizes="1125x2436"
          />
          <link
            rel="apple-touch-startup-image"
            href="/static/images/apple_splash_1242.png"
            sizes="1242x2208"
          />
          <link
            rel="apple-touch-startup-image"
            href="/static/images/apple_splash_750.png"
            sizes="750x1334"
          />
          <link
            rel="apple-touch-startup-image"
            href="/static/images/apple_splash_640.png"
            sizes="640x1136"
          />
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
