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

export default function OneColumn6() {
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
  const [templateImage, setTemplateImage] = useState("/images/templates/onecolumn6.jpg");

      
      useEffect(() => {
        switch(templateView) {
          
          case "blockquote":
          setTemplateImage("/images/templates/onecolumn6-blockquote.jpg");
          break;
    
          case "horizontal":
          setTemplateImage("/images/templates/onecolumn6-horizontal.jpg");
          break;
    
          case "table":
          setTemplateImage("/images/templates/onecolumn6-table.jpg");
          break;
    
          case "border-yellow":
          setTemplateImage("/images/templates/onecolumn6-borderyellow.jpg");
          break;
          
          default:
          setTemplateImage("/images/templates/onecolumn6.jpg");
          break;
        }
      }, [templateView]);
    
      const changeToBorderYellow = () => {
        if (templateView != "border-yellow") {
          setTemplateView("border-yellow");
        }
        else {setTemplateView()};
      };

      const changeToHorizontal = () => {
        if (templateView != "horizontal") {
          setTemplateView("horizontal");
        }
        else {setTemplateView()};
      };

      const changeToBlockquote = () => {
        if (templateView != "blockquote") {
          setTemplateView("blockquote");
        }
        else {setTemplateView()};
      };

      const changeToTable = () => {
        if (templateView != "table") {
          setTemplateView("table");
        }
        else {setTemplateView()};
      };

  return (
    <>
      <Head>
        <title>Overview Basics</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className="wd-break">Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id="one-column-6">
          <h2>Overview Basics</h2>
          <p>Provide an easily-digestible snippet of the week's topic and relevant figures from the text, and follow up with a brief summary and task list for students to take actionable steps.</p>
            <h3 className="spacer">Template Preview</h3>
          <div className="template-preview">
            <Image src={templateImage} alt="" width={800} height={1400} priority/>
            <div>
              <h4>Featured Widgets</h4>
              <div className="wd-border">
              <h5>Horizontal Display</h5>
              <p>Display any content in an inline fashion with the flexibility to make one column wider than the other.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToHorizontal}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Blockquote</h5>
              <p>Separate any block of text along with supportive quotes. Call out phrases from the text or just relevant inspiration.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToBlockquote}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Border Yellow</h5>
              <p>Another means to call out a main idea with an extra pop of color.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToBorderYellow}>Toggle in Preview</button>
              </div>
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
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js" defer></script> 
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>
<title>Starter Template</title>
</head>
<body>
<header class="header"> <img src="https://via.placeholder.com/1920X600" alt="">
  <div class="text-container">
    <h1>Module One: Topic</h1>
    <p>Donec sollicitudin misit malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta.</p>
  </div>
</header>
<div id="content-wrapper">
  <div class="content-body">
    <h2 class="icon-bolt">Topic Overview</h2>
    <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
    <div class="card-horizontal">
      <div class="card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lacinia justo. Aliquam vulputate a urna id congue. Vivamus sagittis velit ut est lobortis, ac pharetra lorem euismod. Suspendisse blandit ligula sagittis facilisis facilisis. Nam finibus imperdiet enim, id ullamcorper orci laoreet vel. Suspendisse lobortis tristique nisl. Aliquam a justo elit. Nam vitae nibh quis erat porta pharetra. Mauris nisl nibh, pharetra et ligula tincidunt, viverra accumsan quam. Donec non misit est. Donec ut sem elementum, ultrices ex vitae, consectetur leo. Suspendisse elementum vehicula mi. Vestibulum sed sodales risus. Quisque accumsan, ex vitae eleifend!</p>
      </div>
      <div class="card-img"> <img src="https://via.placeholder.com/300" alt="" />
        <figcaption class="caption">Figure 1.1: Suspendisse elementum vehicula mi. Vestibulum sed sodales risus.</figcaption>
      </div>
    </div>
    <p>In sollicitudin dui ut ante accumsan, ut consectetur magna congue. Morbi posuere sodales ligula vitae dictum. Pellentesque maximus lacinia gravida. Praesent fringilla commodo metus a vestibulum. Ut cursus rhoncus sapien a pulvinar. Sed nec velit et lacus rutrum auctor ac sed purus. Fusce in diam placerat ex tincidunt consequat sed et ipsum. Suspendisse potenti. Ut ac pellentesque erat, interdum vehicula ante.</p>
    <hr>
    <blockquote class="text-center">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</blockquote>
    <hr>
  </div>
  <div class="content-body">
    <h2 class="icon-list">Learning Activities</h2>
    <div class="border border-yellow">
      <p class="icon-lightbulb">Sed nec velit et lacus rutrum auctor ac sed purus. Fusce in diam placerat ex tincidunt consequat sed et ipsum. Suspendisse potenti. Ut ac pellentesque erat, interdum vehicula ante:
      <ul>
        <li>Ut cursus rhoncus sapien a pulvinar</li>
        <li>Quisque accumsan, ex vitae eleifend</li>
        <li>Interdum vehicula ante</li>
        <li>Aenean ut lacinia justo</li>
      </ul>
      </p>
    </div>
    <table class="display-lg" cellpadding="5" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th scope="col">Activity</th>
          <th scope="col">Where</th>
          <th scope="col">Estimated Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="">Lecture</a></td>
          <td>D2L</td>
          <td>10 min</td>
        </tr>
        <tr>
          <td><a href="">Reading</a></td>
          <td>Textbook</td>
          <td>30 min</td>
        </tr>
        <tr>
          <td><a href="">Discussion Topic</a></td>
          <td>D2L Discussion Board</td>
          <td>30 min</td>
        </tr>
        <tr>
          <td><a href="">Lab</a></td>
          <td>Lab Interactive</td>
          <td>30 min</td>
        </tr>
        <tr>
          <td><a href="">Assignment</a></td>
          <td>D2L</td>
          <td>30 min</td>
        </tr>
        <tr>
          <th>Total time</th>
          <th></th>
          <th>~3 hours</th>
        </tr>
      </tbody>
    </table>
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
  )
}