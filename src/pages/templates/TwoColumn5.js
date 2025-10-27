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

export default function TwoColumn5() {
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
const [templateImage, setTemplateImage] = useState("/images/templates/twocolumn5.jpg");
   
   useEffect(() => {
     switch(templateView) {
       
       case "table":
       setTemplateImage("/images/templates/twocolumn5-table.jpg");
       break;
 
       case "border":
       setTemplateImage("/images/templates/twocolumn5-border.jpg");
       break;

       case "caption":
        setTemplateImage("/images/templates/twocolumn5-caption.jpg");
        break;
       
       default:
       setTemplateImage("/images/templates/twocolumn5.jpg");
       break;
     }
   }, [templateView]);
 
   const changeToTable = () => {
     if (templateView != "table") {
       setTemplateView("table");
     }
     else {setTemplateView()};
   };

   const changeToBorder = () => {
     if (templateView != "border") {
       setTemplateView("border");
     }
     else {setTemplateView()};
   };

   const changeToCaption = () => {
    if (templateView != "caption") {
      setTemplateView("caption");
    }
    else {setTemplateView()};
  };

  return (
    <>
      <Head>
        <title>Course Clarity</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className="wd-break">Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id="two-column-5">
          <h2>Course Clarity</h2>
          <p>Get down and detailed with this template: provide a welcome message, course overview, course structure, course learning objects, and set expectations for the major exams and assignments throughout the semester.</p>
          
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
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js" defer></script> 
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>
<title>Course Introduction</title>
</head>
<body>
<header class="header"> <img src="https://via.placeholder.com/1920X600" alt="">
  <div class="text-container">
    <h1>Course Introduction</h1>
    <p>Welcome to the introductory module of this course. Here, we will...</p>
  </div>
</header>
<div id="content-wrapper">
  <div class="content-body">
    <h2>Course Outline</h2>
    <p>This course is designed to provide a comprehensive understanding of key...</p>
    <p> The course content is structured to facilitate an in-depth...</p>
    <h2>Course Content</h2>
    <p>The course is divided into several modules, each focusing on...</p>
    <p>Module content will be delivered through a combination of...</p>
    <h2>Module Breakdown</h2>
    <h3><strong>Each Module Includes:</strong></h3>
    <h4>Readings &amp; Assignments</h4>
    <p>Carefully selected readings and assignments will be...</p>
    <h4>Discussion Forums</h4>
    <p>Engage in discussions with peers to deepen your...</p>
    <h4>Interactive Exercises</h4>
    <p>Participate in interactive exercises designed to...</p>
    <h4>Quizzes</h4>
    <p>Quizzes will be administered to assess your comprehension of the...</p>
    <h3><strong>Assessments:</strong></h3>
    <h4>Exams</h4>
    <p>Exams will be conducted to evaluate your overall grasp of...</p>
    <h3><strong>Final Project</strong></h3>
    <p>The final project will integrate all the...</p>
  </div>
</div>
<div id="second-column">
  <div class="content-body">
    <h2>Learning Objectives</h2>
    <p>This section outlines the key objectives you will...
    <ol class="custom-counter">
      <li>Objective 1</li>
      <li>Objective 2</li>
      <li>Objective 3</li>
      <li>Objective 4</li>
      <li>Objective 5</li>
      <li>Objective 6</li>
    </ol>
    </p>
    <p>Understanding the course objectives is crucial for...</p>
    <h2>Grading Criteria</h2>
    <table class="display-lg">
      <thead>
        <tr>
          <th>Assessment</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Readings &amp; Assignments</td>
          <td>50% each</td>
        </tr>
        <tr>
          <td>Discussion Participation</td>
          <td>10% each</td>
        </tr>
        <tr>
          <td>Interactive Exercises</td>
          <td>30% each</td>
        </tr>
        <tr>
          <td>Quizzes</td>
          <td>20% each</td>
        </tr>
        <tr>
          <td>Exams</td>
          <td>50% each</td>
        </tr>
        <tr>
          <td>Final Project</td>
          <td>100%</td>
        </tr>
      </tbody>
    </table>
    <div class="border">
      <div class="blockquote"><br>
        “The only way to do great work is to love what you do...”<br>
        <span class="caption">– Steve Jobs</span><br>
        <br>
      </div>
    </div>
  </div>
</div>
<footer>
  <div id="footer">
    <p class="text-center toggle-footnotes">[Show Footnotes]</p>
    <div class="footnotes">
      <p>Understanding the course objectives is crucial for...</p>
      <ul>
        <li>Focus on understanding the main goals and...</li>
        <li>Welcome to the introductory...</li>
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
            <Image src={templateImage} alt="" width={800} height={1400} priority />
            <div>
              <h4>Featured Widgets</h4>
              <div className="wd-border">
              <h5>Table</h5>
              <p>Display tasks, due dates, and more in an organized and clear manner.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToTable}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Border</h5>
              <p>Call out a main idea, draw attention to learning objectives or any other content that needs to stand out.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToBorder}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Caption</h5>
              <p>Style text as a caption: lighter, gray, and smaller.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToCaption}>Toggle in Preview</button>
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