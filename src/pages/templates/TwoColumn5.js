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

export default function TwoColumn5() {
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
const [templateImage, setTemplateImage] = useState('/images/templates/twocolumn5.jpg');
   
   useEffect(() => {
     switch(templateView) {
       
       case "table":
       setTemplateImage("/images/templates/twocolumn5-table.jpg");
       break;
 
       case "border":
       setTemplateImage("/images/templates/twocolumn5-border.jpg");
       break;

       case "caption":
        setTemplateImage("/images/templates/twocolumn5-caption.jpg");
        break;
       
       default:
       setTemplateImage("/images/templates/twocolumn5.jpg");
       break;
     }
   }, [templateView]);
 
   const changeToTable = () => {
     if (templateView != "table") {
       setTemplateView("table");
     }
     else {setTemplateView()};
   };

   const changeToBorder = () => {
     if (templateView != "border") {
       setTemplateView("border");
     }
     else {setTemplateView()};
   };

   const changeToCaption = () => {
    if (templateView != "caption") {
      setTemplateView("caption");
    }
    else {setTemplateView()};
  };

  return (
    <>
      <Head>
        <title>Course Clarity</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className='wd-break'>Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main className="anchor" id='two-column-5'>
          <h2>Course Clarity</h2>
          <p>Get down and detailed with this template: provide a welcome message, course overview, course structure, course learning objects, and set expectations for the major exams and assignments throughout the semester.</p>
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
              <h5>Border</h5>
              <p>Call out a main idea, draw attention to learning objectives or any other content that needs to stand out.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToBorder}>Toggle in Preview</button>
              </div>
              <div className='wd-border'>
              <h5>Caption</h5>
              <p>Style text as a caption: lighter, gray, and smaller.</p>
              <br />
              <button className="wd-btn thin" onClick={changeToCaption}>Toggle in Preview</button>
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
        <h1>Course Intro</h1>
        <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta.</p>
      </div>
    </header>
    <div id="content-wrapper">
      <div class="content-body">
        <h2>Welcome to [course name here]</h2>
      <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.</p>
		<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lacinia justo. Aliquam vulputate a urna id congue. Vivamus sagittis velit ut est lobortis, ac pharetra lorem euismod. Suspendisse blandit ligula sagittis facilisis facilisis. Nam finibus imperdiet enim, id ullamcorper orci laoreet vel. Suspendisse lobortis tristique nisl. Aliquam a justo elit. Nam vitae nibh quis erat porta pharetra. Mauris nisl nibh, pharetra et ligula tincidunt, viverra accumsan quam. Donec non molestie est. Donec ut sem elementum, ultrices ex vitae, consectetur leo. Suspendisse elementum vehicula mi. Vestibulum sed sodales risus. Quisque accumsan, ex vitae eleifend lobortis, elit odio venenatis sapien, et faucibus nunc mi in tellus.</p>
      		<h2>Course Overview</h2>
	  <p>In sollicitudin dui ut ante accumsan, ut consectetur magna congue. Morbi posuere sodales ligula vitae dictum. Pellentesque maximus lacinia gravida. Praesent fringilla commodo metus a vestibulum. Ut cursus rhoncus sapien a pulvinar. Sed nec velit et lacus rutrum auctor ac sed purus. Fusce in diam placerat ex tincidunt consequat sed et ipsum. Suspendisse potenti. Ut ac pellentesque erat, interdum vehicula ante.</p>
	  <p>Duis blandit nisi et tortor consequat porttitor. Aenean ullamcorper leo vitae orci facilisis, sed pretium nibh bibendum. Aliquam sagittis felis at mauris faucibus ornare. Proin eget mauris ac ex faucibus aliquet sed nec nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut erat nulla, vulputate ac ultricies eu, vehicula at leo. Nunc tristique ipsum urna, eu convallis sem imperdiet sagittis. Sed malesuada odio id eros mollis luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
		
			  <h2>Course Structure</h2>
	  	  <h3><strong>Each Module:</strong></h3>
	  <h4>Textbook Readings &amp; Assignments</h4>
	  	  <p>Pellentesque maximus lacinia gravida. Praesent fringilla commodo metus a vestibulum. Ut cursus rhoncus sapien a pulvinar.</p>	  
	  <h4>Topical Discussion Boards</h4>
	  <p>Duis blandit nisi et tortor consequat porttitor. Aenean ullamcorper leo vitae orci facilisis, sed pretium nibh bibendum.</p>
	  <h4>Interactive Labs</h4> 
	  <p>In sollicitudin dui ut ante accumsan, ut consectetur magna congue.</p>
	  <h4>Module Quizzes</h4>
	  <p>Ut erat nulla, vulputate ac ultricies eu, vehicula at leo.  Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
	  	  	  	  <h3><strong>Each Unit:</strong></h3>
	  <h4>Proctored Tests</h4>
	  	  <p>Pellentesque maximus lacinia gravida. Praesent fringilla commodo metus a vestibulum. Ut cursus rhoncus sapien a pulvinar. Sed nec velit et lacus rutrum auctor ac sed purus.</p>
	  	  	  <h3><strong>Final Exam</strong></h3>
	  	  <p>In sollicitudin dui ut ante accumsan, ut consectetur magna congue. Morbi posuere sodales ligula vitae dictum. Pellentesque maximus lacinia gravida. Praesent fringilla commodo metus a vestibulum. Ut cursus rhoncus sapien a pulvinar.</p></div>
    </div>
    <div id="second-column">
      <div class="content-body">
        <h2>Course Goals</h2>
    <p>Some text used to describe the media object on the left hand side. Side-by-side is multipurpose, so feel free to mix and match text, videos and images.
	  <ol class="custom-counter">
	  <li>Goal 1</li>
		  <li>Goal 2</li>
		  <li>Goal 3</li>
		  <li>Goal 4</li>
		  <li>Goal 5</li>
		  <li>Goal 6</li>
	  </ol></p>
			<p>Fusce luctus elementum lacus ut lobortis. Aenean consequat diam eget consectetur vulputate. Nam at laoreet ligula, ac bibendum sapien. Aenean tristique metus a metus interdum varius. Quisque id nisi nec ligula sodales semper. Suspendisse at molestie felis. Duis interdum dignissim suscipit. </p>
		<h2>Task Weights</h2>
		<table class="display-lg">
  <thead>
    <tr>
      <th>Assignment</th>
      <th>Points</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Textbook Readings &amp; Assignments</td>
      <td>50 each</td>
    </tr>
    <tr>
      <td>Discussion Participation</td>
      <td>10 each</td>
    </tr>
	      <tr>
      <td>Interactive Labs</td>
      <td>50 each</td>
    </tr>
	      <tr>
      <td>Module Quizzes</td>
      <td>20 each</td>
    </tr>
	      <tr>
      <td>Unit Exams</td>
      <td>50 each</td>
    </tr>
	      <tr>
      <td>Final Exam</td>
      <td>100</td>
    </tr>
  </tbody>
</table>
			  <div class="border">
		  <div class="blockquote"><br>Commit yourself to lifelong learning. The most valuable asset you will ever have is your mind and what you put into it. <br>
			  <span class="caption">–  Albert Einstein</span><br><br>
		  </div></div>
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