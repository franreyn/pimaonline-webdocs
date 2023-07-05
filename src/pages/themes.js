import Head from "next/head";
import Footer from "@/components/Footer";

export default function Themes() {
  return (
    <>
      <Head>
        <title>PimaOnline Webdocs</title>
        <meta name="description" content="Pima Online Webdocs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
