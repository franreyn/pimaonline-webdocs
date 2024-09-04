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
<title>Starter Template</title>
</head>
<body>
<header class="header"> <img src="https://via.placeholder.com/1920X600" alt="">
  <div class="text-container">
    <h1>Course Intro</h1>
    <p>Donec sollicitudin misit malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta.</p>
  </div>
</header>
<div id="content-wrapper">
  <div class="content-body">
    <h2>Welcome to [course name here]</h2>
    <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
    <h3>A Quick Welcome from Your Course Instructor</h3>
    <div class="media-container">
      <div class="media-object">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rFve845ScJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <h4>This Week's Schedule</h4>
    <p>Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
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
          <td>Read Start Here Module</td>
          <td>--</td>
          <td>May 1st</td>
        </tr>
        <tr>
          <td>Course Contract Quiz</td>
          <td>5</td>
          <td>May 7th</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="content-body">
    <h2>Course Ojectives</h2>
    <p>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
    <h3>By the end of this course, you'll be able to:</h3>
    <div class="side-by-side">
      <div class="side-by-side-item">
        <div class="accordion">
          <div class="accordion-title arrow-down toggle-btn">Course Objective 1</div>
          <div class="accordion-content toggle-btn-content">More information about objective
            <ul>
              <li>Sub-objective 1</li>
              <li>Sub-objective 2</li>
              <li>Sub-objective 3</li>
            </ul>
          </div>
          <div class="accordion-title arrow-down toggle-btn">Course Objective 2</div>
          <div class="accordion-content toggle-btn-content">More information about objective
            <ul>
              <li>Sub-objective 1</li>
              <li>Sub-objective 2</li>
              <li>Sub-objective 3</li>
            </ul>
          </div>
          <div class="accordion-title arrow-down toggle-btn">Course Objective 3</div>
          <div class="accordion-content toggle-btn-content">More information about objective
            <ul>
              <li>Sub-objective 1</li>
              <li>Sub-objective 2</li>
              <li>Sub-objective 3</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="side-by-side-item">
        <div class="accordion">
          <div class="accordion-title arrow-down toggle-btn">Course Objective 4</div>
          <div class="accordion-content toggle-btn-content">More information about objective
            <ul>
              <li>Sub-objective 1</li>
              <li>Sub-objective 2</li>
              <li>Sub-objective 3</li>
            </ul>
          </div>
          <div class="accordion-title arrow-down toggle-btn">Course Objective 5</div>
          <div class="accordion-content toggle-btn-content">More information about objective
            <ul>
              <li>Sub-objective 1</li>
              <li>Sub-objective 2</li>
              <li>Sub-objective 3</li>
            </ul>
          </div>
          <div class="accordion-title arrow-down toggle-btn">Course Objective 6</div>
          <div class="accordion-content toggle-btn-content">More information about objective
            <ul>
              <li>Sub-objective 1</li>
              <li>Sub-objective 2</li>
              <li>Sub-objective 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <h4>How You'll Learn These Objectives</h4>
    <p>Vivamus suscipit tortor eget felis porttitor volutpat:
    <ul>
      <li>Textbook Readings</li>
      <li>Guided Class Discussions</li>
      <li>Instructional Videos</li>
      <li>Practice Assignments</li>
      <li>Virtual Lectures</li>
    </ul>
    </p>
  </div>
  <div class="content-body">
    <h2>Helpful Resources</h2>
    <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus.</p>
    <ul class="assignments-widget">
      <li class="assignment">
        <h3>Instructor Contact</h3>
        <p><u><strong>Email</strong></u><br>
          xxxxxxxxx@pima.edu</p>
        <a class="btn" href="" target="_blank">Email Instructor</a><br>
        <a class="btn" href="" target="_blank">Make an Appointment</a> </li>
      <li class="assignment">
        <h3>D2L Support Services</h3>
        <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat</p>
        <a class="btn" href="" target="_blank">Browse Knowledgebase</a> <a class="btn" href="" target="_blank">Submit a Ticket</a> </li>
      <li class="assignment">
        <h3>Virtual Tutoring</h3>
        <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus</p>
        <a class="btn" href="" target="_blank">Find a Tutor</a> </li>
    </ul>
  </div>
</div>
<footer>
  <div id="footer">
    <p class="text-center toggle-footnotes">[Show Footnotes]</p>
    <div class="footnotes">
      <p>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
      <ul>
        <li>Lorem culim ghus.</li>
        <li>Ipsum guar havana.</li>
      </ul>
    </div>
  </div>
</footer>
</body>
</html>`}
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
  );
}
