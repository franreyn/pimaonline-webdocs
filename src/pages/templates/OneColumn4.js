import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLayoutEffect } from 'react';
import { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/night-owl.css';
import html from 'highlight.js/lib/languages/xml';
import Image from 'next/image';
import TemplateSidebar from '@/components/TemplateSidebar';

export default function OneColumn4() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState('Copy code');

  hljs.registerLanguage('html', html);
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const handleCopyCode = () => {
    const codeElement = codeRef.current;
    const range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    setButtonText('Copied!');

    setTimeout(() => {
      setButtonText('Copy code');
    }, 2000);
  };

  // Remove any existing theme link (required to keep theme styles just on the theme page)
  useLayoutEffect(() => {
    const existingLink = document.querySelector('link[data-theme-link]');
    if (existingLink) {
      document.head.removeChild(existingLink);
    }
  }, []);

      // Show the highlighted component
      const [templateView, setTemplateView] = useState();
  
      // Change the url for the highlighted image
      const [templateImage, setTemplateImage] = useState();
      
      useEffect(() => {
        switch(templateView) {
          
          case "vocab-cards":
          setTemplateImage("/images/templates/onecolumn4-vocabcards.jpg");
          break;
    
          case "table":
          setTemplateImage("/images/templates/onecolumn4-table.jpg");
          break;
    
          case "callout":
          setTemplateImage("/images/templates/onecolumn4-callout.jpg");
          break;
    
          case "video-gallery":
          setTemplateImage("/images/templates/onecolumn4-videogallery.jpg");
          break;
          
          default:
          setTemplateImage("/images/templates/onecolumn4.jpg");
          break;
        }
      }, [templateView]);
  
      const changeToTable = () => {
        if (templateView != "table") {
          setTemplateView("table");
        }
        else {setTemplateView()};
      }
  
      const changeToVocabCards = () => {
        if (templateView != "vocab-cards") {
          setTemplateView("vocab-cards");
        }
        else {setTemplateView()};
      }
  
      const changeToCallout = () => {
        if (templateView != "callout") {
          setTemplateView("callout");
        }
        else {setTemplateView()};
      }
  
      const changeToVideoGallery = () => {
        if (templateView != "video-gallery") {
          setTemplateView("video-gallery");
        }
        else {setTemplateView()};
      }

  return (
    <>
      <Head>
        <title>Clean Grids</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className='wd-break'>Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id='one-column-4'>
          <h2>Clean Grids</h2>
          <p>Provide some visual structure to your content with this template that leans into row- and column-based widgets. Include the weeks tasks in a table, provide key takeaways in card format, and offer supplemental video walkthroughs in a grid-like fashionl.</p>
            <h3 className='spacer'>Template Preview</h3>
          <div className="template-preview">
            <Image src={templateImage} alt="" width={292} height={280} />
            <div>
              <h4>Featured Widgets</h4>
              <div className='wd-border'>
              <h5>Table</h5>
              <p>Display tasks, due dates, and more in an organized and clear manner.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToTable}>Toggle in Preview</button>
              </div>
              <div className='wd-border'>
              <h5>Vocab Cards</h5>
              <p>Not just for vocabulary! A versatile, interactive tile layout to display your content.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToVocabCards}>Toggle in Preview</button>
              </div>
              <div className='wd-border'>
              <h5>Video Gallery</h5>
              <p>Create a grid-like video gallery, with general information like title and video duration.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToVideoGallery}>Toggle in Preview</button>
              </div>
              <div className='wd-border'>
              <h5>Callout</h5>
              <p>Invite students to explore more resources on any given topic.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToCallout}>Toggle in Preview</button>
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
  <header class="header">
    <img src="https://via.placeholder.com/1920X600" alt="">
  <div class="text-container">
    <h1>Module One</h1>
    <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta.</p>
  </div>
  </header>
  <div id="content-wrapper">
    <div class="content-body">
      <h2>Module 1 Topic</h2>
      <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
		<h3>Module One Agenda</h3>
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
      <td>Read Chapters 1 and 2</td>
      <td>5</td>
      <td>Feb 1</td>
    </tr>
    <tr>
      <td>Complete Reading Assignment 1</td>
      <td>20</td>
      <td>Feb 1</td>
    </tr>
	      <tr>
      <td>Contribute to Discussion 1</td>
      <td>5</td>
      <td>Feb 3</td>
    </tr>
	      <tr>
      <td>Module 1 Quiz</td>
      <td>30</td>
      <td>Feb 5</td>
    </tr>
  </tbody>
