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

export default function TwoColumn1() {
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
    const [templateImage, setTemplateImage] = useState("/images/templates/twocolumn1.jpg");

  
  useEffect(() => {
    switch(templateView) {
      
      case "blockquote":
      setTemplateImage("/images/templates/twocolumn1-blockquote.jpg");
      break;

      case "horizontal":
      setTemplateImage("/images/templates/twocolumn1-horizontal.jpg");
      break;

      case "tabs":
      setTemplateImage("/images/templates/twocolumn1-tabs.jpg");
      break;

      case "border":
      setTemplateImage("/images/templates/twocolumn1-border.jpg");
      break;

      case "assignments":
      setTemplateImage("/images/templates/twocolumn1-assignments.jpg");
      break;
      
      default:
      setTemplateImage("/images/templates/twocolumn1.jpg");
      break;
    }
  }, [templateView]);

  const changeToBorder = () => {
    if (templateView != "border") {
      setTemplateView("border");
    }
    else {setTemplateView()};
  };

  const changeToBlockquote = () => {
    if (templateView != "blockquote") {
      setTemplateView("blockquote");
    }
    else {setTemplateView()};
  };

  const changeToHorizontal = () => {
    if (templateView != "horizontal") {
      setTemplateView("horizontal");
    }
    else {setTemplateView()};
  };

  const changeToTabs = () => {
    if (templateView != "tabs") {
      setTemplateView("tabs");
    }
    else {setTemplateView()};
  };

  const changeToAssignments = () => {
    if (templateView != "assignments") {
      setTemplateView("assignments");
    }
    else {setTemplateView()};
  };

  return (
    <>
      <Head>
        <title>Interactive Introductions</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className="wd-break">Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id="two-column-1">
          <h2>Interactive Introductions</h2>
          <p>Put some power in your students hands with this highly interactive template: with tabs to click through, images to connect with, clear course objectives and a list of upcoming assignments. Students will have a more dynamic experience with the page. </p>
          
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
<title>Course Introduction</title>
</head>
<body>
<header class="header"> <img src="https://via.placeholder.com/1920X600" alt="">
  <div class="text-container">
    <h1>Course Introduction</h1>
    <p>Writing is an essential skill across all disciplines. This course will help you...</p>
  </div>
</header>
<div id="content-wrapper">
  <div class="content-body">
    <h2>Welcome to Writing 101</h2>
    <p>This course introduces you to the fundamentals of academic writing, from forming a...</p>
    <h3>Module Overviews</h3>
    <p>Each module will guide you through different stages of the...</p>
    <div class="tabs">
      <input/>
      <label> <span>Module 1</span> </label>
      <div>
        <h4>Introduction to Writing</h4>
        <p>In Module 1, we’ll cover the basics of writing, including...</p>
      </div>
      <input/>
      <label> <span>Module 2</span> </label>
      <div>
        <h4>Developing a Thesis</h4>
        <p>Module 2 will help you develop a clear thesis statement, the...</p>
      </div>
      <input/>
      <label> <span>Module 3</span> </label>
      <div>
        <h4>Supporting Arguments</h4>
        <p>Building on your thesis, Module 3 focuses on supporting your...</p>
      </div>
      <input/>
      <label> <span>Module 4</span> </label>
      <div>
        <h4>Revising and Editing</h4>
        <p>Revision is a crucial step in the writing process. In Module 4, you’ll...</p>
      </div>
      <input/>
      <label> <span>Module 5</span> </label>
      <div>
        <h4>Peer Review</h4>
        <p>Module 5 involves peer feedback. You’ll learn how to...</p>
      </div>
      <input/>
      <label> <span>Module 6</span> </label>
      <div>
        <h4>Final Draft</h4>
        <p>In this final module, you will polish your essays for submission. Focus on...</p>
      </div>
      <input/>
      <label> <span>Module 7</span> </label>
      <div>
        <h4>Reflection on Writing</h4>
        <p>Reflect on your progress throughout the course and...</p>
      </div>
      <input/>
      <label> <span>Module 8</span> </label>
      <div>
        <h4>Looking Forward</h4>
        <p>Module 8 focuses on how you can apply the skills you’ve...</p>
      </div>
      <input/>
      <label> <span>Hide</span> </label>
    </div>
    <h3>Course Goals</h3>
    <p>By the end of this course, you will be able to write coherent, well-structured essays with...</p>
    <div class="horizontal-display">
      <div> <img src="https://via.placeholder.com/200" alt="" /> </div>
      <div> <img src="https://via.placeholder.com/200" alt="" /> </div>
      <div> <img src="https://via.placeholder.com/200" alt="" /> </div>
      <div> <img src="https://via.placeholder.com/200" alt="" /> </div>
    </div>
    <p>Writing is a key skill that you will use throughout your academic career. This course will...</p>
    <div class="horizontal-display">
      <div>
        <div class="border">
          <h4><strong>Objective 1</strong></h4>
          <p>
          <ul>
            <li>Understand the components of...</li>
            <li>Analyze and construct well-organized...</li>
            <li>Use feedback to revise and improve your...</li>
          </ul>
          </p>
        </div>
      </div>
      <div>
        <div class="border">
          <h4><strong>Objective 2</strong></h4>
          <p>
          <ul>
            <li>Craft thesis-driven arguments with...</li>
            <li>Engage in critical reflection on your...</li>
            <li>Utilize peer review for...</li>
          </ul>
          </p>
        </div>
      </div>
      <div>
        <div class="border">
          <h4><strong>Objective 3</strong></h4>
          <p>
          <ul>
            <li>Learn effective revision strategies for clarity and style...</li>
            <li>Apply rhetorical techniques in various writing tasks...</li>
            <li>Communicate ideas persuasively across different contexts...</li>
          </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="second-column">
  <div class="content-body">
    <h2>Getting Started</h2>
    <p>The first step in Writing 101 is to familiarize yourself with the...</p>
    <ul class="assignments-widget">
      <li class="assignment">
        <h3>Module 1 Readings</h3>
        <p>The readings introduce key concepts in writing, such as...</p>
        <a class="btn" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Readings</a> </li>
      <li class="assignment">
        <h3>Reading Review Activity</h3>
        <p>Complete this activity to test your understanding of the...</p>
        <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Activity</a> </li>
      <li class="assignment">
        <h3>Reading Discussion 1</h3>
        <p>Engage with your peers in a discussion about...</p>
        <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3639476" target="_blank">Join Discussion</a> </li>
    </ul>
    <br>
    <hr>
    <blockquote class="text-center">"Writing is thinking on paper..." – William Zinsser. As you begin this journey, remember that...</blockquote>
  </div>
</div>
  <footer>
    <div id="footer">
      <p class="text-center toggle-footnotes">[Show Footnotes]</p>
      <div class="footnotes">
        <p>In this final module, you will polish your essays for submission. Focus on...</p>
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
            <Image src={templateImage} alt="" width={800} height={1400} priority />
            <div>
              <h4>Featured Widgets</h4>
              <div className="wd-border">
              <h5>Tabs</h5>
              <p>Organize and separate related information into their own individual tabs.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToTabs}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Horizontal Display</h5>
              <p>Display any content in an inline fashion with responsive stacking on mobile devices.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToHorizontal}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Border</h5>
              <p>Call out a main idea, draw attention to learning objectives or any other content that needs to stand out.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToBorder}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Assignments</h5>
              <p>List out the week's tasks in organized, interactive cards.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToAssignments}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Blockquote</h5>
              <p>Separate any block of text with supportive quotes. Use to draw attention to key text or inspiration.</p>
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