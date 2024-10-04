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

export default function OneColumn2() {
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
  const [templateImage, setTemplateImage] = useState("/images/templates/onecolumn2.jpg");

  useEffect(() => {
    switch (templateView) {
      case "media":
        setTemplateImage("/images/templates/onecolumn2-media.jpg");
        break;

      case "table":
        setTemplateImage("/images/templates/onecolumn2-table.jpg");
        break;

      case "side-by-side":
        setTemplateImage("/images/templates/onecolumn2-sidebyside.jpg");
        break;

      case "accordion":
        setTemplateImage("/images/templates/onecolumn2-accordion.jpg");
        break;

      case "assignments":
        setTemplateImage("/images/templates/onecolumn2-assignments.jpg");
        break;

      default:
        setTemplateImage("/images/templates/onecolumn2.jpg");
        break;
    }
  }, [templateView]);

  const changeToMedia = () => {
    if (templateView !== "media") {
      setTemplateView("media");
    } else {
      setTemplateView();
    }
  };

  const changeToTable = () => {
    if (templateView !== "table") {
      setTemplateView("table");
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

  const changeToAccordion = () => {
    if (templateView !== "accordion") {
      setTemplateView("accordion");
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

  return (
    <>
      <Head>
        <title>Organized Welcome</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
        <h1>Browse Course Templates</h1>
        <p className="wd-break">
          Premade templates to browse and inspire your course content layouts. Ready to grab and go!
        </p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id="one-column-2">
          <h2>Organized Welcome</h2>
          <p>
            Invite students in with a personalized video from their instructor and some additional
            encouragement as they begin their course or module. You can provide students the
            expectations for the unit with organized clarity, using tables, accordions and
            assignment lists to help them prioritize tasks.
          </p>
          <h3 className="spacer">Template Preview</h3>
          <div className="template-preview">
            <Image src={templateImage} alt="" width={800} height={1400} priority/>
            <div>
              <h4>Featured Widgets</h4>
              <div className="wd-border">
                <h5>Media Container</h5>
                <p>Welcome students with an introductory video and keep it responsive for any device.</p>
                <br />
                <button className="wd-btn thin" onClick={changeToMedia}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
                <h5>Table</h5>
                <p>Display tasks, due dates, and more in an organized and clear manner.</p>
                <br />
                <button className="wd-btn thin" onClick={changeToTable}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
                <h5>Side-by-Side</h5>
                <p>Display two horizontal containers that can contain any content.</p>
                <br />
                <button className="wd-btn thin" onClick={changeToSideBySide}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
                <h5>Accordion</h5>
                <p>Provide larger chunks of content a little at a time and let the student interact with the information.</p>
                <br />
                <button className="wd-btn thin" onClick={changeToAccordion}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
                <h5>Assignments</h5>
                <p>List out the week's tasks in organized, interactive cards.</p>
                <br />
                <button className="wd-btn thin" onClick={changeToAssignments}>Toggle in Preview</button>
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
<link rel="stylesheet" type="text/css" href="custom.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js" defer></script> 
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>
<title>Course Intro</title>
</head>
<body>
<header class="header"> <img src="https://via.placeholder.com/1920X600" alt="">
  <div class="text-container">
    <h1>Course Intro</h1>
    <p>This course introduces students to...</p>
  </div>
</header>
<div id="content-wrapper">
  <div class="content-body">
    <h2>Welcome to Writing 101</h2>
    <p>In Writing 101, you will learn to articulate ideas clearly and effectively in...</p>
    <h3>A Quick Welcome from Your Course Instructor</h3>
    <div class="media-container">
      <div class="media-object">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rFve845ScJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <h4>This Week's Schedule</h4>
    <p>This week, we will begin by exploring the principles of...</p>
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
          <td>Read Chapter 1: The Writing Process</td>
          <td>--</td>
          <td>January 10th</td>
        </tr>
        <tr>
          <td>Personal Narrative Draft</td>
          <td>10</td>
          <td>January 12th</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="content-body">
    <h2>Course Objectives</h2>
    <p>By the end of this course, you will be able to identify key elements of...</p>
    <h3>By the end of this course, you'll be able to:</h3>
    <div class="side-by-side">
      <div class="side-by-side-item">
        <div class="accordion">
          <div class="accordion-title arrow-down toggle-btn">Course Objective 1</div>
          <div class="accordion-content toggle-btn-content">Compose well-organized essays that present a clear argument...
            <ul>
              <li>Thesis Development...</li>
              <li>Essay Structure...</li>
              <li>Support and Evidence...</li>
            </ul>
          </div>
          <div class="accordion-title arrow-down toggle-btn">Course Objective 2</div>
          <div class="accordion-content toggle-btn-content">Analyze and critique various types of texts...
            <ul>
              <li>Textual Analysis...</li>
              <li>Critical Thinking...</li>
              <li>Argument Evaluation...</li>
            </ul>
          </div>
          <div class="accordion-title arrow-down toggle-btn">Course Objective 3</div>
          <div class="accordion-content toggle-btn-content">Conduct academic research and integrate sources effectively...
            <ul>
              <li>Library Resources...</li>
              <li>Citation Styles...</li>
              <li>Source Integration...</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="side-by-side-item">
        <div class="accordion">
          <div class="accordion-title arrow-down toggle-btn">Course Objective 4</div>
          <div class="accordion-content toggle-btn-content">Revise and edit written work for clarity and coherence...
            <ul>
              <li>Revising for Structure...</li>
              <li>Editing for Grammar...</li>
              <li>Proofreading Techniques...</li>
            </ul>
          </div>
          <div class="accordion-title arrow-down toggle-btn">Course Objective 5</div>
          <div class="accordion-content toggle-btn-content">Develop a personal writing process that...
            <ul>
              <li>Brainstorming Techniques...</li>
              <li>Outlining...</li>
              <li>Time Management...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <h4>How You'll Learn These Objectives</h4>
    <p>We will use a variety of methods to reach these goals, including:
    <ul>
      <li>Assigned Readings from the Textbook...</li>
      <li>Group Discussion...</li>
      <li>Writing Workshops...</li>
      <li>Peer Review Sessions...</li>
      <li>Instructor Feedback...</li>
    </ul>
    </p>
  </div>
  <div class="content-body">
    <h2>Helpful Resources</h2>
    <p>If you need additional help, there are several...</p>
    <ul class="assignments-widget">
      <li class="assignment">
        <h3>Instructor Contact</h3>
        <p><u><strong>Email</strong></u><br>
          writing101instructor@college.edu</p>
        <a class="btn" href="" target="_blank">Email Instructor...</a><br>
        <a class="btn" href="" target="_blank">Make an Appointment...</a> </li>
      <li class="assignment">
        <h3>Writing Center</h3>
        <p>The Writing Center offers free tutoring and...</p>
        <a class="btn" href="" target="_blank">Visit Writing Center</a> <a class="btn" href="" target="_blank">Make an Appointment</a> </li>
      <li class="assignment">
        <h3>Library Resources</h3>
        <p>Our library provides access to a wide range of...</p>
        <a class="btn" href="" target="_blank">Browse the Library</a> </li>
    </ul>
  </div>
</div>
<footer>
  <div id="footer">
    <p class="text-center toggle-footnotes">[Show Footnotes]</p>
    <div class="footnotes">
      <p>For more details on citation styles...</p>
      <ul>
        <li>MLA Formatting and Style Guide...</li>
        <li>APA Citation Basics...</li>
      </ul>
    </div>
  </div>
</footer>
</body>
</html>
`}</code>
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
  );
}
