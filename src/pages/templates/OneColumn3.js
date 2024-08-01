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

export default function OneColumn3() {
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
  const [templateImage, setTemplateImage] = useState("/images/templates/onecolumn3.jpg");

  useEffect(() => {
    switch (templateView) {
      case "border":
        setTemplateImage("/images/templates/onecolumn3-border.jpg");
        break;

      case "vocab-cards":
        setTemplateImage("/images/templates/onecolumn3-vocabcards.jpg");
        break;

      case "assignments":
        setTemplateImage("/images/templates/onecolumn3-assignments.jpg");
        break;

      case "callout":
        setTemplateImage("/images/templates/onecolumn3-callout.jpg");
        break;

      case "video-gallery":
        setTemplateImage("/images/templates/onecolumn3-videogallery.jpg");
        break;

      case "highlight":
        setTemplateImage("/images/templates/onecolumn3-highlight.jpg");
        break;

      default:
        setTemplateImage("/images/templates/onecolumn3.jpg");
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

  const changeToAssignments = () => {
    if (templateView !== "assignments") {
      setTemplateView("assignments");
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

  const changeToCallout = () => {
    if (templateView !== "callout") {
      setTemplateView("callout");
    } else {
      setTemplateView();
    }
  };

  const changeToVideoGallery = () => {
    if (templateView !== "video-gallery") {
      setTemplateView("video-gallery");
    } else {
      setTemplateView();
    }
  };

  const changeToHighlight = () => {
    if (templateView !== "highlight") {
      setTemplateView("highlight");
    } else {
      setTemplateView();
    }
  };

  return (
    <>
      <Head>
        <title>Content Roadmap</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className="wd-break">Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id="one-column-3">
          <h2>Content Roadmap</h2>
          <p>Keep your students from getting lost in the coursework with this virtual content roadmap. Provide module learning goals, a list of items due in the next week, where they are in the overall course, and additional content &amp; resources to explore.</p>
            <h3 className="spacer">Template Preview</h3>
          <div className="template-preview">
            <Image src={templateImage} alt="" width={292} height={280} priority/>
            <div>
              <h4>Featured Widgets</h4>
              <div className="wd-border">
              <h5>Border</h5>
              <p>Call out a main idea, draw attention to learning objectives or any other content that needs to stand out.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToBorder}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Assignments</h5>
              <p>List out the week's tasks in organized, interactive cards.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToAssignments}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Callout</h5>
              <p>Invite students to explore more resources on any given topic.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToCallout}>Toggle in Preview</button>
              </div><div className="wd-border">
              <h5>Vocab Cards</h5>
              <p>Not just for vocabulary! A versatile, interactive tile layout to display your content.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToVocabCards}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Highlight</h5>
              <p>Use this utility class to draw attention to crucial information in any block of text.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToHighlight}>Toggle in Preview</button>
              </div>
              <div className="wd-border">
              <h5>Video Gallery</h5>
              <p>Create a grid-like video gallery, with general information like title and video duration.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToVideoGallery}>Toggle in Preview</button>
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
    <h1>Module One</h1>
    <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta.</p>
  </div>
</header>
<div id="content-wrapper">
  <div class="content-body">
    <h2>Topic Overview</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in enim quis sem placerat viverra id eget mauris. Proin tempor, eros et efficitur tincidunt, sem felis pharetra tellus, a fermentum mauris tellus sed nisi. Nunc ex metus, porttitor sed ante eget, tempus scelerisque metus. Maecenas imperdiet dictum euismod. Duis sed semper mi. Vestibulum consequat nisl ut felis viverra hendrerit. Nunc vitae bibendum felis.</p>
<div class="image-gallery">
	  <div class="border"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <ul>
          <li>Sub-item 1</li>
          <li>Sub-item 2</li>
        </ul></p></div>
</div>
      <p>Donec interdum hendrerit viverra. Praesent sit amet feugiat nunc. Pellentesque vitae egestas sapien, volutpat suscipit urna. Maecenas porta, mi vitae hendrerit molestie, libero dolor gravida mi, vel maximus risus dolor sed nulla. Vestibulum malesuada velit nec urna molestie vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec elementum justo id metus suscipit, ut semper massa fringilla. Vestibulum finibus commodo nisi, non congue arcu. Integer sollicitudin rhoncus felis ac laoreet. Curabitur varius sagittis orci vitae dapibus. Morbi congue blandit dolor, sit amet auctor neque ornare et. Morbi vulputate erat urna, vitae varius urna accumsan ac. Curabitur purus turpis, ullamcorper nec lorem et, tincidunt tempus odio. Etiam sit amet luctus lectus.</p>
      <p>Donec a sapien vitae lacus aliquam rhoncus vel in dui. Ut scelerisque leo in arcu lobortis, ut accumsan sem fringilla. Vestibulum id lectus sagittis, malesuada ex non, ultrices leo. Praesent sollicitudin nisl tellus, eget sodales dui cursus gravida. Integer felis ex, iaculis nec pulvinar eget, condimentum at lectus. Phasellus ultricies, nulla ut aliquet aliquet, risus massa molestie risus, vitae ultrices nunc ipsum eget justo. Nulla quis sapien vel ligula feugiat interdum. Fusce elit purus, tincidunt vel ante et, efficitur feugiat elit.</p>
    <h3>Here's what's due this week:</h3>
    <p>Complete the reading, review activity, discussion, lab, and quiz by August 30th.</p>
    <br>
    <ul class="assignments-widget">
      <li class="assignment">
        <h3>Module One Readings</h3>
        <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
        <a class="btn" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Readings</a> </li>
      <li class="assignment">
        <h3>Reading Review Activity</h3>
        <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
        <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Activity</a> </li>
      <li class="assignment">
        <h3>Discussion Topic</h3>
        <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
        <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3639476" target="_blank">Join Discussion</a> </li>
      <li class="assignment">
        <h3>Interactive Lab</h3>
        <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
        <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Begin Lab</a> </li>
      <li class="assignment">
        <h3>Module One Quiz</h3>
        <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
        <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3639476" target="_blank">Take the Quiz</a> </li>
    </ul>
    <div class="call-out">
      <h4>Want more on this subject?</h4>
      <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
      <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3639476" target="_blank">Optional Resources</a> </div>
  </div>
  <div class="content-body">
    <h2>Course Roadmap</h2>
    <p>In the overall course, you are here:</p>
    <dl class="vocab-cards">
      <div class="vocab">
        <dt>Unit One</dt>
        <dd>
          <ul>
            <li><span class="highlight"> Module One: Lorem ipsum dolor sit</span></li>
            <li>Module Two: Quisque in enim</li>
            <li>Module Three: Proin tempor</li>
          </ul>
        </dd>
      </div>
      <div class="vocab">
        <dt>Unit Two</dt>
        <dd>
          <ul>
            <li>Module Four: Nunc ex metus</li>
            <li>Module Five: Lorem ipsum</li>
            <li>Module Six: Dolor sit</li>
            <li>Module Seven: Tempor metus</li>
          </ul>
        </dd>
      </div>
      <div class="vocab">
        <dt>Unit Three</dt>
        <dd>
          <ul>
            <li>Module Eight: Lorem ipsum</li>
            <li>Module Nine: Dolor sit</li>
            <li>Module Ten: Tempor metus</li>
          </ul>
        </dd>
      </div>
    </dl>
  </div>
	<div class="content-body">
	<h2>More Food For Thought</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in enim quis sem placerat viverra id eget mauris. Proin tempor, eros et efficitur tincidunt, sem felis pharetra tellus, a fermentum mauris tellus sed nisi. Nunc ex metus, porttitor sed ante eget, tempus scelerisque metus. </p>
	<div class="video-widget">
  <div class="video-card">
    <h3>Supplementary Video</h3>
    <div class="card-content">
      <h4>Il faut</h4>
      <p>(Video length: 3:50 minutes)</p>
      <div class="media-container">
        <div class="media-object">
          <iframe src="https://www.youtube.com/embed/rKV0Yl1Ir2g" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
        </div>
      </div>
      <a class="btn ext" href="https://www.youtube.com/embed/rKV0Yl1Ir2g" target="_blank" rel="nonopener noopener">Watch on Youtube</a>
    </div>
  </div>
  <div class="video-card">
    <h3>Supplementary Video</h3>
    <div class="card-content">
      <h4>Comparisons</h4>
      <p>(Video length: 2:34 minutes)</p>
      <div class="media-container">
        <div class="media-object">
          <iframe src="https://www.youtube.com/embed/dkCWThe7RuI" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
        </div>
      </div>
      <a class="btn ext" href="https://www.youtube.com/embed/dkCWThe7RuI" target="_blank" rel="nonopener noopener">Watch on Youtube</a>
    </div>
  </div>
  <div class="video-card">
    <h3>Supplementary Video</h3>
    <div class="card-content">
      <h4>Pronominal Verbs</h4>
      <p>(Video length: 5:14 minutes)</p>
      <div class="media-container">
        <div class="media-object">
          <iframe src="https://www.youtube.com/embed/7wUXSXZgNlU" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
        </div>
      </div>
      <a class="btn ext" href="https://www.youtube.com/embed/7wUXSXZgNlU" target="_blank" rel="nonopener noopener">Watch on Youtube</a>
    </div>
  </div>
</div></div>
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