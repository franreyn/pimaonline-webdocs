import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function CallOut() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");
	const [showCode, setShowCode] = useState(false);

	useEffect(() => {
		if (showCode) {
			hljs.highlightElement(codeRef.current); 
		}
	}, [showCode]);

  const handleCopyCode = async () => {
    if (!codeRef.current) return;
    try {
      await navigator.clipboard.writeText(codeRef.current.textContent);
      setButtonText("Copied!");
      setTimeout(() => setButtonText("Copy code"), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
      setButtonText("Failed to copy");
    }
  };

  return (
    <section className="wd-content" id="toc-call-out">
      <h2 id="call-out" className="section-top anchor">
        Call Out
      </h2>
      <p>
        Use <strong>Call Out</strong> to bring attention to any supplementary learning content. The content is contained within a colored background with an "Explore More" heading attached.
      </p>
      <p>
        Use <span className="wd-monospace">.call-out</span> to wrap your paragraph element.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="call-out">
            <p>In academic writing, a strong thesis statement is essential to guide the reader through your argument. It should be clear, concise, and take a definitive stance on the topic.</p>
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
              {String.raw`<div class="call-out">
  <p>In academic writing, a strong thesis statement is...</p>
</div>`}
            </code>
          </pre>
        </div>
				)}
      </div>
    </section>
  );
}
