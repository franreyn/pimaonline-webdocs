import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function SideBySide() {
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
    <section className="wd-content" id="toc-side-by-side">
      <h2 id="side-by-side" className="section-top anchor">
        Side-by-side
      </h2>
      <p>
        Use <strong>Side-by-side</strong> to display two horizontal containers that can contain any content.
      </p>
      <p>
        Use <span className="wd-monospace">.side-by-side</span> as the parent element of two
        <span className="wd-monospace">.side-by-side-item</span>.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="side-by-side">
            <div className="side-by-side-item">
              <img src="https://unsplash.it/300/300" alt="" />
            </div>
            <div className="side-by-side-item">
              <p>
							In academic writing, clarity and coherence are crucial for effectively communicating ideas. Start each paragraph with a clear topic sentence that introduces the main idea, followed by supporting sentences that elaborate on this idea. It is important to use transitional phrases to guide the reader through your argument and maintain a logical flow. Always revise your drafts to eliminate any grammatical errors and ensure that your writing meets the assignment’s requirements.
              </p>
            </div>
          </div>
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
              {String.raw`<div class="side-by-side">
  <div class="side-by-side-item">
    <img src="https://via.placeholder.com/300" alt="" />
  </div>
  <div class="side-by-side-item">
    <p>In academic writing, clarity and coherence are crucial for effectively communicating ideas. Start each paragraph with a clear topic sentence that introduces the...</p>
  </div>
</div>`}</code>
          </pre>
        </div>
				)}
      </div>
    </section>
  );
}
