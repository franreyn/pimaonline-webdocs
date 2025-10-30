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

export default function OneColumn6() {
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

  const handleCopyCode = async () => {
    if (!codeRef.current) return;
    try {
      await navigator.clipboard.writeText(codeRef.current.textContent);
      setButtonText("Copied!");
      setTimeout(() => setButtonText("Copy code"), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
      setButtonText("Failed to copy");
    }
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
  const [templateImage, setTemplateImage] = useState("/images/templates/onecolumn6.jpg");

      
      useEffect(() => {
        switch(templateView) {
          
          case "blockquote":
          setTemplateImage("/images/templates/onecolumn6-blockquote.jpg");
          break;
    
          case "horizontal":
          setTemplateImage("/images/templates/onecolumn6-horizontal.jpg");
          break;
    
          case "table":
          setTemplateImage("/images/templates/onecolumn6-table.jpg");
          break;
    
          case "border-yellow":
          setTemplateImage("/images/templates/onecolumn6-borderyellow.jpg");
          break;
          
          default:
          setTemplateImage("/images/templates/onecolumn6.jpg");
          break;
        }
      }, [templateView]);
    
      const changeToBorderYellow = () => {
        if (templateView != "border-yellow") {
          setTemplateView("border-yellow");
        }
        else {setTemplateView()};
      };

      const changeToHorizontal = () => {
        if (templateView != "horizontal") {
          setTemplateView("horizontal");
        }
        else {setTemplateView()};
      };

      const changeToBlockquote = () => {
        if (templateView != "blockquote") {
          setTemplateView("blockquote");
        }
        else {setTemplateView()};
      };

      const changeToTable = () => {
        if (templateView != "table") {
          setTemplateView("table");
        }
        else {setTemplateView()};
      };

  return (
    <>
      <Head>
        <title>Overview Basics</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className="wd-break">Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id="one-column-6">
          <h2>Overview Basics</h2>
          <p>Provide an easily-digestible snippet of the week's topic and relevant figures from the text, and follow up with a brief summary and task list for students to take actionable steps.</p>
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
                  {String.raw`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/css/themes/cards/styles.css">
<link rel="stylesheet" type="text/css" href="../css/custom.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>
<title>Module One: Topic</title>
</head>
<body>
<header class="header"> <img src="https://via.placeholder.com/1920X600" alt="">
  <div class="text-container">
    <h1>Module One: Topic</h1>
    <p>In this module, we will explore foundational writing principles that...</p>
  </div>
</header>
<div id="content-wrapper">
  <div class="content-body">
    <h2 class="icon-bolt">Topic Overview</h2>
    <p>Effective writing begins with understanding your purpose and audience. Whether you're writing a narrative, expository, or argumentative essay, knowing why...</p>
    <div class="card-horizontal">
      <div class="card-body">
        <p>The writing process involves brainstorming, organizing ideas into a cohesive outline, and creating a first draft. Each stage of the process requires reflection and...</p>
        <p> As you write, consider the importance of transitions and how they help guide your reader through your argument. Smooth transitions create flow and ensure that...</p>
      </div>
      <div class="card-img"> <img src="https://via.placeholder.com/300" alt="" />
        <figcaption class="caption">Figure 1.1: An example of a well-organized outline for an academic essay.</figcaption>
      </div>
    </div>
    <p>Organization is key in any form of writing. Start by identifying the main points you want to convey, then arrange these points logically. Using a clear structure helps...</p>
    <hr>
    <blockquote class="text-center">"Writing is an exploration. You start from nothing and learn as you go..." — E.L. Doctorow</blockquote>
    <hr>
  </div>
  <div class="content-body">
    <h2 class="icon-list">Learning Activities</h2>
    <div class="border border-yellow">
      <p class="icon-lightbulb">As you work through the activities below, focus on practicing the writing strategies we discussed:
      <ul>
        <li>Create an outline for your...</li>
        <li>Write the first draft of your...</li>
        <li>Practice transitioning between...</li>
        <li>Revise your draft for clarity and...</li>
      </ul>
      </p>
    </div>
    <table class="display-lg" cellpadding="5" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th scope="col">Activity</th>
          <th scope="col">Where</th>
          <th scope="col">Estimated Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="">Lecture</a></td>
          <td>D2L</td>
          <td>10 min</td>
        </tr>
        <tr>
          <td><a href="">Reading</a></td>
          <td>Textbook</td>
          <td>30 min</td>
        </tr>
        <tr>
          <td><a href="">Discussion Topic</a></td>
          <td>D2L Discussion Board</td>
          <td>30 min</td>
        </tr>
        <tr>
          <td><a href="">Lab</a></td>
          <td>Lab Interactive</td>
          <td>30 min</td>
        </tr>
        <tr>
          <td><a href="">Assignment</a></td>
          <td>D2L</td>
          <td>30 min</td>
        </tr>
        <tr>
          <th>Total time</th>
          <th></th>
          <th>~3 hours</th>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<footer>
  <div id="footer">
    <p class="text-center toggle-footnotes">[Show Footnotes]</p>
    <div class="footnotes">
      <p>In academic writing, always ensure that you properly cite your...</p>
      <ul>
        <li>Smith, J. (2020). *Writing Fundamentals*. University Press...</li>
        <li>Jones, L. (2019). *Academic Writing for Beginners*. Academic Publishing...</li>
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
					<h3 className="spacer">Template Preview</h3>
          <div className="template-preview">
            <Image src={templateImage} alt="" width={800} height={1400} priority/>
            <div>
              <h4>Featured Widgets</h4>
              <div className="wd-border">
              <h5>Horizontal Display</h5>
              <p>Display any content in an inline fashion with the flexibility to make one column wider than the other.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToHorizontal}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Blockquote</h5>
              <p>Separate any block of text along with supportive quotes. Call out phrases from the text or just relevant inspiration.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToBlockquote}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Border Yellow</h5>
              <p>Another means to call out a main idea with an extra pop of color.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToBorderYellow}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Table</h5>
              <p>Display tasks, due dates, and more in an organized and clear manner.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToTable}>Toggle in Preview</button>
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