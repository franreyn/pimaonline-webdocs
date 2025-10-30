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

export default function OneColumn5() {
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
      const [templateImage, setTemplateImage] = useState("/images/templates/onecolumn5.jpg");

    
    useEffect(() => {
      switch(templateView) {
       
        case "side-by-side":
        setTemplateImage("/images/templates/onecolumn5-sidebyside.jpg");
        break;
        
        case "border":
        setTemplateImage("/images/templates/onecolumn5-border.jpg");
        break;
  
        case "horizontal":
        setTemplateImage("/images/templates/onecolumn5-horizontal.jpg");
        break;
  
        case "table":
        setTemplateImage("/images/templates/onecolumn5-table.jpg");
        break;
  
        case "border-yellow":
        setTemplateImage("/images/templates/onecolumn5-borderyellow.jpg");
        break;
        
        default:
        setTemplateImage("/images/templates/onecolumn5.jpg");
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

    const changeToHorizontal = () => {
      if (templateView != "horizontal") {
        setTemplateView("horizontal");
      }
      else {setTemplateView()};
    };

    const changeToTable = () => {
      if (templateView != "table") {
        setTemplateView("table");
      }
      else {setTemplateView()};
    };

    const changeToBorderYellow = () => {
      if (templateView != "border-yellow") {
        setTemplateView("border-yellow");
      }
      else {setTemplateView()};
    };

  return (
    <>
      <Head>
        <title>Detailed Intro</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className="wd-break">Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id="one-column-5">
          <h2>Detailed Intro</h2>
          <p>Give your students every detail, expectation, and agenda item all in one place with this all-encompassing template. Break up text-heavy sections with border widgets to provide visual checkpoint for students as they work there way through the content.</p>
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
<title>Course Intro</title>
</head>
<body>
<header class="header"> <img src="https://via.placeholder.com/1920X600" alt="">
  <div class="text-container">
    <h1>Course Intro</h1>
    <p>Writing well requires practice, structure, and feedback. This course focuses on...</p>
  </div>
</header>
<div id="content-wrapper">
  <div class="content-body">
    <h2>Welcome to [course name here]</h2>
    <p>In this course, you’ll learn the fundamentals of writing, from developing a clear thesis to crafting structured arguments. Each module will build on...</p>
    <h2>Course Overview and Goals</h2>
    <div class="side-by-side">
      <div class="side-by-side-item">
        <h3>Overview</h3>
        <p>This course is divided into multiple units, each focusing on...</p>
        <p>Each unit is designed to challenge you and help develop your voice as...</p>
      </div>
      <div class="side-by-side-item">
        <h3>Goals</h3>
        <p>By the end of this course, you will be able to:
        <ol class="custom-counter">
          <li>Develop strong thesis statements...</li>
          <li>Support your arguments with credible evidence...</li>
          <li>Understand the writing process from brainstorming to revision...</li>
          <li>Write in a clear, concise, and organized manner...</li>
          <li>Conduct research and integrate sources properly...</li>
          <li>Use feedback to improve your writing...</li>
        </ol>
        </p>
      </div>
    </div>
    <div class="border">
      <div class="blockquote"><br>
        "Writing is thinking on paper..." <br>
        <span class="caption">– William Zinsser</span><br>
        <br>
      </div>
    </div>
    <div class="card-horizontal">
      <div class="card-body">
        <h2>Course Structure</h2>
        <h3><strong>Each Module:</strong></h3>
        <h4>Readings &amp; Writing Assignments</h4>
        <p>You will complete assigned readings and...</p>
        <h4>Discussion Boards</h4>
        <p>Engage with peers in discussion boards to...</p>
        <h4>Workshops</h4>
        <p>Participate in writing workshops where you will receive feedback and...</p>
        <h4>Quizzes</h4>
        <p>Quizzes will assess your understanding of key writing concepts, such as...</p>
        <h3><strong>Each Unit:</strong></h3>
        <h4>Essays</h4>
        <p>Each unit culminates in a major writing assignment where you will apply...</p>
        <h3><strong>Final Paper</strong></h3>
        <p>Your final assignment will be a research paper that synthesizes the...</p>
      </div>
      <div class="card-img"> <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3639476" target="_blank">View Course Schedule</a> <br>
        <br>
        <br>
        <h4>Tasks and Point Weight</h4>
        <table class="display-lg">
          <thead>
            <tr>
              <th>Assignment</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reading &amp; Writing Assignments</td>
              <td>100 each</td>
            </tr>
            <tr>
              <td>Discussion Participation</td>
              <td>50 each</td>
            </tr>
            <tr>
              <td>Workshops</td>
              <td>75 each</td>
            </tr>
            <tr>
              <td>Quizzes</td>
              <td>50 each</td>
            </tr>
            <tr>
              <td>Essays</td>
              <td>150 each</td>
            </tr>
            <tr>
              <td>Final Paper</td>
              <td>200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="content-body">
    <h2>Before You Begin</h2>
    <p>To succeed in this course, be prepared to dedicate time to reading, writing, and...</p>
    <div class="border border-yellow"><br>
      <h3 class="font-size-h4">Time Commitment</h3>
      <p>Expect to spend several hours each week on readings, writing assignments, and...</p>
      <br>
    </div>
    <br>
    <p>Each week will require active engagement with the course material. Make sure to...</p>
    <div class="border border-yellow"><br>
      <h3 class="font-size-h4">Foundational Knowledge</h3>
      <p>This course assumes no prior writing experience, but a willingness to learn and...</p>
      <br>
    </div>
  </div>
</div>
<footer>
  <div id="footer">
    <p class="text-center toggle-footnotes">[Show Footnotes]</p>
    <div class="footnotes">
      <p>Writing is an iterative process. Don't be afraid to revise and seek feedback to...</p>
      <ul>
        <li>Draft, revise, and...</li>
        <li>Participate actively in discussions and...</li>
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
              <h5>Side-by-Side</h5>
              <p>Display two horizontal containers that can contain any content.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToSideBySide}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Border</h5>
              <p>Call out a main idea, draw attention to learning objectives or any other content that needs to stand out.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToBorder}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Horizontal Display</h5>
              <p>Display any content in an inline fashion with the flexibility to make one column wider than the other.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToHorizontal}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Table</h5>
              <p>Display tasks, due dates, and more in an organized and clear manner.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToTable}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Border Yellow</h5>
              <p>Another means to call out a main idea with an extra pop of color.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToBorderYellow}>Toggle in Preview</button>
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