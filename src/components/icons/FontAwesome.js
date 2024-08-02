import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";
import Link from "next/link";

export default function FontAwesome() {

  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");

  hljs.registerLanguage("html", html);
  useEffect(() => {
    hljs.highlightAll();
  }, []);

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
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<h3 class="fa-bullhorn">Module Objectives</h3>`}
              </code>
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}