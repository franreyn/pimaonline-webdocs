import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import DarkMode from "@/components/plugins/DarkMode";
import FocusText from "@/components/plugins/FocusText";
import LargeText from "@/components/plugins/LargeText";
import NarrowWidth from "@/components/plugins/NarrowWidth";
import ViewOptions from "@/components/plugins/ViewOptions";
import CustomCombos from "@/components/plugins/CustomCombos";
import AnimationLibrary from "@/components/plugins/AnimationLibrary";
import PluginsSidebar from "@/components/PluginsSidebar";

export default function Plugins() {

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
        <title>Utilities</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
      <h1>Plugins</h1>
<p>Plugins are view option features you can add into your code for various effects on your overall layout. Pick and choose which to add to your course or add them all at once.</p>
      </div>
      <div className="wd-grid">
        <main>
          <h2>Animation Library</h2>
          <p>Add animation classes to content you'd like to animate.</p>
          <div className="wd-subitems">
          <AnimationLibrary />
          </div>
          <h2>View Options</h2>
        <p className="wd-break">Quickly offer view option features by adding just a single attribute to your <span className="wd-monospace">&lt;body&gt;</span> element</p>
          <div className="wd-subitems">
          <DarkMode />
          </div>
          <div className="wd-subitems">
          <FocusText />
          </div>
          <div className="wd-subitems">
          <LargeText />
          </div>
          <div className="wd-subitems">
          <NarrowWidth />
          </div>
          <div className="wd-subitems">
          <CustomCombos />
          </div>
          <div className="wd-subitems">
          <ViewOptions />
          </div>
        </main>
        <aside>
          <PluginsSidebar />
        </aside>
        </div>
        <footer>
          <Footer />
        </footer>
    </>
  )
}