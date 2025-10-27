import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function FontSizes() {
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
    <>
      <section className="wd-content" id="toc-font-sizes">
        <h3 id="font-sizes" className="section-top anchor">Font Sizes</h3>
        <p>Use <span className="wd-monospace">.font-size-h3</span> to convert any text to the native size of our heading-3.</p>
        <p>Use <span className="wd-monospace">.font-size-h4</span> to convert any text to the native size of our heading-4.</p>
        <div className="wd-window">
          <div className="wd-visual-ex">
            <h2 className="font-size-h3">Some heading</h2>
            <h3 className="font-size-h4">Some heading</h3>
          </div>
          <div className="wd-btn-container">
					<button className="wd-toggle-btn"	onClick={() => setShowCode(!showCode)}>{showCode ? "Hide code" : "Show code"}</button>
					{showCode && (
					<button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
					)}   
					</div>
					{showCode && (
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<h2 class="font-size-h3">Some heading</h2>
<h3 class="font-size-h4">Some heading</h3>`}
              </code>
            </pre>
          </div>
					)}
        </div>
      </section>
    </>
  )
}