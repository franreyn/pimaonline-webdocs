import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js" defer="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}