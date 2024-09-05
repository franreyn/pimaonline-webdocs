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

export default function TwoColumn2() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");

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
const [templateImage, setTemplateImage] = useState("/images/templates/twocolumn2.jpg");
    
    useEffect(() => {
      switch(templateView) {
        
        case "media":
        setTemplateImage("/images/templates/twocolumn2-media.jpg");
        break;
  
        case "vocab-cards":
        setTemplateImage("/images/templates/twocolumn2-vocabcards.jpg");
        break;
  
        case "table":
        setTemplateImage("/images/templates/twocolumn2-table.jpg");
        break;
  
        case "image-gallery":
        setTemplateImage("/images/templates/twocolumn2-imagegallery.jpg");
        break;
  
        case "blockquote":
        setTemplateImage("/images/templates/twocolumn2-blockquote.jpg");
        break;
        
        default:
        setTemplateImage("/images/templates/twocolumn2.jpg");
        break;
      }
    }, [templateView]);
  
    const changeToMedia = () => {
      if (templateView != "media") {
        setTemplateView("media");
      }
      else {setTemplateView()};
    };
  
    const changeToBlockquote = () => {
      if (templateView != "blockquote") {
        setTemplateView("blockquote");
      }
      else {setTemplateView()};
    };
  
    const changeToVocabCards = () => {
      if (templateView != "vocab-cards") {
        setTemplateView("vocab-cards");
      }
      else {setTemplateView()};
    };
  
    const changeToTable = () => {
      if (templateView != "table") {
        setTemplateView("table");
      }
      else {setTemplateView()};
    };
  
    const changeToImageGallery = () => {
      if (templateView != "image-gallery") {
        setTemplateView("image-gallery");
      }
      else {setTemplateView()};
    };

  return (
    <>
      <Head>
        <title>Warm Welcome</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className="wd-break">Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id="two-column-2">
          <h2>Warm Welcome</h2>
          <p>Set students up for success with a warm video greeting, a clear path for the rest of the semester, the week's agenda, and some visual imagery and inspiration!</p>
            <h3 className="spacer">Template Preview</h3>
          <div className="template-preview">
            <Image src={templateImage} alt="" width={800} height={1400} priority/>
            <div>
              <h4>Featured Widgets</h4>
              <div className="wd-border">
              <h5>Media Container</h5>
              <p>Welcome students with a introductory video and keep it responsive for any device.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToMedia}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Vocab Cards</h5>
              <p>More than just for vocab! Use these interactive cards to build on a standard list.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToVocabCards}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Table</h5>
              <p>Display tasks, due dates, and more in an organized and clear manner.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToTable}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Image Gallery</h5>
              <p>Break up large chunks of text or add some flair with imagery.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToImageGallery}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Blockquote</h5>
              <p>Separate any block of text with attention-grabbing key quotes</p>
              <br />
              <button className="wd-btn thin" onClick={changeToBlockquote}>Toggle in Preview</button>
              </div>
            </div>
          </div>
          <br />
          <div className="wd-window">
          <div className="wd-btn-container">
              <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
            </div>
            <div className="wd-html-code">
              <pre>
                <code className="language-html" ref={codeRef}>
                  {String.raw`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/css/themes/cards/styles.css">
<link rel="stylesheet" type="text/css" href="../../css/custom.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js" defer></script> 
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>
<title>Course Overview</title>
</head>
<body>
<header class="header"> <img src="https://via.placeholder.com/1920X600" alt="">
  <div class="text-container">
    <h1>Course Overview</h1>
    <p>Welcome to Writing 101. This course will...</p>
  </div>
</header>
<div id="content-wrapper">
  <div class="content-body">
    <h2>Introduction to Academic Writing</h2>
    <p>In this course, you will learn the key elements of academic writing. We will...</p>
    <h3>Message from Your Instructor</h3>
    <div class="media-container">
      <div class="media-object">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rFve845ScJ4" title="Course Introduction Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <h3>Course Objectives</h3>
    <p>Throughout this course, you will master the basics of writing, including...</p>
    <ul class="vocab-cards">
      <li class="vocab">
        <dt>Understanding Thesis Statements</dt>
        <dd>Learn how to craft a clear and concise thesis statement that...</dd>
        <ul>
          <li class="caption">Developing a strong argument</li>
          <li class="caption">Providing relevant evidence</li>
        </ul>
      </li>
      <li class="vocab">
        <dt>Essay Structure</dt>
        <dd>Explore the different components of an....</dd>
      </li>
      <li class="vocab">
        <dt>Evidence and Support</dt>
        <dd>Understand how to incorporate evidence from sources to support your...</dd>
        <ul>
          <li class="caption">Using credible sources</li>
        </ul>
      </li>
      <li class="vocab">
        <dt>Revision Techniques</dt>
        <dd>Practice strategies for revising and editing your work to...</dd>
      </li>
    </ul>
  </div>
</div>
<div id="second-column">
  <div class="content-body">
    <h2>Weekly Schedule</h2>
    <p>Follow the weekly schedule to stay on track with your...</p>
    <table class="display-lg">
      <thead>
        <tr>
          <th>Assignments</th>
          <th>Points</th>
          <th>Due Dates</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Read Introduction Module</td>
          <td>--</td>
          <td>Week 1</td>
        </tr>
        <tr>
          <td>Submit Thesis Statement</td>
          <td>10</td>
          <td>Week 2</td>
        </tr>
      </tbody>
    </table>
    <h3>Additional Resources</h3>
    <p>Refer to the additional resources provided to deepen your understanding of...</p>
    <div class="image-gallery">
      <div class="gallery-wrapper">
        <div class="image-box"> <img src="https://picsum.photos/id/1018/400/200" alt="Writing Tools" /> </div>
        <div class="image-box"> <img src="https://picsum.photos/id/1047/300/400" alt="Academic Books" /> </div>
        <div class="image-box"> <img src="https://picsum.photos/id/1059/500/300" alt="Study Space" /> </div>
        <div class="image-box"> <img src="https://picsum.photos/id/119/500/300" alt="Writing Desk" /> </div>
        <div class="image-box"> <img src="https://picsum.photos/id/143/800/200" alt="Research Materials" /> </div>
      </div>
    </div>
    <p>Use the images and resources provided to support your writing journey and...</p>
    <br>
    <br>
    <hr>
    <blockquote class="text-center">"The art of writing is the art of discovering what you believe..." – Gustave Flaubert</blockquote>
    <hr>
  </div>
</div>
<footer>
  <div id="footer">
    <p class="text-center toggle-footnotes">[Show Footnotes]</p>
    <div class="footnotes">
      <p>For further information on academic writing, refer to the course materials and...</p>
      <ul>
        <li>Readings on...</li>
        <li>Guides on...</li>
      </ul>
    </div>
  </div>
</footer>
</body>
</html>
`}
                </code>
              </pre>
            </div>
          </div>
        </main>
        <aside>
            <TemplateSidebar />
          </aside>
      </div>
      <footer>
          <Footer />
        </footer>
    </>
  )
}