</table>
				<h3>Key Takeaways</h3>
 <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
		 <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
		<dl class="vocab-cards">
  <div class="vocab">
    <dt>Perennial</dt>
    <dd>Perennial is used to describe things that exist or continue in the same way or state for a long time, as well as things that happen again and again.</dd>
  </div>
  <div class="vocab">
    <dt>Evergreen</dt>
    <dd>Refers to plants that retain their green leaves throughout the year, regardless of the changing seasons. These plants are often associated with perennials due to their continuous growth and appearance.</dd>
  </div>
  <div class="vocab">
    <dt>Sustained</dt>
    <dd>Maintained or continued over an extended period of time. Perennials are known for their sustained growth and presence in a garden or landscape.</dd>
  </div>
  <div class="vocab">
    <dt>Cyclical</dt>
    <dd>Recurring in cycles or periods, often following a regular pattern. Perennials are part of the cyclical nature of plants, coming back each year as part of their life cycle.</dd>
  </div>
  <div class="vocab">
    <dt>Enduring</dt>
    <dd>Something that is able to last or persist for a long time, showing resilience and lasting quality. Perennial plants are often seen as enduring due to their ability to return year after year.</dd>
  </div>
  <div class="vocab">
    <dt>Unfading</dt>
    <dd>Something that does not lose its color, brilliance, or quality; remaining constant and vibrant. Perennials can be considered unfading due to their consistent return and appearance.</dd>
  </div>
</dl>
    </div>
	  <div class="content-body">
		  <h2>Supplemental Resources</h2>
		    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in enim quis sem placerat viverra id eget mauris. Proin tempor, eros et efficitur tincidunt, sem felis pharetra tellus, a fermentum mauris tellus sed nisi. Nunc ex metus, porttitor sed ante eget, tempus scelerisque metus. Maecenas imperdiet dictum euismod. Duis sed semper mi. Vestibulum consequat nisl ut felis viverra hendrerit. Nunc vitae bibendum felis.</p>
	  <div class="video-widget">
  <div class="video-card">
    <h3 class="font-size-h4">Review Video 01</h3>
	  <hr>
    <div class="card-content">
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
    <h3 class="font-size-h4">Review Video 02</h3>
	  <hr>
    <div class="card-content">
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
    <h3 class="font-size-h4">Review Video 03</h3>
	  <hr>
    <div class="card-content">
      <p>(Video length: 5:14 minutes)</p>
      <div class="media-container">
        <div class="media-object">
          <iframe src="https://www.youtube.com/embed/7wUXSXZgNlU" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
        </div>
      </div>
      <a class="btn ext" href="https://www.youtube.com/embed/7wUXSXZgNlU" target="_blank" rel="nonopener noopener">Watch on Youtube</a>
    </div>
  </div>
</div>
<div class="call-out">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in enim quis sem placerat viverra id eget mauris. Proin tempor, eros et efficitur tincidunt, sem felis pharetra tellus, a fermentum mauris tellus sed nisi. Nunc ex metus, porttitor sed ante eget, tempus scelerisque metus. Maecenas imperdiet dictum euismod. Duis sed semper mi. Vestibulum consequat nisl ut felis viverra hendrerit. Nunc vitae bibendum felis.</p>
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
  )
}