import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLayoutEffect } from "react";
import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";
import Image from "next/image";
import TemplateSidebar from "@/components/TemplateSidebar";
import BackToTop from "@/components/BackToTop";

hljs.registerLanguage("html", html);

export default function TwoColumn6() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");
	const [showCode, setShowCode] = useState(false);

	useEffect(() => {
		if (showCode) {
			hljs.highlightElement(codeRef.current); 
		}
	}, [showCode]);

  hljs.registerLanguage("html", html);
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const handleCopyCode = () => {
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

  // Remove any existing theme link (required to keep theme styles just on the theme page)
  useLayoutEffect(() => {
    const existingLink = document.querySelector("link[data-theme-link]");
    if (existingLink) {
      document.head.removeChild(existingLink);
    }
  }, []);


// Show the highlighted component
const [templateView, setTemplateView] = useState();

// Change the url for the highlighted image
const [templateImage, setTemplateImage] = useState("/images/templates/twocolumn6.jpg");
        
        useEffect(() => {
          switch(templateView) {
            
            case "table":
            setTemplateImage("/images/templates/twocolumn6-table.jpg");
            break;
      
            case "blockquote":
            setTemplateImage("/images/templates/twocolumn6-blockquote.jpg");
            break;
            
            default:
            setTemplateImage("/images/templates/twocolumn6.jpg");
            break;
          }
        }, [templateView]);
      
        const changeToTable = () => {
          if (templateView != "table") {
            setTemplateView("table");
          }
          else {setTemplateView()};
        };

        const changeToBlockquote = () => {
          if (templateView != "blockquote") {
            setTemplateView("blockquote");
          }
          else {setTemplateView()};
        };

  return (
    <>
      <Head>
        <title>Visual Overview</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className="wd-break">Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id="two-column-6">
          <h2>Visual Overview</h2>
          <p>Keep things concise with this template, providing a brief topic overview, neatly arranged tasks &amp; due dates, some relevant imagery, and a key quote from the text. Students will appreciate the direction, without being overwhelmed by information.</p>
					<br />
          <div className="wd-window">
          <div className="wd-btn-container">
							<button
						className="wd-toggle-btn"	onClick={() => setShowCode(!showCode)}>
						{showCode ? "Hide code" : "Show code"}
					</button>
					{showCode && (
					<button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
					)}
            </div>
						{showCode && (
            <div className="wd-html-code">
              <pre>
                <code className="language-html" ref={codeRef}>
                  {String.raw`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/css/themes/cards/styles.css">
<link rel="stylesheet" type="text/css" href="../css/custom.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js" defer></script> 
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>
<title>Module One: Introduction</title>
</head>
<body>
<header class="header"> <img src="https://via.placeholder.com/1920X600" alt="">
  <div class="text-container">
    <h1>Module One: Introduction</h1>
    <p>Welcome to the beginning of our exploration into fundamental concepts. This...</p>
  </div>
</header>
<div id="content-wrapper">
  <div class="content-body">
    <h2 class="icon-bolt">Overview of Module</h2>
    <p>In this module, we will delve into core concepts that form the basis...</p>
    <p> Throughout this module, you'll be exposed to...</p>
    <h2 class="icon-list">Learning Objectives</h2>
    <p class="icon-lightbulb">In this section, we will outline the goals of this module. By the end, you should be able to:
    <ul>
      <li>Understand fundamental...</li>
      <li>Apply theories to...</li>
      <li>Participate in discussions and...</li>
    </ul>
    </p>
    <table class="display-lg" cellpadding="5" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th scope="col">Activity</th>
          <th scope="col">Location</th>
          <th scope="col">Estimated Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="">Lecture</a></td>
          <td>Online Platform</td>
          <td>15 min</td>
        </tr>
        <tr>
          <td><a href="">Reading</a></td>
          <td>Course Text</td>
          <td>45 min</td>
        </tr>
        <tr>
          <td><a href="">Discussion Forum</a></td>
          <td>Course Forum</td>
          <td>30 min</td>
        </tr>
        <tr>
          <td><a href="">Workshop</a></td>
          <td>Interactive Lab</td>
          <td>40 min</td>
        </tr>
        <tr>
          <td><a href="">Assignment</a></td>
          <td>Online Submission</td>
          <td>25 min</td>
        </tr>
        <tr>
          <th>Total Time</th>
          <th></th>
          <th>~3 hours 35 min</th>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div id="second-column">
  <div class="content-body">
    <div class="card-img"> <img src="https://via.placeholder.com/300" alt="" />
      <figcaption class="caption">Figure 1.1: Visual representation of...</figcaption>
    </div>
  </div>
  <div class="content-body">
    <div class="card-img"> <img src="https://via.placeholder.com/300" alt="" />
      <figcaption class="caption">Figure 1.2: Example of application. Here we see...</figcaption>
    </div>
  </div>
  <div class="content-body">
    <blockquote class="text-center">The best way to predict the future is...</blockquote>
  </div>
</div>
<footer>
  <div id="footer">
    <p class="text-center toggle-footnotes">[Show Footnotes]</p>
    <div class="footnotes">
      <p>As we advance, remember that...</p>
      <ul>
        <li>Concepts explained in...</li>
        <li>Examples and...</li>
      </ul>
    </div>
  </div>
</footer>
</body>
</html>`}
                </code>
              </pre>
            </div>
						)}
          </div>
					<h3 className="spacer">Template Preview</h3>
          <div className="template-preview">
            <Image src={templateImage} alt="" width={800} height={1400} priority/>
            <div>
              <h4>Featured Widgets</h4>
              <div className="wd-border">
              <h5>Table</h5>
              <p>Display tasks, due dates, and more in an organized and clear manner.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToTable}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Blockquote</h5>
              <p>Separate any block of text with attention-grabbing key quotes</p>
              <br />
              <button className="wd-btn thin" onClick={changeToBlockquote}>Toggle in Preview</button>
              </div>
            </div>
          </div>
        </main>
        <aside>
            <TemplateSidebar />
          </aside>
      </div>
      <BackToTop/>
      <footer>
          <Footer />
        </footer>
    </>
  )
}