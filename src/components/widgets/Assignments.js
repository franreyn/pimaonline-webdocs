import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function Assignments() {
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
    <section className="wd-content" id="toc-assignments">
      <h2 id="assignments" className="section-top anchor">Assignments Widget</h2>
      <p>Use <strong>Assignments Widget</strong> to display each assignment in a unit or module as a card.</p>
      <p>Use <span className="wd-monospace">&lt;ul class="assignments-widget"&gt;&lt;/ul&gt;</span> to wrap your content.</p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <ul className="assignments-widget">
            <li className="assignment">
              <h3>Module 1 Readings</h3>
              <p>The readings in the list have interactive exercises that will help you determine if you are fully understanding the material.</p>
              <a className="btn" href="#" rel="noopener">Go to Readings</a>
            </li>
            <li className="assignment">
              <h3>Reading Review Activity</h3>
              <p>Rhetorical Analysis Review Activity</p>
              <a className="btn" href="#">Go to Activity</a>
            </li>
            <li className="assignment">
              <h3>Mindful Reading Discussion 1A</h3>
              <p>Reading Fables</p>
              <a className="btn" href="#">Join Discussion</a>
            </li>
          </ul>
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
            {String.raw`<ul class="assignments-widget">
  <li class="assignment">
    <h3>Module 1 Readings</h3>
    <p>The readings in the list have interactive exercises that will help you...</p>
    <a class="btn" href="#">Go to Readings</a>
  </li>
  <li class="assignment">
    <h3>Reading Review Activity</h3>
    <p>Rhetorical Analysis Review Activity...</p>
    <a class="btn" href="#">Go to Activity</a>
  </li>
  <li class="assignment">
    <h3>Mindful Reading Discussion 1A</h3>
    <p>Reading Fables...</p>
    <a class="btn" href="#">Join Discussion</a>
  </li>
</ul>`}
            </code>
          </pre>
        </div>
				)}
      </div>
    </section>
  )
}
