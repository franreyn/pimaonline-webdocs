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

export default function SOW2() {
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
const [templateImage, setTemplateImage] = useState("/images/templates/sow2.jpg");

    
    useEffect(() => {
      switch(templateView) {
        
        case "table":
        setTemplateImage("/images/templates/sow2-table.jpg");
        break;
        
        default:
        setTemplateImage("/images/templates/sow2.jpg");
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
        <title>Module-By-Module</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className="wd-break">Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id="sow-2">
          <h2>Module-By-Module</h2>
          <p>Break down the course schedule into module-by-module chunks, detailing exactly what's due and when. Students can have both an overview of the courseload, while still taking each week a section at a time.</p>
            <h3 className="spacer">Template Preview</h3>
          <div className="template-preview">
            <Image src={templateImage} alt="" width={292} height={280} priority/>
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
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>
<title>Course Schedule Template</title>
</head>
  <body>
    <header class="header"><img src="https://via.placeholder.com/1920X600" alt="decorative image of a woman's hand typing on a computer">
      <div class="text-container">
        <h1>Course Intro</h1>
        <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta.</p>
      </div>
    </header>
    <div id="content-wrapper">
      <div class="content-body">
        <h2>Module 1: Lorem Ipsum</h2>
        <table class="display-lg">
          <thead>
            <tr>
              <th scope="col">Assignment</th>
              <th scope="col">Points</th>
              <th scope="col">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Assignment 1</td>
              <td>--</td>
              <td>[Insert Due Date]</td>
            </tr>
            <tr>
              <td>Assignment 2</td>
              <td>--</td>
              <td>[Insert Due Date]</td>
            </tr>
            <tr>
              <td>Assignment 3</td>
              <td>--</td>
              <td>[Insert Due Date]</td>
            </tr>
            <tr>
              <td>Assignment 4</td>
              <td>--</td>
              <td>[Insert Due Date]</td>
            </tr>
          </tbody>
        </table>
        <h2>Module 2: Lorem Ipsum</h2>
        <table class="display-lg">
          <thead>
            <tr>
              <th scope="col">Assignment</th>
              <th scope="col">Points</th>
              <th scope="col">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Assignment 1</td>
              <td>--</td>
              <td>[Insert Due Date]</td>
            </tr>
            <tr>
              <td>Assignment 2</td>
              <td>--</td>
              <td>[Insert Due Date]</td>
            </tr>
            <tr>
              <td>Assignment 3</td>
              <td>--</td>
              <td>[Insert Due Date]</td>
            </tr>
            <tr>
              <td>Assignment 4</td>
              <td>--</td>
              <td>[Insert Due Date]</td>
            </tr>
          </tbody>
        </table>
        <h2>Module 3: Lorem Ipsum</h2>
        <table class="display-lg">
          <thead>
            <tr>
              <th scope="col">Assignment</th>
              <th scope="col">Points</th>
              <th scope="col">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Assignment 1</td>
              <td>--</td>
              <td>[Insert Due Date]</td>
            </tr>
            <tr>
              <td>Assignment 2</td>
              <td>--</td>
              <td>[Insert Due Date]</td>
            </tr>
            <tr>
              <td>Assignment 3</td>
              <td>--</td>
              <td>[Insert Due Date]</td>
            </tr>
            <tr>
              <td>Assignment 4</td>
              <td>--</td>
              <td>[Insert Due Date]</td>
            </tr>
          </tbody>
        </table>
        <h2>Total Requirements</h2>
        <table class="display-lg">
          <thead>
            <tr>
              <th scope="col">Graded Work</th>
              <th scope="col">Quantity</th>
              <th scope="col">Points Each</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Quizzes</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>Discussions</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>Video Assignments</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>Final Exam</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
        <h2>Grade Determination</h2>
        <table class="display-lg">
          <thead>
            <tr>
              <th scope="col">Letter Grade</th>
              <th scope="col">Percentage</th>
              <th scope="col">Total Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>90.00% and above</td>
              <td>--</td>
            </tr>
            <tr>
              <td>B</td>
              <td>80.00 - 89.99%</td>
              <td>--</td>
            </tr>
            <tr>
              <td>C</td>
              <td>70.00 - 79.99%</td>
              <td>--</td>
            </tr>
            <tr>
              <td>D</td>
              <td>60.00 - 69.99%</td>
              <td>--</td>
            </tr>
            <tr>
              <td>F</td>
              <td>59% and below</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <footer>
      <div id="footer">
        <p class="text-center toggle-footnotes" tabindex="0">[Show Footnotes]</p>
        <div class="footnotes">
          <p>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
          <ul>
            <li>Lorem culim ghus.</li>
            <li>Ipsum guar havana.</li>
            <li>Doloret kava chec.</li>
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
  )
}