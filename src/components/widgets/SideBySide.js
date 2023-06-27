export default function SideBySide() {
  return (
    <section className="wd-content" id="toc-side-by-side">
      <h2 id="side-by-side" className="section-top">
        Side-by-side
      </h2>
      <p>
        Use <strong>Side-by-side</strong> to display two horizontal containers that can contain any content.
      </p>
      <p>
        Use <span className="monospace">.side-by-side</span> as the parent element of two{' '}
        <span className="monospace">.side-by-side-item</span>.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="side-by-side">
            <div className="side-by-side-item">
              <img src="https://unsplash.it/300/300" alt="" />
            </div>
            <div className="side-by-side-item">
              <p>
                Some text used to describe the media object on the left hand side. Side-by-side is multipurpose, so
                feel free to mix and match text, videos and images.
              </p>
            </div>
          </div>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html">
              <span className="display-block">{'<div class="side-by-side">'}</span>
              <span className="display-block">{'  <div class="side-by-side-item">'}</span>
              <span className="display-block">{'    <img src="https://via.placeholder.com/300" alt="" />'}</span>
              <span className="display-block">{'  </div>'}</span>
              <span className="display-block">{'  <div class="side-by-side-item">'}</span>
              <span className="display-block">{'    <p>Some text used to describe the media object on the left hand side. Side-by-side is multipurpose, so feel free to mix and match text, videos and images.</p>'}</span>
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
