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

export default function OneColumn4() {
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
      const [templateImage, setTemplateImage] = useState("/images/templates/onecolumn4.jpg");

      
      useEffect(() => {
        switch(templateView) {
          
          case "vocab-cards":
          setTemplateImage("/images/templates/onecolumn4-vocabcards.jpg");
          break;
    
          case "table":
          setTemplateImage("/images/templates/onecolumn4-table.jpg");
          break;
    
          case "callout":
          setTemplateImage("/images/templates/onecolumn4-callout.jpg");
          break;
    
          case "video-gallery":
          setTemplateImage("/images/templates/onecolumn4-videogallery.jpg");
          break;
          
          default:
          setTemplateImage("/images/templates/onecolumn4.jpg");
          break;
        }
      }, [templateView]);
  
      const changeToTable = () => {
        if (templateView != "table") {
          setTemplateView("table");
        }
        else {setTemplateView()};
      }
  
      const changeToVocabCards = () => {
        if (templateView != "vocab-cards") {
          setTemplateView("vocab-cards");
        }
        else {setTemplateView()};
      }
  
      const changeToCallout = () => {
        if (templateView != "callout") {
          setTemplateView("callout");
        }
        else {setTemplateView()};
      }
  
      const changeToVideoGallery = () => {
        if (templateView != "video-gallery") {
          setTemplateView("video-gallery");
        }
        else {setTemplateView()};
      }

  return (
    <>
      <Head>
        <title>Clean Grids</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className="wd-break">Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id="one-column-4">
          <h2>Clean Grids</h2>
          <p>Provide some visual structure to your content with this template that leans into row- and column-based widgets. Include the weeks tasks in a table, provide key takeaways in card format, and offer supplemental video walkthroughs in a grid-like fashionl.</p>
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
              <h5>Vocab Cards</h5>
              <p>Not just for vocabulary! A versatile, interactive tile layout to display your content.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToVocabCards}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Video Gallery</h5>
              <p>Create a grid-like video gallery, with general information like title and video duration.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToVideoGallery}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Callout</h5>
              <p>Invite students to explore more resources on any given topic.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToCallout}>Toggle in Preview</button>
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
                  {String.raw`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/css/themes/cards/styles.css">
<link rel="stylesheet" type="text/css" href="../css/custom.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js" defer></script> 
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>
<title>Writing 101: Introduction</title>
</head>
<body>
<header class="header"> <img src="https://via.placeholder.com/1920X600" alt="">
  <div class="text-container">
    <h1>Writing 101: Introduction</h1>
    <p>Welcome to Writing 101! In this course, you'll explore the...</p>
  </div>
</header>
<div id="content-wrapper">
  <div class="content-body">
    <h2>Week 1: Getting Started</h2>
    <p>This week, we'll dive into the essentials of academic writing. You'll...</p>
    <h3>Weekly Agenda</h3>
    <table class="display-lg">
      <thead>
        <tr>
          <th>Task</th>
          <th>Points</th>
          <th>Deadline</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Read Chapter 1: The Writing Process</td>
          <td>5</td>
          <td>Sept 4</td>
        </tr>
        <tr>
          <td>Complete Essay Outline Assignment</td>
          <td>15</td>
          <td>Sept 4</td>
        </tr>
        <tr>
          <td>Participate in Discussion Forum</td>
          <td>10</td>
          <td>Sept 6</td>
        </tr>
        <tr>
          <td>Submit Essay Draft</td>
          <td>20</td>
          <td>Sept 8</td>
        </tr>
      </tbody>
    </table>
    <h3>Key Points</h3>
    <p>This week's focus is on the basics of essay writing. Pay attention to how...</p>
    <p>Be sure to review the chapter thoroughly and complete all...</p>
    <ul class="vocab-cards">
      <li class="vocab">
        <dt>Thesis Statement</dt>
        <dd>A statement that presents the main argument or point of...</dd>
      </li>
      <li class="vocab">
        <dt>Topic Sentence</dt>
        <dd>The first sentence in a paragraph that introduces the...</dd>
      </li>
      <li class="vocab">
        <dt>Evidence</dt>
        <dd>Information, facts, or details that support the claims made in...</dd>
      </li>
      <li class="vocab">
        <dt>Transition</dt>
        <dd>Words or phrases used to link ideas and paragraphs together. Effective transitions help...</dd>
      </li>
      <li class="vocab">
        <dt>Conclusion</dt>
        <dd>The final paragraph of an essay that summarizes the main points and...</dd>
      </li>
      <li class="vocab">
        <dt>Revision</dt>
        <dd>The process of reviewing and making changes to a...</dd>
      </li>
    </ul>
  </div>
  <div class="content-body">
    <h2>Additional Resources</h2>
    <p>This section includes extra materials to enhance your understanding of...</p>
    <div class="video-widget">
      <div class="video-card">
        <h3 class="font-size-h4">Introduction to Essay Writing</h3>
        <hr>
        <div class="card-content">
          <p>(Video length: 4:00 minutes)</p>
          <div class="media-container">
            <div class="media-object">
              <iframe src="https://www.youtube.com/embed/XzU8abGv9A4" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
            </div>
          </div>
          <a class="btn ext" href="https://www.youtube.com/embed/XzU8abGv9A4" target="_blank" rel="nonopener noopener">Watch on YouTube</a> </div>
      </div>
      <div class="video-card">
        <h3 class="font-size-h4">Developing Strong Arguments</h3>
        <hr>
        <div class="card-content">
          <p>(Video length: 3:20 minutes)</p>
          <div class="media-container">
            <div class="media-object">
              <iframe src="https://www.youtube.com/embed/3FThZG38K6c" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
            </div>
          </div>
          <a class="btn ext" href="https://www.youtube.com/embed/3FThZG38K6c" target="_blank" rel="nonopener noopener">Watch on YouTube</a> </div>
      </div>
      <div class="video-card">
        <h3 class="font-size-h4">Effective Editing Techniques</h3>
        <hr>
        <div class="card-content">
          <p>(Video length: 5:00 minutes)</p>
          <div class="media-container">
            <div class="media-object">
              <iframe src="https://www.youtube.com/embed/N0v99Ew0Z6Y" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
            </div>
          </div>
          <a class="btn ext" href="https://www.youtube.com/embed/N0v99Ew0Z6Y" target="_blank" rel="nonopener noopener">Watch on YouTube</a> </div>
      </div>
    </div>
    <div class="call-out">
      <p>Utilize these supplementary materials to further develop your...</p>
    </div>
  </div>
</div>
<footer>
  <div id="footer">
    <p class="text-center toggle-footnotes">[Show Footnotes]</p>
    <div class="footnotes">
      <p>Explore the various aspects of academic writing through our...</p>
      <ul>
        <li>Introduction to Writing...</li>
        <li>Essay Structure Fundamentals...</li>
      </ul>
    </div>
  </div>
</footer>
</body>
</html>`}</code>
              </pre>
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