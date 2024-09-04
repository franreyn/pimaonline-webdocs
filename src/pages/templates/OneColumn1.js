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

export default function OneColumn1() {
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
  const [templateImage, setTemplateImage] = useState("/images/templates/onecolumn1.jpg");

  useEffect(() => {
    switch (templateView) {
      case "border":
        setTemplateImage("/images/templates/onecolumn1-border.jpg");
        break;

      case "vocab-cards":
        setTemplateImage("/images/templates/onecolumn1-vocabcards.jpg");
        break;

      case "side-by-side":
        setTemplateImage("/images/templates/onecolumn1-sidebyside.jpg");
        break;

      case "blockquote":
        setTemplateImage("/images/templates/onecolumn1-blockquote.jpg");
        break;

      case "image-gallery":
        setTemplateImage("/images/templates/onecolumn1-imagegallery.jpg");
        break;

      default:
        setTemplateImage("/images/templates/onecolumn1.jpg");
        break;
    }
  }, [templateView]);

  const changeToBorder = () => {
    if (templateView !== "border") {
      setTemplateView("border");
    } else {
      setTemplateView();
    }
  };

  const changeToVocabCards = () => {
    if (templateView !== "vocab-cards") {
      setTemplateView("vocab-cards");
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

  const changeToBlockquote = () => {
    if (templateView !== "blockquote") {
      setTemplateView("blockquote");
    } else {
      setTemplateView();
    }
  };

  const changeToImgGal = () => {
    if (templateView !== "image-gallery") {
      setTemplateView("image-gallery");
    } else {
      setTemplateView();
    }
  };

  return (
    <>
      <Head>
        <title>Inspirational Structure</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
        <h1>Browse Course Templates</h1>
        <p className="wd-break">Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id="one-column-1">
          <h2>Inspirational Structure</h2>
          <p>Give students a clear idea of the course overview and objects, while also providing a bit of encouragement and support. With opportunities for images throughout, this layout will feel visually balanced rather than intimidating chunks of text. Plus, give them quick reference shortcuts to the resources they'll need throughout the semester.</p>
          <h3 className="spacer">Template Preview</h3>
          <div className="template-preview">
            <Image src={templateImage} alt="" width={800} height={1400} priority />
            <div>
              <h4>Featured Widgets</h4>
              <div className="wd-border">
                <h5>Border</h5>
                <p>Call out a main idea, draw attention to learning objectives or any other content that needs to stand out.</p>
                <br />
                <button className="wd-btn thin" onClick={changeToBorder}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
                <h5>Vocab Cards</h5>
                <p>More than just for vocab! Use these subtly-interactive cards to build on a standard list.</p>
                <br />
                <button className="wd-btn thin" onClick={changeToVocabCards}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
                <h5>Side-by-Side</h5>
                <p>Display two horizontal containers that can contain any content.</p>
                <br />
                <button className="wd-btn thin" onClick={changeToSideBySide}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
                <h5>Blockquote</h5>
                <p>Separate any block of text along with supportive quotes. Call out phrases from the text or just relevant inspiration.</p>
                <br />
                <button className="wd-btn thin" onClick={changeToBlockquote}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
                <h5>Image Gallery</h5>
                <p>Break up large chunks of text or add some flair to your course shell with imagery.</p>
                <br />
                <button className="wd-btn thin" onClick={changeToImgGal}>Toggle in Preview</button>
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
    <h1>Course Intro</h1>
    <p>Donec sollicitudin misit malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta.</p>
  </div>
</header>
<div id="content-wrapper">
  <div class="content-body">
    <h2>Welcome to [course name here]</h2>
    <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
    <div class="border">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <ul>
        <li>Sub-item 1</li>
        <li>Sub-item 2</li>
      </ul>
      </p>
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
      <div class="vocab">
        <dt>[Course Objective]</dt>
        <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
        <ul>
          <li class="caption">Sub-item 1</li>
          <li class="caption">Sub-item 2</li>
          <li class="caption">Sub-item 3</li>
        </ul>
      </div>
    </dl>
    <h4>And don't forget...</h4>
    <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
  </div>
  <div class="content-body">
    <h2>Some inspiration as you begin</h2>
    <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus:</p>
    <div class="side-by-side">
      <div class="side-by-side-item"> <img src="https://via.placeholder.com/300" alt="" /> </div>
      <div class="side-by-side-item">
        <hr>
        <blockquote class="text-center">Commit yourself to lifelong Learning. The most valuable asset you will ever have is your mind and what you put into it. <br>
          <br>
          <span class="caption">–  Albert Einstein </span></blockquote>
        <hr>
      </div>
    </div>
  </div>
  <div class="content-body">
    <div class="image-gallery">
      <div class="gallery-wrapper">
        <div class="image-box"> <img src="https://picsum.photos/id/1018/400/200" alt="" /> </div>
        <div class="image-box"> <img src="https://picsum.photos/id/1047/300/400" alt="" /> </div>
        <div class="image-box"> <img src="https://picsum.photos/id/1059/500/300" alt="" /> </div>
        <div class="image-box"> <img src="https://picsum.photos/id/119/500/300" alt="" /> </div>
        <div class="image-box"> <img src="https://picsum.photos/id/143/800/200" alt="" /> </div>
      </div>
    </div>
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