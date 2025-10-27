import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import FontAwesome from "@/components/icons/FontAwesome";
import BootstrapIcons from "@/components/icons/BootstrapIcons";
import RemixIcons from "@/components/icons/RemixIcons";
import UtilitiesSidebar from "@/components/UtilitiesSidebar";
import BackToTop from "@/components/BackToTop";

export default function Icons() {

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

  const handleCopyCode = async (index) => {
    if (!codeRefs[index].current) return;
    try {
      await navigator.clipboard.writeText(codeRefs[index].current.textContent);
      const newButtonTexts = [...buttonTexts];
      newButtonTexts[index] = "Copied!";
      setButtonTexts(newButtonTexts);
      setTimeout(() => {
        newButtonTexts[index] = "Copy code";
        setButtonTexts(newButtonTexts);
      }, 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <>
     <Head>
        <title>Utilities</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
      <h1>Utility Classes</h1>
      <p>Utility classes can quickly add extra visual interest to sections of text or elements. Easily format text as a label, highlight a sentence within a larger paragraph, or give headings a pop by pairing it with an icon.</p>
      </div>
      <div className="wd-grid">
        <main>
          <h2>Icon Classes</h2>
          <p className="wd-break">Choose from thousands of icons to add visual interest to your course. We offer three icon libraries as part of our Themepack: Font Awesome, Bootstrap Icons, and Remix Icons.</p>
          <div className="wd-subitems">
          <FontAwesome />
          </div>
          <div className="wd-subitems">
          <BootstrapIcons />
          </div>
          <div className="wd-subitems">
          <RemixIcons />
          </div>
        </main>
        <aside>
          <UtilitiesSidebar />
        </aside>
        </div>
        <BackToTop />
        <footer>
          <Footer />
        </footer>
    </>
  )
}