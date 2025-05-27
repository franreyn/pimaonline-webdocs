import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";
import Image from "next/image";

hljs.registerLanguage("html", html);

export default function LargeText() {
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
      <section className="wd-content" id="toc-large-text">
        <h3 id="large-text" className="section-top anchor">Large Text</h3>
        <p>Use <span className="wd-monospace">large-text</span> to add the large text view option to your course shell. This gives students the option to toggle on a version of the webpage that increases the font sizes (without zooming the entire viewport).</p>
				<div className="wd-window">
					<div className="wd-btn-container">
						<button
						className="wd-toggle-btn"	onClick={() => setShowCode(!showCode)}>
						{showCode ? "Hide code" : "Show code"}
					</button>
					{showCode && (
					<button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
					)}          </div>
					{showCode && (
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<body large-text>`}
              </code>
            </pre>
          </div>
					)}
          </div>
					<br/>
				<div className="wd-visual-ex">
        <section className="wd-side-by-side">
        <div className="wd-side-by-side-item">
         <Image src="/images/plugins/VO-large.jpg" alt="" width={292} height={280} priority="true"  />
          </div>
          <div className="wd-side-by-side-item">
          <Image src="/images/plugins/VO-large-on.jpg" alt="" width={292} height={280} />
          </div>
          </section>
          </div>

      </section>
    </>
  )
}