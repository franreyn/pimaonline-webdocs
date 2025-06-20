import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function FadeInAnimation() {
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
      <section className="wd-content" id="toc-fade-in-animation">
        <h3 id="fade-in-animation" className="section-top anchor">Fade-in content animation</h3>
        <p>The fade-in class added to the <span className="wd-monospace">&lt;h2&gt;</span> and <span className="wd-monospace">&lt;p&gt;</span> elements will fade-in the elements when users scroll to it.</p>
				<div className="wd-btn-container">
						<button
						className="wd-toggle-btn"	onClick={() => setShowCode(!showCode)}>
						{showCode ? "Hide code" : "Show code"}
					</button>
					{showCode && (
					<button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
					)}
          </div>
					{showCode && (
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open fade-in">Module Introduction</h2>
<p class="fade-in">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
					)}
					<br/>
				<div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <video width="640" height="360" controls>
              <source src="/images/plugins/animation-library/fade-in.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  )
}