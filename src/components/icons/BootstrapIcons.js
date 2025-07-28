import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";
import Link from "next/link";

hljs.registerLanguage("html", html);

export default function BootstrapIcons() {

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
      <section className="wd-content anchor" id="toc-bootstrap-icons">
        <div className="flex-heading">
          <h3>Bootstrap Icons</h3>
          <Link href="https://icons.getbootstrap.com/" target="_blank" className="color-link fa-arrow-up-right-from-square"></Link>
        </div>
        <p>Bootstrap Icons is also a great option with plenty of icons to choose from. You can browse through the icons <Link href="https://icons.getbootstrap.com/" target="_blank" className="color-link">here</Link>.</p>
        <p>Like Font Awesome, you can add an icon's class to a heading. <em>Note: The prefix for Bootstrap icons is "bi-".</em></p>
        <div className="wd-window">
          <div className="wd-visual-ex">
            <h3 className="bi-megaphone-fill">Week 1 Assignments</h3>
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
                {String.raw`<h3 class="bi-megaphone-fill">Week 1 Assignments</h3>`}
              </code>
            </pre>
          </div>
					)}
        </div>
      </section>
    </>
  )
}