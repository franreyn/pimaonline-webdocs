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

export default function SOW1() {
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
  const [templateImage, setTemplateImage] = useState("/images/templates/sow1.jpg");

      
      useEffect(() => {
        switch(templateView) {
          
          case "table":
          setTemplateImage("/images/templates/sow1-table.jpg");
          break;
          
          default:
          setTemplateImage("/images/templates/sow1.jpg");
          break;
        }
      }, [templateView]);
    
      const changeToTable = () => {
        if (templateView != "table") {
          setTemplateView("table");
        }
        else {setTemplateView()};
      };

  return (
    <>
      <Head>
        <title>Schedule Overview</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className="wd-break">Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id="sow-1">
          <h2>Schedule Overview</h2>
          <p>Give a broader overview of the courseload, focusing on larger assignment, discussion and exam due dates. Keep students from feeling overwhelmed by hitting the main points and avoiding the nitty-gritty.</p>
          
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
    <header class="header"><img src="https://via.placeholder.com/1920X600" alt="decorative image of a woman's hand typing on a computer">
      <div class="text-container">
        <h1>Course Intro</h1>
        <p>In academic writing, clarity and conciseness are crucial for...</p>
      </div>
    </header>
<div id="main">
  <div class="content-body">
    <h2>Schedule of Work</h2>
    <p>In academic writing, clarity and...</p>
    <p>Paragraphs should be well-structured, containing a...</p>
    <table width="100%">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Module Due</th>
          <th scope="col">Other</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Date</td>
          <td>Module 1: Introduction to Writing</td>
          <td>Review thesis statements and outlines</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Module 2: Crafting Paragraphs</td>
          <td>Submit draft of first essay</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Module 3: Argumentation</td>
          <td>Peer review sessions</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Module 4: Research Skills</td>
          <td>Library research workshop</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Module 5: Citation Styles</td>
          <td>Submit annotated bibliography</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Module 6: Revising and Editing</td>
          <td>Revision strategies workshop</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Module 7: Final Draft Preparation</td>
          <td>Submit final essay for grading</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>&nbsp;</td>
          <td><strong>Final Exam due</strong> (Essay writing techniques and strategies)</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
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
              <h5>Table</h5>
              <p>Display tasks, due dates, and more in an organized and clear manner.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToTable}>Toggle in Preview</button>
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