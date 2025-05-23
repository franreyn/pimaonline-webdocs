import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function Border() {
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
    <section className="wd-content" id="toc-border">
      <h2 id="border" className="section-top anchor">Border</h2>
      <p>Use <strong>Border</strong> to bring attention to any piece of learning content. The content is contained within a subtly-colored background, making it ideal for learning objectives or any other content that needs to stand out.</p>
      <p>Use <span className="wd-monospace">.border</span> to wrap your content. You may use a single element or multiple.</p>
      <div className="wd-window">
        <div className="wd-visual-ex">
				<div className="border">
					<h3>Essay Structure</h3>
					<p>
					Effective essays are organized into a clear introduction, body paragraphs, and conclusion. Each section has a purpose: the introduction introduces the topic and thesis, body paragraphs support the thesis with evidence, and the conclusion summarizes key points while reinforcing the argument.
					</p>
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
            {String.raw`<div class="border">
   <h3>Essay Structure</h3>
   <p>Effective essays are organized into a clear introduction, body paragraphs, and...</p>
</div>`}
            </code>
          </pre>
        </div>
				)}
      </div>
    </section>
  );
}
