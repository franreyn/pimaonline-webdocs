import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";
import Link from "next/link";

hljs.registerLanguage("html", html);

export default function RemixIcons() {

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
      <section className="wd-content anchor" id="toc-remix-icons">
        <div className="flex-heading">
          <h3>Remix Icons</h3>
          <Link href="https://remixicon.com/" target="_blank" className="color-link fa-arrow-up-right-from-square"></Link>
        </div>
        <p>Another library included in our Themepack is Remix Icons. You can find a full list of icons <Link href="https://remixicon.com/" target="_blank" className="color-link">here</Link>.</p>
        <p>To use a Remix Icon, add a class to a heading element. <em>Note: These icons have a prefix of "ri-".</em></p>
        <div className="wd-window">
          <div className="wd-visual-ex">
            <h3 className="ri-megaphone-fill">Welcome to English 101!</h3>
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
                {String.raw`<h3 class="ri-megaphone-fill">Welcome to English 101!</h3>`}
              </code>
            </pre>
          </div>
					)}
        </div>
      </section>
    </>
  )
}