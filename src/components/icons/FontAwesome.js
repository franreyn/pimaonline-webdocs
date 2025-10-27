import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";
import Link from "next/link";

hljs.registerLanguage("html", html);

export default function FontAwesome() {

  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");
	const [showCode, setShowCode] = useState(false);

	useEffect(() => {
		if (showCode) {
			hljs.highlightElement(codeRef.current); 
		}
	}, [showCode]);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

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
      <section className="wd-content anchor" id="toc-font-awesome">
        <div className="flex-heading">
          <h3>Font Awesome</h3>
          <Link href="https://fontawesome.com/icons" target="_blank" className="color-link fa-arrow-up-right-from-square"></Link>
        </div>
        <p>Over 2,000 free icons are available through Font Awesome. You can search by keyword or browser by category <Link href="https://fontawesome.com/icons" target="_blank" className="color-link">here</Link>.</p>
        <p>To use a Font Awesome Icon, add a class to a heading element. <em>Note: Instead of using the prefix "fa-", use the prefix "icon-".</em></p>
        <div className="wd-window">
          <div className="wd-visual-ex">
            <h3 className="fa-bullhorn">Module Objectives</h3>
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
                {String.raw`<h3 class="fa-bullhorn">Module Objectives</h3>`}
              </code>
            </pre>
          </div>
					)}
        </div>
      </section>
    </>
  )
}