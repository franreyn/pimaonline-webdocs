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
import { currentVersion } from '../../components/Version';

hljs.registerLanguage("html", html);

export default function TwoColumn3() {
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
          
          case "border":
          setTemplateImage("/images/templates/twocolumn3-border.jpg");
          break;
    
          case "side-by-side":
          setTemplateImage("/images/templates/twocolumn3-sidebyside.jpg");
          break;
    
          case "tabs":
          setTemplateImage("/images/templates/twocolumn3-tabs.jpg");
          break;
    
          case "assignments":
          setTemplateImage("/images/templates/twocolumn3-assignments.jpg");
          break;
          
          default:
          setTemplateImage("/images/templates/twocolumn3.jpg");
          break;
        }
      }, [templateView]);
    
      const changeToBorder = () => {
        if (templateView != "border") {
          setTemplateView("border");
        }
        else {setTemplateView()};
      };
    
      const changeToSideBySide = () => {
        if (templateView != "side-by-side") {
          setTemplateView("side-by-side");
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
        <title>Key Topics &amp; Tasks</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className="wd-break">Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id="two-column-3">
          <h2>Key Topics &amp; Tasks</h2>
          <p>Focus on the headlines with this template. List learning objectives, brief overviews of main takeaways from the text, and an easy-to-follow assignmnet list that takes students exactly where they need to be.</p>
          
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
<title>Module One</title>
</head>
<body>
<header class="header"> <img src="https://via.placeholder.com/1920X600" alt="">
  <div class="text-container">
    <h1>Module One</h1>
    <p>Welcome to the first module of our course. In this section, we'll explore...</p>
  </div>
</header>
<div id="content-wrapper">
  <div class="content-body">
    <h2>Overview of Key Concepts</h2>
    <p>This module provides an introduction to key concepts in writing. We'll discuss the...</p>
    <div class="border">
      <p>Understanding the basics of writing is crucial. Key elements include:</p>
      <ul>
        <li>Structure and organization...</li>
        <li>Clarity of expression...</li>
      </ul>
      <p>These elements will be explored in...</p>
    </div>
    <p>Effective writing requires practice and understanding. This module will guide you...</p>
    <div class="side-by-side">
      <div class="side-by-side-item">
        <h3 class="font-size-h4">Introduction to Essay Writing</h3>
        <p>Essay writing is a key skill in academic success. In this section, we will cover the basics of essay structure, including...</p>
      </div>
      <div class="side-by-side-item">
        <h3 class="font-size-h4">Developing Arguments</h3>
        <p>Crafting strong arguments is essential for...</p>
      </div>
    </div>
    <h3 class="font-size-h4">Writing Strategies</h3>
    <p>Applying effective writing strategies can...</p>
    <h3>Key Takeaways</h3>
    <div class="tabs">
      <input/>
      <label> <span>Writing Structure</span> </label>
      <div>
        <h4>Structure of Essays</h4>
        <p>Understanding the basic structure of essays is...</p>
      </div>
      <input/>
      <label> <span>Developing Arguments</span> </label>
      <div>
        <h4>Creating Effective Arguments</h4>
        <p>Learn how to develop strong arguments supported by...</p>
      </div>
      <input/>
      <label> <span>Writing Techniques</span> </label>
      <div>
        <h4>Effective Writing Techniques</h4>
        <p>Explore various writing techniques to improve clarity and...</p>
      </div>
      <input/>
      <label> <span>Revision Strategies</span> </label>
      <div>
        <h4>Revising Your Work</h4>
        <p>Revising is a critical part of the writing process...</p>
      </div>
      <input/>
      <label> <span>Hide</span> </label>
    </div>
  </div>
</div>
<div id="second-column">
  <div class="content-body">
    <h2>Assignments for This Week</h2>
    <ul class="assignments-widget">
      <li class="assignment">
        <h3>Read Chapter 1</h3>
        <p class="monospace"><strong>Due Date: Sep 5</strong></p>
        <p>Complete the reading assigned for this...</p>
        <a class="btn" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Access Reading</a> </li>
      <li class="assignment">
        <h3>Writing Exercise 1</h3>
        <p class="monospace"><strong>Due Date: Sep 7</strong></p>
        <p>Submit your first writing exercise based on...</p>
        <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Submit Exercise</a> </li>
      <li class="assignment">
        <h3>Discussion Post 1</h3>
        <p class="monospace"><strong>Due Date: Sep 9</strong></p>
        <p>Participate in the online discussion forum by posting your...</p>
        <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3639476" target="_blank">Join Discussion</a> </li>
      <li class="assignment">
        <h3>Peer Review Assignment</h3>
        <p class="monospace"><strong>Due Date: Sep 11</strong></p>
        <p>Review a peer's writing exercise and...</p>
        <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3639476" target="_blank">Complete Review</a> </li>
    </ul>
  </div>
</div>
<footer>
  <div id="footer">
    <p class="text-center toggle-footnotes">[Show Footnotes]</p>
    <div class="footnotes">
      <p>For further information and resources on writing, refer to...</p>
      <ul>
        <li>Additional reading material...</li>
        <li>Visit the writing center for...</li>
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
              <h5>Border</h5>
              <p>Call out a main idea, draw attention to learning objectives or any other content that needs to stand out.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToBorder}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Side-by-Side</h5>
              <p>Display two horizontal containers that can contain any content.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToSideBySide}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Tabs</h5>
              <p>Organize and separate related information into their own individual tabs.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToTabs}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Assignments</h5>
              <p>List out the week's tasks in organized, interactive cards.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToAssignments}>Toggle in Preview</button>
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