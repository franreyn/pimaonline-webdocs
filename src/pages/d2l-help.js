import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import D2LHelpSidebar from "@/components/D2LHelpSidebar";
import HowToAddTemplate from "@/components/d2l-help/HowToAddTemplate";
import HowToAddYouTube from "@/components/d2l-help/HowToAddYouTube";

export default function d2lHelp() {

  // Remove any existing theme link (required to keep theme styles just on the theme page)
  useLayoutEffect(() => {
    const existingLink = document.querySelector("link[data-theme-link]");
    if (existingLink) {
      document.head.removeChild(existingLink);
    }
  }, []);

  hljs.registerLanguage("html", html);
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const codeRefs = [
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const [buttonTexts, setButtonTexts] = useState([
    "Copy code",
    "Copy code",
    "Copy code"
  ]);

  const handleCopyCode = (index) => {
    const range = document.createRange();
    range.selectNode(codeRefs[index].current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    const newButtonTexts = [...buttonTexts];
    newButtonTexts[index] = "Copied!";
    setButtonTexts(newButtonTexts);

    setTimeout(() => {
      newButtonTexts[index] = "Copy code";
      setButtonTexts(newButtonTexts);
    }, 2000);
  };  

  return (
    <>
     <Head>
        <title>D2L Help</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
      <h1>D2L Help</h1>
			<p>Find help articles on specific D2L tasks related to Themepack.</p>
      </div>
      <div className="wd-grid">
        <main>
					<HowToAddTemplate />
					<HowToAddYouTube />
        </main>
        <aside>
          <D2LHelpSidebar />
        </aside>
        </div>
        <footer>
          <Footer />
        </footer>
    </>
  )
}