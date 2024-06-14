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

export default function TwoColumn3() {
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
          
          case "border":
          setTemplateImage("/images/templates/twocolumn3-border.jpg");
          break;
    
          case "side-by-side":
          setTemplateImage("/images/templates/twocolumn3-sidebyside.jpg");
          break;
    
          case "tabs":
          setTemplateImage("/images/templates/twocolumn3-tabs.jpg");
          break;
    
          case "assignments":
          setTemplateImage("/images/templates/twocolumn3-assignments.jpg");
          break;
          
          default:
          setTemplateImage("/images/templates/twocolumn3.jpg");
          break;
        }
      }, [templateView]);
    
      const changeToBorder = () => {
        if (templateView != "border") {
          setTemplateView("border");
        }
        else {setTemplateView()};
      };
    
      const changeToSideBySide = () => {
        if (templateView != "side-by-side") {
          setTemplateView("side-by-side");
        }
        else {setTemplateView()};
      };
    
      const changeToTabs = () => {
        if (templateView != "tabs") {
          setTemplateView("tabs");
        }
        else {setTemplateView()};
      };
    
      const changeToAssignments = () => {
        if (templateView != "assignments") {
          setTemplateView("assignments");
        }
        else {setTemplateView()};
      };

  return (
    <>
      <Head>
        <title>Key Topics &amp; Tasks</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className='wd-break'>Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id='two-column-3'>
          <h2>Key Topics &amp; Tasks</h2>
          <p>Focus on the headlines with this template. List learning objectives, brief overviews of main takeaways from the text, and an easy-to-follow assignmnet list that takes students exactly where they need to be.</p>
            <h3 className='spacer'>Template Preview</h3>
          <div className="template-preview">
            <Image src={templateImage} alt="" width={292} height={280} />
            <div>
              <h4>Featured Widgets</h4>
              <div className='wd-border'>
              <h5>Border</h5>
              <p>Call out a main idea, draw attention to learning objectives or any other content that needs to stand out.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToBorder}>Toggle in Preview</button>
              </div>
              <div className='wd-border'>
              <h5>Side-by-Side</h5>
              <p>Display two horizontal containers that can contain any content.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToSideBySide}>Toggle in Preview</button>
              </div>
              <div className='wd-border'>
              <h5>Tabs</h5>
              <p>Organize and separate related information into their own individual tabs.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToTabs}>Toggle in Preview</button>
              </div>
              <div className='wd-border'>
              <h5>Assignments</h5>
              <p>List out the week's tasks in organized, interactive cards.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToAssignments}>Toggle in Preview</button>
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
        <h2>Topic Overview</h2>
        <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
	  <div class="border"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <ul>
          <li>Sub-item 1</li>
          <li>Sub-item 2</li>
        </ul></p></div>
		          <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada:</p>
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
		  <h3 class="font-size-h4">Quisque in enim</h3>
		     <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
		  <h3>Key Takeaways</h3>
		  <div class="tabs">
  <input/>
  <label>
    <span>Key Concept 1</span>
  </label>
  <div>
    <h4>Tab 1 Heading Inside</h4>
    <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
  </div>
  <input/>
  <label>
    <span>Key Concept 2</span>
  </label>
  <div>
    <h4>Tab 2 Heading Inside</h4>
    <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
  </div>
  <input/>
  <label>
    <span>Key Concept 3</span>
  </label>
  <div>
    <h4>Tab 3 Heading Inside</h4>
    <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
  </div>
			   <input/>
  <label>
    <span>Key Concept 4</span>
  </label>
  <div>
    <h4>Tab 4 Heading Inside</h4>
    <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
  </div>
  <input/>
  <label>
    <span>Hide</span>
  </label>
</div>
      </div>
    </div>
    <div id="second-column">
      <div class="content-body">
        <h2>Due This Week</h2>
<ul class="assignments-widget">
  <li class="assignment">
    <h3>Module 1 Readings</h3>
	  <p class="monospace"><strong>Due Date: Aug 26</strong></p>
    <p>The readings in the list have interactive exercises that will help you determine if you are fully understanding the material.</p>
    <a class="btn" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Readings</a>
  </li>
  <li class="assignment">
    <h3>Reading Review Activity</h3>
	  	  <p class="monospace"><strong>Due Date: Aug 28</strong></p>
    <p>Rhetorical Analysis Review Activity</p>
    <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Activity</a>
  </li>
  <li class="assignment">
    <h3>Reading Discussion 1A</h3>
	  	  <p class="monospace"><strong>Due Date: Aug 30</strong></p>
    <p>Reading Fables</p>
    <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3639476" target="_blank">Join Discussion</a>
  </li>
	  <li class="assignment">
    <h3>Module 1 Quiz</h3>
	  	  <p class="monospace"><strong>Due Date: Aug 30</strong></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.</p>
    <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3639476" target="_blank">Take Quiz</a>
  </li>
</ul>
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