import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function CardHorizontal() {
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
    <section className="wd-content" id="toc-card-horizontal">
      <h2 id="card-horizontal" className="section-top anchor">
        Card Horizontal
      </h2>
      <p>
        Use <strong>Card Horizontal</strong> to display an image with supportive text. Both the image and text display horizontally with the text side displaying wider than the image.
      </p>
      <p>
        Use <span className="wd-monospace">.card-horizontal</span> as the parent element of both <span className="wd-monospace">.card-body</span>, which contains the text, and <br /> <span className="wd-monospace">.card-img</span>, which contains the image.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="card-horizontal">
            <div className="card-body">
              <p>
							Writing an effective essay requires clear organization and purpose. The introduction presents the topic, while body paragraphs develop key points with supporting evidence. Finally, the conclusion ties everything together, reaffirming the thesis. Proper transitions between sections ensure a logical flow of ideas, guiding the reader through the argument.
              </p>
            </div>
            <div className="card-img">
              <img src="https://unsplash.it/300/300" alt="" />
            </div>
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
              {String.raw`<div class="card-horizontal">
  <div class="card-body">
    <p>Writing an effective essay requires clear organization and purpose. The introduction presents the topic, while...</p>
  </div>
  <div class="card-img">
    <img src="https://via.placeholder.com/300" alt="" />
  </div>
</div>`}
            </code>
          </pre>
        </div>
				)}
      </div>
    </section>
  );
}
