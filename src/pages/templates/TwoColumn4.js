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

export default function TwoColumn4() {
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
const [templateImage, setTemplateImage] = useState('/images/templates/twocolumn4.jpg');
    
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
      <p className='wd-break'>Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id='two-column-4'>
          <h2>Learning Medley</h2>
          <p>Cater to a range of learning styles by implementing a variety of widgets for your students to interact with. Whether they prefer listed tasks, text to read through, dropdowns to engage with, images to connect with, or videos to absorb — it's all included in this helpful overview.</p>
            <h3 className='spacer'>Template Preview</h3>
          <div className="template-preview">
            <Image src={templateImage} alt="" width={292} height={280} priority />
            <div>
              <h4>Featured Widgets</h4>
              <div className='wd-border'>
              <h5>Table</h5>
              <p>Display tasks, due dates, and more in an organized and clear manner.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToTable}>Toggle in Preview</button>
              </div>
              <div className='wd-border'>
              <h5>Side-by-Side</h5>
              <p>Display two horizontal containers that can contain any content.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToSideBySide}>Toggle in Preview</button>
              </div>
              <div className='wd-border'>
              <h5>Vocab List</h5>
              <p>Create a list of collapsible vocabulary items with terms and definitions.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToVocabList}>Toggle in Preview</button>
              </div>
              <div className='wd-border'>
              <h5>Image Gallery</h5>
              <p>Break up large chunks of text or add some flair to your course shell with imagery.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToImageGallery}>Toggle in Preview</button>
              </div>
              <div className='wd-border'>
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
    <header class="header">
      <img src="https://via.placeholder.com/1920X600" alt="">
      <div class="text-container">
        <h1>Module One</h1>
        <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta.</p>
      </div>
    </header>
    <div id="content-wrapper">
      <div class="content-body">
        <h2>Module One Topic</h2>
      <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
		<h3>Tasks and Due Dates</h3>
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
      <td><a href="url">Read Chapters 1 and 2</a></td>
      <td>5</td>
      <td>Feb 1</td>
    </tr>
    <tr>
		<td><a href="url">Complete Reading Assignment 1</a></td>
      <td>20</td>
      <td>Feb 1</td>
    </tr>
	      <tr>
			  <td><a href="url">Contribute to Discussion 1</a></td>
      <td>5</td>
      <td>Feb 3</td>
    </tr>
	      <tr>
			  <td><a href="url">Module 1 Quiz</a></td>
      <td>30</td>
      <td>Feb 5</td>
    </tr>
  </tbody>
</table>
		  <h3>Key Takeaways</h3>
		  <p>Vitae purus faucibus ornare suspendisse sed. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Eget lorem dolor sed viverra ipsum nunc. Blandit aliquam etiam erat velit scelerisque in dictum non. Morbi tristique senectus et netus et. Scelerisque in dictum non consectetur a erat. Eu augue ut lectus arcu bibendum at varius vel pharetra.</p>
		  	    <div class="side-by-side">
  <div class="side-by-side-item">
	  <h3 class="font-size-h4">Lorem ipsum</h3>
       <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
  </div>
  <div class="side-by-side-item">
	   <h3 class="font-size-h4">Class aptent</h3>
       <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
  </div>
</div>
		  <h3>Essential Vocab</h3>
		  <dl class="vocab-list">
  <button>Close All</button>
  <dt tabIndex="0">Term 1</dt>
  <dd>Term Definition 1</dd>
  <dt tabIndex="0">Term 2</dt>
  <dd>Term Definition 2</dd>
  <dt tabIndex="0">Term 3</dt>
  <dd>Term Definition 3</dd>
			    <dt tabIndex="0">Term 4</dt>
  <dd>Term Definition 4</dd>
</dl>
      </div>
		  <div class="content-body">
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
  </div>
    </div>
    <div id="second-column">
      <div class="content-body">
        <h2>More Resources</h2>
        <p>Vitae purus faucibus ornare suspendisse sed. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Eget lorem dolor sed viverra ipsum nunc. Blandit aliquam etiam erat velit scelerisque in dictum non. Morbi tristique senectus et netus et. Scelerisque in dictum non consectetur a erat. Eu augue ut lectus arcu bibendum at varius vel pharetra.</p>
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