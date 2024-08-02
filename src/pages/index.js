import Head from "next/head";
import Navbar from "@/components/Navbar";
import Homepage from "@/components/Homepage";
import Footer from "@/components/Footer";
import { useLayoutEffect } from "react";

export default function Home() {

  // Remove any existing theme link (required to keep theme styles just on the theme page)
  useLayoutEffect(() => {
    const existingLink = document.querySelector("link[data-theme-link]");
    if (existingLink) {
      document.head.removeChild(existingLink);
    }
  }, []);

  return (
    <>
      <Head>
        <title>PimaOnline Webdocs</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <main className="wd-home-main">
        <Homepage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
