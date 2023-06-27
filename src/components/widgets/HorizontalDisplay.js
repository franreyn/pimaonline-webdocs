export default function HorizontalDisplay() {
  return (
    <section className="wd-content" id="toc-horizontal-display">
      <h2 id="horizontal-display" className="section-top">
        Horizontal Display
      </h2>
      <p>
        Use <strong>Horizontal Display</strong> to display any content in an inline manner. This content will appear inline on desktops but will stack on smaller screens.
      </p>
      <p>
        Use <span className="monospace">.horizontal-display</span> to wrap.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="horizontal-display">
            <div>
              <img src="https://unsplash.it/id/1005/200/200" alt="" />
            </div>
            <div>
              <img src="https://unsplash.it/id/1015/200/200" alt="" />
            </div>
            <div>
              <img src="https://unsplash.it/id/1025/200/200" alt="" />
            </div>
            <div>
              <img src="https://unsplash.it/id/1035/200/200" alt="" />
            </div>
          </div>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html">
              <span className="display-block">{'<div class="horizontal-display">'}</span>
              <span className="display-block">{'  <div>'}</span>
              <span className="display-block">{'    <img src="https://via.placeholder.com/200" alt="" />'}</span>
              <span className="display-block">{'  </div>'}</span>
              <span className="display-block">{'  <div>'}</span>
              <span className="display-block">{'    <img src="https://via.placeholder.com/200" alt="" />'}</span>
              <span className="display-block">{'  </div>'}</span>
              <span className="display-block">{'  <div>'}</span>
              <span className="display-block">{'    <img src="https://via.placeholder.com/200" alt="" />'}</span>
              <span className="display-block">{'  </div>'}</span>
              <span className="display-block">{'  <div>'}</span>
              <span className="display-block">{'    <img src="https://via.placeholder.com/200" alt="" />'}</span>
              <span className="display-block">{'  </div>'}</span>
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
