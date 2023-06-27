export default function Border() {
  return (
    <section className="wd-content" id="toc-border">
      <h2 id="border" className="section-top">
        Border
      </h2>
      <p>
        Use <strong>Border</strong> to bring attention to any piece of learning content. The content is contained within a subtly-colored background, making it ideal for learning objectives or any other content that needs to stand out.
      </p>
      <p>
        Use <span className="monospace">.border</span> to wrap your content. You may use a single element or multiple.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="border">
            <h3>Some heading</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html">
              <span className="display-block">{'<div class="border">'}</span>
              <span className="display-block">{'  <h3>Some example text to help display a border widget.</h3>'}</span>
              <span className="display-block">{'  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'}</span>
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
