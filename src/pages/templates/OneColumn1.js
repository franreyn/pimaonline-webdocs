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

export default function OneColumn1() {
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
  const [templateImage, setTemplateImage] = useState("/images/templates/onecolumn1.jpg");

  useEffect(() => {
    switch (templateView) {
      case "border":
        setTemplateImage("/images/templates/onecolumn1-border.jpg");
        break;

      case "vocab-cards":
        setTemplateImage("/images/templates/onecolumn1-vocabcards.jpg");
        break;

      case "side-by-side":
        setTemplateImage("/images/templates/onecolumn1-sidebyside.jpg");
        break;

      case "blockquote":
        setTemplateImage("/images/templates/onecolumn1-blockquote.jpg");
        break;

      case "image-gallery":
        setTemplateImage("/images/templates/onecolumn1-imagegallery.jpg");
        break;

      default:
        setTemplateImage("/images/templates/onecolumn1.jpg");
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

  const changeToVocabCards = () => {
    if (templateView !== "vocab-cards") {
      setTemplateView("vocab-cards");
    } else {
      setTemplateView();
    }
  };

  const changeToSideBySide = () => {
    if (templateView !== "side-by-side") {
      setTemplateView("side-by-side");
    } else {
      setTemplateView();
    }
  };

  const changeToBlockquote = () => {
    if (templateView !== "blockquote") {
      setTemplateView("blockquote");
    } else {
      setTemplateView();
    }
  };

  const changeToImgGal = () => {
    if (templateView !== "image-gallery") {
      setTemplateView("image-gallery");
    } else {
      setTemplateView();
    }
  };

  return (
    <>
      <Head>
        <title>Inspirational Structure</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
        <h1>Browse Course Templates</h1>
        <p className="wd-break">Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id="one-column-1">
          <h2>Inspirational Structure</h2>
          <p>Give students a clear idea of the course overview and objects, while also providing a bit of encouragement and support. With opportunities for images throughout, this layout will feel visually balanced rather than intimidating chunks of text. Plus, give them quick reference shortcuts to the resources they'll need throughout the semester.</p>
          <br/>
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
<header class="header"> 
  <img src="https://via.placeholder.com/1920X600" alt="Course Banner">
  <div class="text-container">
    <h1>Course Introduction</h1>
    <p>Welcome to Writing 101! In this course, you’ll...</p>
  </div>
</header>
<div id="content-wrapper">
  <div class="content-body">
    <h2>Welcome to [course name here]</h2>
    <p>Writing is more than putting words on paper—it's about structuring thoughts in a coherent way to communicate effectively. In this course, you’ll...</p>
    <div class="border">
      <p>Key writing principles we'll explore include:
      <ul>
        <li>Building strong thesis...</li>
        <li>Organizing ideas logically...</li>
      </ul>
      </p>
    </div>
    <h3>What You Will Learn</h3>
    <p>Throughout this course, you will learn to write various types of essays, develop critical thinking, and use evidence to support your arguments. By the end...</p>
    <dl class="vocab-cards">
      <div class="vocab">
        <dt>Thesis Development</dt>
        <dd>You'll learn to create strong, arguable thesis statements that...</dd>
        <ul>
          <li class="caption">Practice writing thesis statements for different types...</li>
        </ul>
      </div>
      <div class="vocab">
        <dt>Organizing Ideas</dt>
        <dd>Master the art of logically structuring your...</dd>
      </div>
      <div class="vocab">
        <dt>Evidence & Support</dt>
        <dd>Understand how to use evidence to back up your points and strengthen...</dd>
        <ul>
          <li class="caption">Cite credible sources to enhance your essays...</li>
        </ul>
      </div>
      <div class="vocab">
        <dt>Revising & Editing</dt>
        <dd>Learn the importance of drafting, receiving feedback, and...</dd>
      </div>
      <div class="vocab">
        <dt>Writing Styles</dt>
        <dd>Discover different styles of writing, from...</dd>
        <ul>
          <li class="caption">Experiment with formal and informal styles...</li>
          <li class="caption">Adapt your tone to different audiences...</li>
          <li class="caption">Refine your writing style through feedback...</li>
        </ul>
      </div>
    </dl>
    <h4>And don't forget...</h4>
    <p>Writing is a process that requires practice. Dedicate time to...</p>
  </div>
  <div class="content-body">
    <h2>Some Inspiration as You Begin</h2>
    <p>Writing can be challenging, but remember that...</p>
    <div class="side-by-side">
      <div class="side-by-side-item"> 
        <img src="https://via.placeholder.com/300" alt="Inspiration Image" />
      </div>
      <div class="side-by-side-item">
        <hr>
        <blockquote class="text-center">"Commit yourself to..."
          <br><br>
          <span class="caption">– Albert...</span>
        </blockquote>
        <hr>
      </div>
    </div>
  </div>
  <div class="content-body">
    <div class="image-gallery">
      <div class="gallery-wrapper">
        <div class="image-box"> 
          <img src="https://picsum.photos/id/1018/400/200" alt="Gallery Image 1" />
        </div>
        <div class="image-box"> 
          <img src="https://picsum.photos/id/1047/300/400" alt="Gallery Image 2" />
        </div>
        <div class="image-box"> 
          <img src="https://picsum.photos/id/1059/500/300" alt="Gallery Image 3" />
        </div>
        <div class="image-box"> 
          <img src="https://picsum.photos/id/119/500/300" alt="Gallery Image 4" />
        </div>
        <div class="image-box"> 
          <img src="https://picsum.photos/id/143/800/200" alt="Gallery Image 5" />
        </div>
      </div>
    </div>
  </div>
</div>
<footer>
  <div id="footer">
    <p class="text-center toggle-footnotes">[Show Footnotes]</p>
    <div class="footnotes">
      <p>Remember, writing is a skill that...</p>
      <ul>
        <li>Review peer essays and provide constructive feedback...</li>
        <li>Revise your drafts based on feedback received...</li>
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
					<h3 className="spacer">Template Preview</h3>
          <div className="template-preview">
            <Image src={templateImage} alt="" width={800} height={1400} priority />
            <div>
              <h4>Featured Widgets</h4>
              <div className="wd-border">
                <h5>Border</h5>
                <p>Call out a main idea, draw attention to learning objectives or any other content that needs to stand out.</p>
                <br />
                <button className="wd-btn thin" onClick={changeToBorder}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
                <h5>Vocab Cards</h5>
                <p>More than just for vocab! Use these subtly-interactive cards to build on a standard list.</p>
                <br />
                <button className="wd-btn thin" onClick={changeToVocabCards}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
                <h5>Side-by-Side</h5>
                <p>Display two horizontal containers that can contain any content.</p>
                <br />
                <button className="wd-btn thin" onClick={changeToSideBySide}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
                <h5>Blockquote</h5>
                <p>Separate any block of text along with supportive quotes. Call out phrases from the text or just relevant inspiration.</p>
                <br />
                <button className="wd-btn thin" onClick={changeToBlockquote}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
                <h5>Image Gallery</h5>
                <p>Break up large chunks of text or add some flair to your course shell with imagery.</p>
                <br />
                <button className="wd-btn thin" onClick={changeToImgGal}>Toggle in Preview</button>
              </div>
            </div>
          </div>
          <br />
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
  );
}