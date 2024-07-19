import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/assets/images/logo.svg" as="image" />
        <link
          rel="preload"
          href="/assets/images/star-cleaners.webp"
          as="image"
        />
      </Head>
      <body className="text-textBlack bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
