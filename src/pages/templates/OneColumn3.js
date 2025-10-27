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

export default function OneColumn3() {
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
  const [templateImage, setTemplateImage] = useState("/images/templates/onecolumn3.jpg");

  useEffect(() => {
    switch (templateView) {
      case "border":
        setTemplateImage("/images/templates/onecolumn3-border.jpg");
        break;

      case "vocab-cards":
        setTemplateImage("/images/templates/onecolumn3-vocabcards.jpg");
        break;

      case "assignments":
        setTemplateImage("/images/templates/onecolumn3-assignments.jpg");
        break;

      case "callout":
        setTemplateImage("/images/templates/onecolumn3-callout.jpg");
        break;

      case "video-gallery":
        setTemplateImage("/images/templates/onecolumn3-videogallery.jpg");
        break;

      case "highlight":
        setTemplateImage("/images/templates/onecolumn3-highlight.jpg");
        break;

      default:
        setTemplateImage("/images/templates/onecolumn3.jpg");
        break;
    }
  }, [templateView]);

  const changeToBorder = () => {
    if (templateView !== "border") {
      setTemplateView("border");
    } else {
      setTemplateView();
    }
  };

  const changeToAssignments = () => {
    if (templateView !== "assignments") {
      setTemplateView("assignments");
    } else {
      setTemplateView();
    }
  };

  const changeToVocabCards = () => {
    if (templateView !== "vocab-cards") {
      setTemplateView("vocab-cards");
    } else {
      setTemplateView();
    }
  };

  const changeToCallout = () => {
    if (templateView !== "callout") {
      setTemplateView("callout");
    } else {
      setTemplateView();
    }
  };

  const changeToVideoGallery = () => {
    if (templateView !== "video-gallery") {
      setTemplateView("video-gallery");
    } else {
      setTemplateView();
    }
  };

  const changeToHighlight = () => {
    if (templateView !== "highlight") {
      setTemplateView("highlight");
    } else {
      setTemplateView();
    }
  };

  return (
    <>
      <Head>
        <title>Content Roadmap</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className="wd-break">Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id="one-column-3">
          <h2>Content Roadmap</h2>
          <p>Keep your students from getting lost in the coursework with this virtual content roadmap. Provide module learning goals, a list of items due in the next week, where they are in the overall course, and additional content &amp; resources to explore.</p>
					<br />
          <div className="wd-window">
          <div className="wd-btn-container">
							<button
						className="wd-toggle-btn"	onClick={() => setShowCode(!showCode)}>
						{showCode ? "Hide code" : "Show code"}
					</button>
					{showCode && (
					<button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>)}
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
<title>Introduction to Writing</title>
</head>
<body>
<header class="header"> <img src="https://via.placeholder.com/1920X600" alt="">
  <div class="text-container">
    <h1>Introduction to Writing</h1>
    <p>Welcome to the first module of our writing course. Here, we will cover the...</p>
  </div>
</header>
<div id="content-wrapper">
  <div class="content-body">
    <h2>Lesson Overview</h2>
    <p>This module introduces essential writing concepts and practices. You will learn about different types of essays, how to structure...</p>
    <div class="image-gallery">
      <div class="border">
        <p>Understanding the basics of writing is crucial. This section covers...
        <ul>
          <li>Concept 1...</li>
          <li>Concept 2...</li>
        </ul>
        </p>
      </div>
    </div>
    <p>Writing well is a key skill in academic and professional settings. By mastering these fundamentals, you will be able to...</p>
    <p>As you progress, you will encounter various writing assignments that will...</p>
    <h3>Assignments for This Week:</h3>
    <p>Complete the readings, engage in the discussion forum, and submit the writing exercise...</p>
    <br>
    <ul class="assignments-widget">
      <li class="assignment">
        <h3>Reading Material</h3>
        <p>Read the provided materials and take notes. These readings will...</p>
        <a class="btn" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Access Reading Material</a> </li>
      <li class="assignment">
        <h3>Writing Exercise</h3>
        <p>Complete the exercise based on the reading material. This will...</p>
        <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Submit Exercise</a> </li>
      <li class="assignment">
        <h3>Discussion Participation</h3>
        <p>Engage in the discussion forum by posting your thoughts and...</p>
        <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3639476" target="_blank">Join Discussion</a> </li>
      <li class="assignment">
        <h3>Grammar Quiz</h3>
        <p>Take the quiz to test your understanding of grammar rules and...</p>
        <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Start Quiz</a> </li>
    </ul>
    <div class="call-out">
      <h4>Need Additional Resources?</h4>
      <p>Explore further readings and resources to expand your...</p>
      <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3639476" target="_blank">View Resources</a> </div>
  </div>
  <div class="content-body">
    <h2>Course Structure</h2>
    <p>Here’s an overview of the course modules:</p>
    <ul class="vocab-cards">
      <li class="vocab">
        <dt>Unit One</dt>
        <dd>
          <ul>
            <li><span class="highlight"> Module One: Introduction to Writing</span></li>
            <li>Module Two: Writing Fundamentals...</li>
            <li>Module Three: Structuring Essays...</li>
          </ul>
        </dd>
      </li>
      <li class="vocab">
        <dt>Unit Two</dt>
        <dd>
          <ul>
            <li>Module Four: Research Techniques...</li>
            <li>Module Five: Academic Writing...</li>
            <li>Module Six: Critical Analysis...</li>
            <li>Module Seven: Revision Strategies...</li>
          </ul>
        </dd>
      </li>
      <li class="vocab">
        <dt>Unit Three</dt>
        <dd>
          <ul>
            <li>Module Eight: Creative Writing...</li>
            <li>Module Nine: Technical Writing...</li>
            <li>Module Ten: Final Projects...</li>
          </ul>
        </dd>
      </li>
    </ul>
  </div>
  <div class="content-body">
    <h2>Additional Learning Resources</h2>
    <p>Explore these supplementary materials to gain deeper insights into...</p>
    <div class="video-widget">
      <div class="video-card">
        <h3>Supplementary Video</h3>
        <div class="card-content">
          <h4>Effective Writing</h4>
          <p>(Video length: 4:12 minutes)</p>
          <div class="media-container">
            <div class="media-object">
              <iframe src="https://www.youtube.com/embed/rKV0Yl1Ir2g" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
            </div>
          </div>
          <a class="btn ext" href="https://www.youtube.com/embed/rKV0Yl1Ir2g" target="_blank" rel="noopener noreferrer">Watch on YouTube</a> </div>
      </div>
      <div class="video-card">
        <h3>Supplementary Video</h3>
        <div class="card-content">
          <h4>Writing Techniques</h4>
          <p>(Video length: 3:22 minutes)</p>
          <div class="media-container">
            <div class="media-object">
              <iframe src="https://www.youtube.com/embed/dkCWThe7RuI" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
            </div>
          </div>
          <a class="btn ext" href="https://www.youtube.com/embed/dkCWThe7RuI" target="_blank" rel="noopener noreferrer">Watch on YouTube</a> </div>
      </div>
      <div class="video-card">
        <h3>Supplementary Video</h3>
        <div class="card-content">
          <h4>Grammar Basics</h4>
          <p>(Video length: 5:45 minutes)</p>
          <div class="media-container">
            <div class="media-object">
              <iframe src="https://www.youtube.com/embed/DEF98765432" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
            </div>
          </div>
          <a class="btn ext" href="https://www.youtube.com/embed/DEF98765432" target="_blank" rel="noopener noreferrer">Watch on YouTube</a> </div>
      </div>
    </div>
  </div>
</div>
<footer>
  <div id="footer">
    <p class="text-center toggle-footnotes">[Show Footnotes]</p>
    <div class="footnotes">
      <div class="footer-logos">
        <img src="https://via.placeholder.com/200X60" alt="Footer Logo">
      </div>
      <ul class="footer-links">
        <li><a href="#">Course Page</a></li>
        <li><a href="#">Discussion Forum</a></li>
      </ul>
      <p class="footer-notice">© 2024 Pima Community College. All rights reserved.</p>
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
              <h5>Assignments</h5>
              <p>List out the week's tasks in organized, interactive cards.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToAssignments}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Callout</h5>
              <p>Invite students to explore more resources on any given topic.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToCallout}>Toggle in Preview</button>
              </div><div className="wd-border">
              <h5>Vocab Cards</h5>
              <p>Not just for vocabulary! A versatile, interactive tile layout to display your content.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToVocabCards}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Highlight</h5>
              <p>Use this utility class to draw attention to crucial information in any block of text.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToHighlight}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Video Gallery</h5>
              <p>Create a grid-like video gallery, with general information like title and video duration.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToVideoGallery}>Toggle in Preview</button>
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