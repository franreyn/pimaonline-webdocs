import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function VideoWidget() {
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
    <section className="wd-content" id="toc-video-widget">
      <h2 id="video-widget" className="section-top anchor">
        Video Widget
      </h2>
      <p>
        Use <strong>Video Widget</strong> to create a grid-like video gallery. In addition to the video, each video card can contain general information such as the title and duration of the video.
      </p>
      <p>
        Use <span className="wd-monospace">&lt;div className="video-widget"&gt;&lt;/div&gt;</span> to wrap your content.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="video-widget">
            <div className="video-card">
              <h2>Review Video 01</h2>
              <div className="card-content">
                <h3>Learn French</h3>
                <p>(Video length: 3:50 minutes)</p>
                <div className="media-container">
                  <div className="media-object">
                    <iframe src="https://www.youtube.com/embed/rKV0Yl1Ir2g" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
                  </div>
                </div>
                <a className="btn ext" href="https://www.youtube.com/embed/rKV0Yl1Ir2g" target="_blank" rel="nonopener noopener">Watch on Youtube</a>
              </div>
            </div>
            <div className="video-card">
              <h2>Review Video 02</h2>
              <div className="card-content">
                <h3>Comparisons</h3>
                <p>(Video length: 2:34 minutes)</p>
                <div className="media-container">
                  <div className="media-object">
                    <iframe src="https://www.youtube.com/embed/dkCWThe7RuI" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
                  </div>
                </div>
                <a className="btn ext" href="https://www.youtube.com/embed/dkCWThe7RuI" target="_blank" rel="nonopener noopener">Watch on Youtube</a>
              </div>
            </div>
            <div className="video-card">
              <h2>Review Video 03</h2>
              <div className="card-content">
                <h3>Pronominal Verbs</h3>
                <p>(Video length: 5:14 minutes)</p>
                <div className="media-container">
                  <div className="media-object">
                    <iframe src="https://www.youtube.com/embed/7wUXSXZgNlU" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
                  </div>
                </div>
                <a className="btn ext" href="https://www.youtube.com/embed/7wUXSXZgNlU" target="_blank" rel="nonopener noopener">Watch on Youtube</a>
              </div>
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
              {String.raw`<div class="video-widget">
  <div class="video-card">
    <h2>Review Video 01</h2>
    <div class="card-content">
      <h3>Learn French</h3>
      <p>(Video length: 3:50 minutes)</p>
      <div class="media-container">
        <div class="media-object">
          <iframe src="https://www.youtube.com/embed/rKV0Yl1Ir2g" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
        </div>
      </div>
      <a class="btn ext" href="https://www.youtube.com/embed/rKV0Yl1Ir2g" target="_blank" rel="nonopener noopener">Watch on Youtube</a>
    </div>
  </div>
  <div class="video-card">
    <h2>Review Video 02</h2>
    <div class="card-content">
      <h3>Comparisons</h3>
      <p>(Video length: 2:34 minutes)</p>
      <div class="media-container">
        <div class="media-object">
          <iframe src="https://www.youtube.com/embed/dkCWThe7RuI" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
        </div>
      </div>
      <a class="btn ext" href="https://www.youtube.com/embed/dkCWThe7RuI" target="_blank" rel="nonopener noopener">Watch on Youtube</a>
    </div>
  </div>
  <div class="video-card">
    <h2>Review Video 03</h2>
    <div class="card-content">
      <h3>Pronominal Verbs</h3>
      <p>(Video length: 5:14 minutes)</p>
      <div class="media-container">
        <div class="media-object">
          <iframe src="https://www.youtube.com/embed/7wUXSXZgNlU" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>
        </div>
      </div>
      <a class="btn ext" href="https://www.youtube.com/embed/7wUXSXZgNlU" target="_blank" rel="nonopener noopener">Watch on Youtube</a>
    </div>
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
