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

export default function TwoColumn1() {
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

  return (
    <>
      <Head>
        <title>Interactive Introductions</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className='wd-break'>Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main id='two-column-1'>
          <h2>Interactive Introductions</h2>
          <p> Description TBD </p>
            <h3 className='spacer'>Template Preview</h3>
          <div className="template-preview">
            <Image src="/images/templates/twocolumn1.jpg" alt="" width={292} height={280} />
            <div>
              <h4>Featured Widgets</h4>
              <div className='wd-border'>
              <h5>Tabs</h5>
              <p>Organize and separate related information into their own individual tabs.</p>
              </div>
              <div className='wd-border'>
              <h5>Horizontal Display</h5>
              <p>Display any content in an inline fashion with responsive stacking on mobile devices.</p>
              </div>
              <div className='wd-border'>
              <h5>Border</h5>
              <p>Call out a main idea, draw attention to learning objectives or any other content that needs to stand out.</p>
              </div>
              <div className='wd-border'>
              <h5>Assignments</h5>
              <p>List out the week's tasks in organized, interactive cards.</p>
              </div>
              <div className='wd-border'>
              <h5>Blockquote</h5>
              <p>Separate any block of text with supportive quotes. Use to draw attention to key text or inspiration.</p>
              </div>
            </div>
          </div>
          <div className="wd-window">
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
    <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta.</p>
  </div>
</header>
<div id="content-wrapper">
  <div class="content-body">
    <h2>Welcome to [course name here]</h2>
    <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
    <h3>Module Overviews</h3>
    <p>Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
    <div class="tabs">
      <input/>
      <label> <span>Module 1</span> </label>
      <div>
        <h4>Tab 1 Heading Inside</h4>
        <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
      </div>
      <input/>
      <label> <span>Module 2</span> </label>
      <div>
        <h4>Tab 2 Heading Inside</h4>
        <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
      </div>
      <input/>
      <label> <span>Module 3</span> </label>
      <div>
        <h4>Tab 3 Heading Inside</h4>
        <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
      </div>
      <input/>
      <label> <span>Module 4</span> </label>
      <div>
        <h4>Tab 4 Heading Inside</h4>
        <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
      </div>
      <input/>
      <label> <span>Module 5</span> </label>
      <div>
        <h4>Tab 5 Heading Inside</h4>
        <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
      </div>
      <input/>
      <label> <span>Module 6</span> </label>
      <div>
        <h4>Tab 6 Heading Inside</h4>
        <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
      </div>
      <input/>
      <label> <span>Module 7</span> </label>
      <div>
        <h4>Tab 7 Heading Inside</h4>
        <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
      </div>
      <input/>
      <label> <span>Module 8</span> </label>
      <div>
        <h4>Tab 8 Heading Inside</h4>
        <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
      </div>
      <input/>
      <label> <span>Hide</span> </label>
    </div>
    <h3>Course Goals</h3>
    <p>Vitae purus faucibus ornare suspendisse sed. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Eget lorem dolor sed viverra ipsum nunc. Blandit aliquam etiam erat velit scelerisque in dictum non. Morbi tristique senectus et netus et. Scelerisque in dictum non consectetur a erat. Eu augue ut lectus arcu bibendum at varius vel pharetra.</p>
    <div class="horizontal-display">
      <div> <img src="https://via.placeholder.com/200" alt="" /> </div>
      <div> <img src="https://via.placeholder.com/200" alt="" /> </div>
      <div> <img src="https://via.placeholder.com/200" alt="" /> </div>
      <div> <img src="https://via.placeholder.com/200" alt="" /> </div>
    </div>
    <p>Vitae purus faucibus ornare suspendisse sed. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Eget lorem dolor sed viverra ipsum nunc. Blandit aliquam etiam erat velit scelerisque in dictum non. Morbi tristique senectus et netus et. Scelerisque in dictum non consectetur a erat. Eu augue ut lectus arcu bibendum at varius vel pharetra.</p>
	  <div class="horizontal-display">
      <div>
		      <div class="border">
        <h4><strong>Objective 1</strong></h4>
        <p>
        <ul>
          <li>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</li>
          <li>Conubia nostra, per inceptos himenaeos</li>
          <li>Litora torquent per conubia nostra, per inceptos himenaeos</li>
        </ul>
        </p>
		</div>
	  </div>
      <div>
		      <div class="border">
        <h4><strong>Objective 2</strong></h4>
        <p>
        <ul>
          <li>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</li>
          <li>Conubia nostra, per inceptos himenaeos</li>
          <li>Litora torquent per conubia nostra, per inceptos himenaeos</li>
        </ul>
        </p>
		</div>
	  </div>
	     <div>
		      <div class="border">
        <h4><strong>Objective 3</strong></h4>
        <p>
        <ul>
          <li>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</li>
          <li>Conubia nostra, per inceptos himenaeos</li>
          <li>Litora torquent per conubia nostra, per inceptos himenaeos</li>
        </ul>
        </p>
		</div>
	  </div>
  </div>
</div>
</div>
<div id="second-column">
  <div class="content-body">
    <h2>Getting Started</h2>
    <p>Vitae purus faucibus ornare suspendisse sed. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Eget lorem dolor sed viverra ipsum nunc. Blandit aliquam etiam erat velit scelerisque in dictum non. Morbi tristique senectus et netus et. Scelerisque in dictum non consectetur a erat. Eu augue ut lectus arcu bibendum at varius vel pharetra.</p>
    <ul class="assignments-widget">
      <li class="assignment">
        <h3>Module 1 Readings</h3>
        <p>The readings in the list have interactive exercises that will help you determine if you are fully understanding the material.</p>
        <a class="btn" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Readings</a> </li>
      <li class="assignment">
        <h3>Reading Review Activity</h3>
        <p>Rhetorical Analysis Review Activity</p>
        <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Activity</a> </li>
      <li class="assignment">
        <h3>Reading Discussion 1</h3>
        <p>Reading Fables</p>
        <a class="btn ext" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3639476" target="_blank">Join Discussion</a> </li>
    </ul>
	  <br><hr>
    <blockquote class="text-center">Donec interdum hendrerit viverra. Praesent sit amet feugiat nunc. Polutpat suscipit urna. Maecenas porta, mi vitae hendrerit molestie, vel maximus risus dolor sed nulla.</blockquote>
	  <hr>
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
            <div className="wd-btn-container">
              <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
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