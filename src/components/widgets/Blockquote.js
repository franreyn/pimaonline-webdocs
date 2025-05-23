import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function Blockquote() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");
	const [showCode, setShowCode] = useState(false);

	useEffect(() => {
		if (showCode) {
			hljs.highlightElement(codeRef.current); 
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
      <section className="wd-content" id="toc-blockquote">
        <h2 id="blockquote" className="section-top anchor">Blockquote</h2>
        <p>Use <strong>Blockquote</strong> to separate any block of text along with supportive quotes. The space around the blockquote helps separate the block of text from the content that surrounds it.</p>
        <p>Use <span className="wd-monospace">&lt;blockquote&gt;&lt;/blockquote&gt;</span> to wrap your content.</p>
        <div className="wd-window">
          <div className="wd-visual-ex">
            <blockquote className="text-center">Some text used to help display a blockquote...</blockquote>
          </div>
          <div className="wd-btn-container">
					<button
						className="wd-toggle-btn"	onClick={() => setShowCode(!showCode)}>
						{showCode ? "Hide code" : "Show code"}
					</button>
					{showCode && (
					<button className="wd-copy-btn" onClick={handleCopyCode}>
						{buttonText}
					</button>
					)}
        </div>
				{showCode && (
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<blockquote class="text-center">Some text used to help display a blockquote...</blockquote>`}
              </code>
            </pre>
          </div>
				)}
        </div>
      </section>
    </>
  )
}