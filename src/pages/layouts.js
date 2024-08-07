import Head from "next/head";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import styles from "../styles/layouts.module.css"
import Footer from "../components/Footer"
import DocsIntro from "@/components/DocsIntro";

export default function Layouts() {
  
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
        <title>Layouts</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
      <DocsIntro />
      </div>
      <div className="wd-grid">
      <main>
      <h2>Layouts</h2>
          <p className="wd-break">You may choose between three layout types.</p>
          <section className="wd-content" id="toc-one-column-layout">
          <div className="wd-subitems">
          <h3 id="one-column-layout" className="section-top anchor">One Column Layout</h3>
          <p>The <strong>One Column Layout</strong> is ideal for inner pages, meaning the pages that come after the module overview and contain the majority of the learning content. Its simple single-column design allows content to flow from top to bottom keeping the learner's focus on one item at a time. This layout is great for text heavy and information heavy sections.</p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <img className={styles.mockLayout} src="/images/1-column.jpg"/>
        </div>
        <div className="wd-btn-container">
          <button className="wd-copy-btn" onClick={() => handleCopyCode(0)}>{buttonTexts[0]}</button>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={codeRefs[0]}>
            {String.raw`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/css/themes/cards/styles.css">
<link rel="stylesheet" type="text/css" href="../css/custom.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js" defer></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>
<title>Starter Template</title>
</head>
<body>
  <header class="header">
    <img src="https://via.placeholder.com/1920X600" alt="">
  <div class="text-container">
    <h1>Course Intro</h1>
    <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta.</p>
  </div>
  </header>
  <div id="content-wrapper">
    <div class="content-body">
      <h2>Welcome to [course name here]</h2>
      <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
    </div>
  </div>
  <footer>
    <div id="footer">
      <p class="text-center toggle-footnotes">[Show Footnotes]</p>
      <div class="footnotes">
        <p>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
        <ul>
          <li>Lorem culim ghus.</li>
          <li>Ipsum guar havana.</li>
        </ul>
      </div>
    </div>
  </footer>
</body>
</html>`}
            </code>
          </pre>
        </div>
      </div>
      </div>
      </section>
      <section className="wd-content" id="toc-two-column-layout">
      <div className="wd-subitems">
      <h3 id="two-column-layout" className="section-top anchor">Two Column Layout</h3>
      <p><strong>The Two Column Layout</strong> is ideal for module overviews. In the larger left-column you can place primary content such as learning objectives, required readings, or homework. In the smaller right-column you can place supplementary content such as an assignments list, image gallery, or vocabulary list.</p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <img className={styles.mockLayout} src="/images/2-column.jpg"/>
        </div>
        <div className="wd-btn-container">
          <button className="wd-copy-btn" onClick={() => handleCopyCode(0)}>{buttonTexts[0]}</button>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={codeRefs[1]}>
            {String.raw`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/css/themes/cards/styles.css">
<link rel="stylesheet" type="text/css" href="../css/custom.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js" defer></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>
<title>Starter Template</title>
</head>
  <body>
    <header class="header">
      <img src="https://via.placeholder.com/1920X600" alt="">
      <div class="text-container">
        <h1>Course Intro</h1>
        <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta.</p>
      </div>
    </header>
    <div id="content-wrapper">
      <div class="content-body">
        <h2>Welcome to [course name here]</h2>
        <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
      </div>
    </div>
    <div id="second-column">
      <div class="content-body">
        <h2>Assignments</h2>
        <p>Vitae purus faucibus ornare suspendisse sed. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Eget lorem dolor sed viverra ipsum nunc. Blandit aliquam etiam erat velit scelerisque in dictum non. Morbi tristique senectus et netus et. Scelerisque in dictum non consectetur a erat. Eu augue ut lectus arcu bibendum at varius vel pharetra.</p>
      </div>
    </div>
    <footer>
      <div id="footer">
        <p class="text-center toggle-footnotes">[Show Footnotes]</p>
        <div class="footnotes">
          <p>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
          <ul>
            <li>Lorem culim ghus.</li>
            <li>Ipsum guar havana.</li>
          </ul>
        </div>
      </div>
    </footer>
</body>
</html>`}
            </code>
          </pre>
        </div>
    </div>
    </div>
      </section>

      <section className="wd-content" id="toc-three-section-layout">
      <div className="wd-subitems">
      <h3 id="three-section-layout" className="section-top anchor">Three Section Layout</h3>
      <p>The Three Section Layout displays two columns with a full-width column underneath. This layout is a combination of both previous layouts and is ideal for overview modules when the overview content is more involved.</p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <img className={styles.mockLayout} src="/images/3-column.jpg"/>
        </div>
        <div className="wd-btn-container">
          <button className="wd-copy-btn" onClick={() => handleCopyCode(0)}>{buttonTexts[0]}</button>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={codeRefs[2]}>
            {String.raw`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/css/themes/cards/styles.css">
<link rel="stylesheet" type="text/css" href="../css/custom.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js" defer></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>
<title>Starter Template</title>
</head>
  <body>
    <header class="header">
      <img src="https://via.placeholder.com/1920X600" alt="">
      <div class="text-container">
        <h1>Course Intro</h1>
        <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta.</p>
      </div>
    </header>
    <div id="content-wrapper">
      <div class="content-body">
        <h2>Welcome to [course name here]</h2>
        <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
      </div>
    </div>
    <div id="second-column">
      <div class="content-body">
        <h2>Assignments</h2>
        <p>Vitae purus faucibus ornare suspendisse sed. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Eget lorem dolor sed viverra ipsum nunc. Blandit aliquam etiam erat velit scelerisque in dictum non. Morbi tristique senectus et netus et. Scelerisque in dictum non consectetur a erat. Eu augue ut lectus arcu bibendum at varius vel pharetra.</p>
      </div>
    </div>
    <div id="third-column">
      <div class="content-body">
       <h2>Readings for this week</h2>
       <p>Proin gravida hendrerit lectus a. Pulvinar neque laoreet suspendisse interdum. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Congue nisi vitae suscipit tellus mauris a. Eget aliquet nibh praesent tristique magna sit amet purus.</p>
      </div>
    </div>
    <footer>
      <div id="footer">
        <p class="text-center toggle-footnotes">[Show Footnotes]</p>
        <div class="footnotes">
          <p>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
          <ul>
            <li>Lorem culim ghus.</li>
            <li>Ipsum guar havana.</li>
          </ul>
        </div>
      </div>
    </footer>
</body>
</html>`}
            </code>
          </pre>
        </div>
      </div>
      </div>
      </section>
      </main>
      <aside>
          <Sidebar />
      </aside>
      </div>
      <footer>
          <Footer />
        </footer>
    </>
  )
}
