import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";
import { currentVersion } from '../Version';

hljs.registerLanguage("html", html);

export default function QuickStart() {
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

  return (
    <>
      <section className="wd-content" id="toc-quick-start">
        <h2 id="quick-start" className="section-top anchor">Quick Start</h2>
        <p>The easiest way to get started with our templates is to copy the code for the Starter Template and paste it into your course files.</p>
        <div className="wd-window">
        <div className="wd-btn-container">
				<button
						className="wd-toggle-btn"	onClick={() => setShowCode(!showCode)}>
						{showCode ? "Hide code" : "Show code"}
					</button>
					{showCode && (
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>)}
          </div>
					{showCode && (
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/css/themes/cards/styles.css">
<link rel="stylesheet" type="text/css" href="../css/custom.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>
<title>Course Introduction</title>
</head>
<body>
  <header class="header">
    <img src="https://via.placeholder.com/1920X600" alt="">
  <div class="text-container">
    <h1>Course Introduction</h1>
    <p>Effective writing is a vital skill...</p>
  </div>
  </header>
  <div id="content-wrapper">
    <div class="content-body">
      <h2>Welcome to [course name here]</h2>
      <p>This course will...</p>
    </div>
  </div>
  <footer>
    <div id="footer">
      <p class="text-center toggle-footnotes">[Show Footnotes]</p>
      <div class="footnotes">
        <p>Writing is not just about expressing ideas but also about shaping them in a way that resonates with readers...</p>
        <ul>
          <li>Understand the importance of...</li>
          <li>Practice clear and...</li>
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
      </section>
    </>
  )
}