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
            <Image src={templateImage} alt="" width={292} height={280} priority/>
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
                  {String.raw`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/css/themes/cards/styles.css">
<link rel="stylesheet" type="text/css" href="../../css/custom.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js" defer></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>
<title>Starter Template</title>
</head>
  <body>
    <header class="header">
      <img src="https://via.placeholder.com/1920X600" alt="">
      <div class="text-container">
        <h1>Course Intro</h1>
        <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta.</p>
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
		        <h3>What You Will Learn</h3>
      <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
    <dl class="vocab-cards">
      <div class="vocab">
        <dt>[Course Objective]</dt>
        <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
        <ul>
          <li class="caption">Sub-item 1</li>
          <li class="caption">Sub-item 2</li>
        </ul>
      </div>
      <div class="vocab">
        <dt>[Course Objective]</dt>
        <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
      </div>
      <div class="vocab">
        <dt>[Course Objective]</dt>
        <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
        <ul>
          <li class="caption">Sub-item 1</li>
        </ul>
      </div>
      <div class="vocab">
        <dt>[Course Objective]</dt>
        <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
      </div>
    </dl>
		</div>
    </div>
    <div id="second-column">
      <div class="content-body">
        <h2>Weekly Agenda</h2>
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
		  <h3>Lorem Ipsum</h3>
<p>Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
		  <div class="image-gallery">
  <div class="gallery-wrapper">
    <div class="image-box">
      <img src="https://picsum.photos/id/1018/400/200" alt="" />
    </div>
    <div class="image-box">
      <img src="https://picsum.photos/id/1047/300/400" alt="" />
    </div>
    <div class="image-box">
      <img src="https://picsum.photos/id/1059/500/300" alt="" />
    </div>
    <div class="image-box">
      <img src="https://picsum.photos/id/119/500/300" alt="" />
    </div>
    <div class="image-box">
      <img src="https://picsum.photos/id/143/800/200" alt="" />
    </div>
  </div>
</div>
		  <p>Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p><br><br>
		 <hr> <blockquote class="text-center">Some text used to help display a blockquote</blockquote><hr>
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