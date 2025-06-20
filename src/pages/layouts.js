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
import BackToTop from "@/components/BackToTop";
import { currentVersion } from '../components/Version';

hljs.registerLanguage("html", html);

export default function Layouts() {
  
  // Remove any existing theme link (required to keep theme styles just on the theme page)
  useLayoutEffect(() => {
    const existingLink = document.querySelector("link[data-theme-link]");
    if (existingLink) {
      document.head.removeChild(existingLink);
    }
  }, []);

  useEffect(() => {
    hljs.highlightAll();
  }, []);
	
  const oneColumnCodeRef = useRef(null);
  const twoColumnCodeRef = useRef(null);
	const threeColumnCodeRef = useRef(null);

  const [oneColumnButtonText, setOneColumnButtonText] = useState("Copy code");
  const [twoColumnButtonText, setTwoColumnButtonText] = useState("Copy code");
	const [threeColumnButtonText, setThreeColumnButtonText] = useState("Copy code");
	const [showOneColumnCode, setShowOneColumnCode] = useState(false);
	const [showTwoColumnCode, setShowTwoColumnCode] = useState(false);
	const [showThreeColumnCode, setShowThreeColumnCode] = useState(false);

	useEffect(() => {
		if (showOneColumnCode && oneColumnCodeRef.current) {
			hljs.highlightElement(oneColumnCodeRef.current);
		}
	}, [showOneColumnCode]);
	
	useEffect(() => {
		if (showTwoColumnCode && twoColumnCodeRef.current) {
			hljs.highlightElement(twoColumnCodeRef.current);
		}
	}, [showTwoColumnCode]);
	
	useEffect(() => {
		if (showThreeColumnCode && threeColumnCodeRef.current) {
			hljs.highlightElement(threeColumnCodeRef.current);
		}
	}, [showThreeColumnCode]);

  const handleCopyCode = (codeRef, setButtonText) => {
    const codeElement = codeRef.current;
    const range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    setButtonText("Copied!");

    setTimeout(() => {
      setButtonText("Copy code");
    }, 2000);
  };  

		useEffect(() => {
			const addMetaToCodeSnippets = () => {
				const codeBlocks = document.querySelectorAll('.wd-html-code code.language-html');
			
				if (codeBlocks.length > 0) {
					codeBlocks.forEach((codeBlock) => {
						let codeContent = codeBlock.textContent;
			
						if (!codeContent.includes('<meta name="version"')) {
							const metaRegex = /<meta[^>]*>/g;
							const matches = [...codeContent.matchAll(metaRegex)];
			
							if (matches.length > 0) {
								const lastMeta = matches[matches.length - 1];
								const insertPosition = lastMeta.index + lastMeta[0].length;
			
								const versionMeta = `\n<meta name="version" content="v${currentVersion}">`;
								codeContent =
									codeContent.slice(0, insertPosition) +
									versionMeta +
									codeContent.slice(insertPosition);
							} else {
								codeContent = codeContent.replace(
									'<head>',
									`<head>\n<meta name="version" content="v${currentVersion}">`
								);
							}
			
							codeBlock.textContent = codeContent;
						}
					});
				}
			};
			addMetaToCodeSnippets();
		}, []);


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
				<button
					className="wd-toggle-btn"
					onClick={() => setShowOneColumnCode(!showOneColumnCode)}>
					{showOneColumnCode ? "Hide code" : "Show code"}
				</button>
				{showOneColumnCode && (
          <button className="wd-copy-btn" onClick={() => handleCopyCode(oneColumnCodeRef, setOneColumnButtonText)}>{oneColumnButtonText}</button>
				)}
					</div>
				{showOneColumnCode && (
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={oneColumnCodeRef}>
            {String.raw`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/css/themes/cards/styles.css">
<link rel="stylesheet" type="text/css" href="../css/custom.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>
<title>Course Introduction</title>
</head>
<body>
  <header class="header">
    <img src="https://via.placeholder.com/1920X600" alt="">
  <div class="text-container">
    <h1>Course Introduction</h1>
    <p>In this course, we will delve into the principles of...</p>
  </div>
  </header>
  <div id="content-wrapper">
    <div class="content-body">
      <h2>Welcome to [course name here]</h2>
      <p>Throughout this course, you will learn how to develop your writing process, from initial brainstorming to...</p>
    </div>
  </div>
  <footer>
    <div id="footer">
      <p class="text-center toggle-footnotes">[Show Footnotes]</p>
      <div class="footnotes">
        <p>As we progress, remember that...</p>
        <ul>
          <li>Engage in structured revision...</li>
          <li>Practice editing for clarity and...</li>
        </ul>
      </div>
    </div>
  </footer>
</body>
</html>
`}</code>
          </pre>
        </div>
				)}
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
				<button
					className="wd-toggle-btn"
					onClick={() => setShowTwoColumnCode(!showTwoColumnCode)}>
					{showTwoColumnCode ? "Hide code" : "Show code"}
				</button>
				{showTwoColumnCode && (
          <button className="wd-copy-btn" onClick={() => handleCopyCode(twoColumnCodeRef, setTwoColumnButtonText)}>{twoColumnButtonText}</button>
				)}
					</div>
				{showTwoColumnCode && (
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={twoColumnCodeRef}>
            {String.raw`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/css/themes/cards/styles.css">
<link rel="stylesheet" type="text/css" href="../css/custom.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>
<title>Course Introduction</title>
</head>
  <body>
    <header class="header">
      <img src="https://via.placeholder.com/1920X600" alt="">
      <div class="text-container">
        <h1>Course Introduction</h1>
        <p>This course will cover essential writing skills that will...</p>
      </div>
    </header>
    <div id="content-wrapper">
      <div class="content-body">
        <h2>Welcome to [course name here]</h2>
        <p>In this course, you’ll explore various writing techniques designed to enhance your academic writing. From understanding the importance of...</p>
      </div>
    </div>
    <div id="second-column">
      <div class="content-body">
        <h2>Assignments</h2>
        <p>Each week, you’ll be assigned a series of tasks designed to build on the skills you’ve learned. These assignments will...</p>
      </div>
    </div>
    <footer>
      <div id="footer">
        <p class="text-center toggle-footnotes">[Show Footnotes]</p>
        <div class="footnotes">
          <p>Remember that writing is a process. Be sure to allocate enough time for...</p>
          <ul>
            <li>Engage actively in...</li>
            <li>Revise your drafts thoroughly before...</li>
          </ul>
        </div>
      </div>
    </footer>
</body>
</html>`}</code>
          </pre>
        </div>
				)}
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
				<button
					className="wd-toggle-btn"
					onClick={() => setShowThreeColumnCode(!showThreeColumnCode)}>
					{showThreeColumnCode ? "Hide code" : "Show code"}
				</button>
				{showThreeColumnCode && (
          <button className="wd-copy-btn" onClick={() => handleCopyCode(threeColumnCodeRef, setThreeColumnButtonText)}>{threeColumnButtonText}</button>
				)}
				</div>
				{showThreeColumnCode && (
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={threeColumnCodeRef}>
            {String.raw`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/css/themes/cards/styles.css">
<link rel="stylesheet" type="text/css" href="../css/custom.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>
<title>Course Introduction</title>
</head>
  <body>
    <header class="header">
      <img src="https://via.placeholder.com/1920X600" alt="">
      <div class="text-container">
        <h1>Course Introduction</h1>
        <p>This introductory writing course will...</p>
      </div>
    </header>
    <div id="content-wrapper">
      <div class="content-body">
        <h2>Welcome to [course name here]</h2>
        <p>In this course, we’ll cover topics such as developing a strong thesis statement, organizing your...</p>
      </div>
    </div>
    <div id="second-column">
      <div class="content-body">
        <h2>Assignments</h2>
        <p>Each week, you’ll have assignments that build on previous lessons...</p>
      </div>
    </div>
    <div id="third-column">
      <div class="content-body">
       <h2>Readings for this Week</h2>
       <p>This week’s readings will introduce you to key writing principles, such as...</p>
      </div>
    </div>
    <footer>
      <div id="footer">
        <p class="text-center toggle-footnotes">[Show Footnotes]</p>
        <div class="footnotes">
          <p>Writing is a recursive process. Remember to...</p>
          <ul>
            <li>Take time to review your peers' essays and provide...</li>
            <li>Ensure each essay has a clear...</li>
          </ul>
        </div>
      </div>
    </footer>
</body>
</html>`}</code>
          </pre>
        </div>
				)}
      </div>
      </div>
      </section>
      </main>
      <aside>
          <Sidebar />
      </aside>
      </div>
      <BackToTop/>
      <footer>
          <Footer />
        </footer>
    </>
  )
}
