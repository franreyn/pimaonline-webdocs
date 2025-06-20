import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";
import Image from "next/image";
import TemplateSidebar from "@/components/TemplateSidebar";
import BackToTop from "@/components/BackToTop";
import { currentVersion } from '../../components/Version';

hljs.registerLanguage("html", html);

export default function TwoColumn4() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");
	const [showCode, setShowCode] = useState(false);

	useEffect(() => {
    if (showCode) {
      hljs.highlightElement(codeRef.current);

      // Delay meta tag injection until after highlight.js finishes DOM manipulation
      setTimeout(() => {
        const codeBlocks = document.querySelectorAll('.wd-html-code code.language-html');

        if (codeBlocks.length > 0) {
          codeBlocks.forEach((codeBlock) => {
            let codeContent = codeBlock.textContent;

            if (!codeContent.includes('<meta name="version"')) {
              const metaRegex = /<meta[^>]*>/g;
              const matches = [...codeContent.matchAll(metaRegex)];

              if (matches.length > 0) {
                const lastMeta = matches[matches.length - 1];
                const insertPosition = lastMeta.index + lastMeta[0].length;

                const versionMeta = `\n<meta name="version" content="v${currentVersion}">`;
                codeContent =
                  codeContent.slice(0, insertPosition) +
                  versionMeta +
                  codeContent.slice(insertPosition);
              } else {
                codeContent = codeContent.replace(
                  '<head>',
                  `<head>\n<meta name="version" content="v${currentVersion}">`
                );
              }

              codeBlock.textContent = codeContent;
            }
          });
        }
      }, 0);
    }
  }, [showCode]);

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
const [templateImage, setTemplateImage] = useState("/images/templates/twocolumn4.jpg");
    
    useEffect(() => {
      switch(templateView) {
        
        case "table":
        setTemplateImage("/images/templates/twocolumn4-table.jpg");
        break;
  
        case "side-by-side":
        setTemplateImage("/images/templates/twocolumn4-sidebyside.jpg");
        break;
  
        case "vocab-list":
        setTemplateImage("/images/templates/twocolumn4-vocablist.jpg");
        break;
  
        case "image-gallery":
        setTemplateImage("/images/templates/twocolumn4-imagegallery.jpg");
        break;

        case "video-gallery":
        setTemplateImage("/images/templates/twocolumn4-videogallery.jpg");
        break;
        
        default:
        setTemplateImage("/images/templates/twocolumn4.jpg");
        break;
      }
    }, [templateView]);
  
    const changeToTable = () => {
      if (templateView != "table") {
        setTemplateView("table");
      }
      else {setTemplateView()};
    };

        const changeToSideBySide = () => {
          if (templateView != "side-by-side") {
            setTemplateView("side-by-side");
          }
          else {setTemplateView()};
        };

        const changeToVocabList = () => {
          if (templateView != "vocab-list") {
            setTemplateView("vocab-list");
          }
          else {setTemplateView()};
        };

        const changeToImageGallery = () => {
          if (templateView != "image-gallery") {
            setTemplateView("image-gallery");
          }
          else {setTemplateView()};
        };

        const changeToVideoGallery = () => {
          if (templateView != "video-gallery") {
            setTemplateView("video-gallery");
          }
          else {setTemplateView()};
        };

  return (
    <>
      <Head>
        <title>Learning Medley</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className="wd-break">Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id="two-column-4">
          <h2>Learning Medley</h2>
          <p>Cater to a range of learning styles by implementing a variety of widgets for your students to interact with. Whether they prefer listed tasks, text to read through, dropdowns to engage with, images to connect with, or videos to absorb — it's all included in this helpful overview.</p>
          
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
<title>Module One</title>
</head>
<body>
<header class="header"> <img src="https://via.placeholder.com/1920X600" alt="">
  <div class="text-container">
    <h1>Module One</h1>
    <p>Welcome to Module One of our writing course. In this module, we will...</p>
  </div>
</header>
<div id="content-wrapper">
  <div class="content-body">
    <h2>Introduction to Essay Writing</h2>
    <p>In this section, we will discuss the essential components of a well-written essay. These include...</p>
    <h3>Assignments and Deadlines</h3>
    <table class="display-lg">
      <thead>
        <tr>
          <th>Assignment</th>
          <th>Points</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="url">Read Chapter 1: Introduction to Essay Writing</a></td>
          <td>10</td>
          <td>Mar 1</td>
        </tr>
        <tr>
          <td><a href="url">Complete Exercise 1: Identifying Thesis Statements</a></td>
          <td>15</td>
          <td>Mar 3</td>
        </tr>
        <tr>
          <td><a href="url">Participate in Discussion 1: Thesis Development</a></td>
          <td>10</td>
          <td>Mar 5</td>
        </tr>
        <tr>
          <td><a href="url">Essay Draft 1 Submission</a></td>
          <td>30</td>
          <td>Mar 7</td>
        </tr>
      </tbody>
    </table>
    <h3>Key Concepts</h3>
    <p>Understanding the structure of an essay is vital. The introduction should...</p>
    <div class="side-by-side">
      <div class="side-by-side-item">
        <h3 class="font-size-h4">Understanding Thesis Statements</h3>
        <p>A thesis statement is a crucial part of an...</p>
      </div>
      <div class="side-by-side-item">
        <h3 class="font-size-h4">Effective Argumentation</h3>
        <p>Building a strong argument involves presenting evidence and...</p>
      </div>
    </div>
    <h3>Essential Terms</h3>
    <dl class="vocab-list">
      <dt tabIndex="0">Thesis Statement</dt>
      <dd>A statement that presents the main argument or point of an...</dd>
      <dt tabIndex="0">Topic Sentence</dt>
      <dd>The first sentence of a paragraph that introduces the...</dd>
      <dt tabIndex="0">Evidence</dt>
      <dd>Data or information used to support a claim or...</dd>
      <dt tabIndex="0">Conclusion</dt>
      <dd>The final part of an essay that summarizes the main points and...</dd>
    </dl>
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
<div id="second-column">
  <div class="content-body">
    <h2>Additional Resources</h2>
    <p>For further reading, explore the following resources on...</p>
    <div class="video-widget">
      <div class="video-card">
        <h3 class="font-size-h4">Essay Structure Overview</h3>
        <hr>
        <div class="card-content">
          <p>(Video length: 4:00 minutes)</p>
          <div class="media-container">
            <div class="media-object">
              <iframe src="https://www.youtube.com/embed/rKV0Yl1Ir2g" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
            </div>
          </div>
          <a class="btn ext" href="https://www.youtube.com/embed/rKV0Yl1Ir2g" target="_blank" rel="nonopener noopener">Watch on Youtube</a> </div>
      </div>
      <div class="video-card">
        <h3 class="font-size-h4">Developing Strong Thesis Statements</h3>
        <hr>
        <div class="card-content">
          <p>(Video length: 3:00 minutes)</p>
          <div class="media-container">
            <div class="media-object">
              <iframe src="https://www.youtube.com/embed/dkCWThe7RuI" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
            </div>
          </div>
          <a class="btn ext" href="https://www.youtube.com/embed/dkCWThe7RuI" target="_blank" rel="nonopener noopener">Watch on Youtube</a> </div>
      </div>
      <div class="video-card">
        <h3 class="font-size-h4">Crafting Effective Arguments</h3>
        <hr>
        <div class="card-content">
          <p>(Video length: 5:00 minutes)</p>
          <div class="media-container">
            <div class="media-object">
              <iframe src="https://www.youtube.com/embed/7wUXSXZgNlU" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
            </div>
          </div>
          <a class="btn ext" href="https://www.youtube.com/embed/7wUXSXZgNlU" target="_blank" rel="nonopener noopener">Watch on Youtube</a> </div>
      </div>
    </div>
  </div>
</div>
<footer>
  <div id="footer">
    <p class="text-center toggle-footnotes">[Show Footnotes]</p>
    <div class="footnotes">
      <p>For additional support, consult your instructor or refer to...</p>
      <ul>
        <li>Writing Center...</li>
        <li>Additional Reading...l</li>
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
              <h5>Side-by-Side</h5>
              <p>Display two horizontal containers that can contain any content.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToSideBySide}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Vocab List</h5>
              <p>Create a list of collapsible vocabulary items with terms and definitions.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToVocabList}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Image Gallery</h5>
              <p>Break up large chunks of text or add some flair to your course shell with imagery.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToImageGallery}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Video Gallery</h5>
              <p>Create a grid-like video gallery, with general information like title and video duration.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToVideoGallery}>Toggle in Preview</button>
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