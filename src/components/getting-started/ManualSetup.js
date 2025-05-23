import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function ManualSetup() {
  const cssCodeRef = useRef(null);
  const jsCodeRef = useRef(null);
	const [cssButtonText, setCssButtonText] = useState("Copy code");
  const [jsButtonText, setJsButtonText] = useState("Copy code");
	const [showCssCode, setShowCssCode] = useState(false);
  const [showJsCode, setShowJsCode] = useState(false);

  useEffect(() => {
    if (showCssCode && cssCodeRef.current) {
      hljs.highlightElement(cssCodeRef.current);
    }
  }, [showCssCode]);

  useEffect(() => {
    if (showJsCode && jsCodeRef.current) {
      hljs.highlightElement(jsCodeRef.current);
    }
  }, [showJsCode]);

  const handleCopyCode = (codeRef, setButtonText) => {
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
      <section className="wd-content" id="toc-manual-setup">
        <h2 id="manual-setup" className="section-top anchor">Manual Setup</h2>
        <p>For a more custom approach, follow these steps to manually install the template system.</p>
        <div className="wd-subitems">
          <h3>CSS</h3>
          <p>
            Include the stylesheet by copying the code below and adding it in{" "}
            <span className="wd-monospace">&lt;head&gt;</span> before all other stylesheets.
          </p>
          <div className="wd-window">
            <div className="wd-btn-container">
							<button className="wd-toggle-btn" onClick={() => setShowCssCode(!showCssCode)}>{showCssCode ? "Hide code" : "Show code"} </button>
							{showCssCode && ( <button className="wd-copy-btn" onClick={() => handleCopyCode(cssCodeRef, setCssButtonText)}>{cssButtonText}</button>)}
            </div>
						{showCssCode && (
            <div className="wd-html-code">
              <pre>
                <code className="language-html" ref={cssCodeRef}>
                  {String.raw`<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/css/themes/cards/styles.css">`}
                </code>
              </pre>
            </div>
						)}
          </div>
          <br />
          <br />
          <h3>JS</h3>
          <p>
            Include the scripts2.js file by adding the following code in{" "}
            <span className="wd-monospace">&lt;head&gt;</span> immediately after the stylesheets.
          </p>
          <div className="wd-window">
            <div className="wd-btn-container">
						<button className="wd-toggle-btn" onClick={() => setShowJsCode(!showJsCode)}>{showJsCode ? "Hide code" : "Show code"}</button>
						{showJsCode && (
              <button
                className="wd-copy-btn" onClick={() => handleCopyCode(jsCodeRef, setJsButtonText)}> {jsButtonText}
              </button>)}
            </div>
						{showJsCode && (
            <div className="wd-html-code">
              <pre>
                <code className="language-html" ref={jsCodeRef}>
                  {String.raw`<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>`}
                </code>
              </pre>
            </div>
						)}
          </div>
        </div>
      </section>
    </>
  );
}
