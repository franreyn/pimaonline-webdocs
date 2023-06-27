export default function MediaContainer() {
  return (
    <section className="wd-content" id="toc-media-container">
      <h2 id="media-container" className="section-top">
        Media Container
      </h2>
      <p>
        Use <strong>Media Container</strong> to display any iframe with accompanying text or without.
      </p>
      <h3>With caption</h3>
      <p>
        Use <span className="monospace">.media-container</span> as the parent element of both{' '}
        <span className="monospace">.media-object</span> which will house your iframe and{' '}
        <span className="monospace">.media-info</span> which will house your video's caption.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="media-container">
            <div className="media-object">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rFve845ScJ4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="media-info">
              <p>Some text used to describe the media object.</p>
            </div>
          </div>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html">
              <span className="display-block">{'<div class="media-container">'}</span>
              <span className="display-block">{'  <div class="media-object">'}</span>
              <span className="display-block">{'    <iframe width="560" height="315" src="https://www.youtube.com/embed/rFve845ScJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}</span>
              <span className="display-block">{'  </div>'}</span>
              <span className="display-block">{'  <div class="media-info">'}</span>
              <span className="display-block">{'    <p>Some text used to describe the media object.</p>'}</span>
              <span className="display-block">{'  </div>'}</span>
              <span className="display-block">{'</div>'}</span>
            </code>
          </pre>
        </div>
        <div className="wd-btn-container">
          <button className="wd-copy-btn">Copy code</button>
        </div>
      </div>
      <h3>Without caption</h3>
      <p>
        Use <span className="monospace">.media-container</span> as the parent element of{' '}
        <span className="monospace">.media-object</span> which will house your iframe.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="media-container">
            <div className="media-object">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rFve845ScJ4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html">
              <span className="display-block">{'<div class="media-container">'}</span>
              <span className="display-block">{'  <div class="media-object">'}</span>
              <span className="display-block">{'    <iframe width="560" height="315" src="https://www.youtube.com/embed/rFve845ScJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}</span>
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
