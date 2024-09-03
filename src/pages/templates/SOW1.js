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

export default function SOW1() {
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
<title>Course Schedule Template</title>
</head>
<body>
<div id="main">
  <div class="content-body">
    <h2>Schedule of Work</h2>
    <p>Suspendisse porttitor ut orci quis venenatis. Sed orci dui, pellentesque ut ex id, malesuada laoreet nulla. Nullam eleifend mattis tellus et ultrices. Fusce gravida vulputate eros, non bibendum eros sagittis id. Mauris ultrices ante risus, aliquet accumsan libero cursus vitae.</p>
    <p> Nunc sit amet venenatis mauris, eget vulputate mi. Phasellus euismod libero non nisi sagittis bibendum. Sed auctor nisi ut ultrices tincidunt. Maecenas odio mi, maximus nec velit vel, pharetra ultrices lorem. Nam finibus velit libero, at malesuada sem tincidunt in. Aliquam ut nibh in nisi pellentesque elementum. Sed eget dui ac urna semper cursus ultricies nec leo.</p>
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
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td></td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque<br>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr style="background-color: rgba(24,91,118,0.1);">
          <td>Date</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td></td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque<br>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td></td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque<br>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque<br>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>Lorem Ipsum</td>
          <td>Vivamus blandit aliquet neque</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>&nbsp;</td>
          <td><strong>Final Exam are due</strong> (Vivamus blandit aliquet neque, vel rutrum justo volutpat ac)&nbsp;&nbsp;</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
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