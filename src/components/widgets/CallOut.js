export default function CallOut() {
  return (
    <section className="wd-content" id="toc-call-out">
      <h2 id="call-out" className="section-top">
        Call Out
      </h2>
      <p>
        Use <strong>Call Out</strong> to bring attention to any supplementary learning content. The content is contained within a colored background with an "Explore More" heading attached.
      </p>
      <p>
        Use <span className="monospace">.call-out</span> to wrap your paragraph element.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="call-out">
            <p>Some text to help display a caption.</p>
          </div>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html">
              <span className="display-block">{'<div class="call-out">'}</span>
              <span className="display-block">{'  <p>Some text to help display a caption.</p>'}</span>
              <span className="display-block">{'</div>'}</span>
            </code>
          </pre>
        </div>
        <div className="wd-btn-container">
          <button className="wd-copy-btn">Copy code</button>
        </div>
      </div>
    </section>
  );
}
