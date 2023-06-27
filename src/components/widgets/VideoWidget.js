export default function VideoWidget() {
  return (
    <section className="wd-content" id="toc-video-widget">
      <h2 id="video-widget" className="section-top">
        Video Widget
      </h2>
      <p>
        Use <strong>Video Widget</strong> to create a grid-like video gallery. In addition to the video, each video card can contain general information such as the title and duration of the video.
      </p>
      <p>
        Use <span className="monospace">&lt;div className="video-widget"&gt;&lt;/div&gt;</span> to wrap your content.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="video-widget">
            <div className="video-card">
              <h2>Review Video 01</h2>
              <div className="card-content">
                <h3>Il faut</h3>
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
        <div className="wd-html-code">
          <pre>
            <code className="language-html">
              <span className="display-block">{'<div class="video-widget">'}</span>
              <span className="display-block">{'  <div class="video-card">'}</span>
              <span className="display-block">{'    <h2>Review Video 01</h2>'}</span>
              <span className="display-block">{'    <div class="card-content">'}</span>
              <span className="display-block">{'      <h3>Il faut</h3>'}</span>
              <span className="display-block">{'      <p>(Video length: 3:50 minutes)</p>'}</span>
              <span className="display-block">{'      <div class="media-container">'}</span>
              <span className="display-block">{'        <div class="media-object">'}</span>
              <span className="display-block">{'          <iframe src="https://www.youtube.com/embed/rKV0Yl1Ir2g" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>'}</span>
              <span className="display-block">{'        </div>'}</span>
              <span className="display-block">{'      </div>'}</span>
              <span className="display-block">{'      <a class="btn ext" href="https://www.youtube.com/embed/rKV0Yl1Ir2g" target="_blank" rel="nonopener noopener">Watch on Youtube</a>'}</span>
              <span className="display-block">{'    </div>'}</span>
              <span className="display-block">{'  </div>'}</span>
              <span className="display-block">{'</div>'}</span>
              <span className="display-block">{'<div class="video-widget">'}</span>
              <span className="display-block">{'  <div class="video-card">'}</span>
              <span className="display-block">{'    <h2>Review Video 02</h2>'}</span>
              <span className="display-block">{'    <div class="card-content">'}</span>
              <span className="display-block">{'      <h3>Comparisons</h3>'}</span>
              <span className="display-block">{'      <p>(Video length: 2:34 minutes)</p>'}</span>
              <span className="display-block">{'      <div class="media-container">'}</span>
              <span className="display-block">{'        <div class="media-object">'}</span>
              <span className="display-block">{'          <iframe src="https://www.youtube.com/embed/dkCWThe7RuI" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>'}</span>
              <span className="display-block">{'        </div>'}</span>
              <span className="display-block">{'      </div>'}</span>
              <span className="display-block">{'      <a class="btn ext" href="https://www.youtube.com/embed/dkCWThe7RuI" target="_blank" rel="nonopener noopener">Watch on Youtube</a>'}</span>
              <span className="display-block">{'    </div>'}</span>
              <span className="display-block">{'  </div>'}</span>
              <span className="display-block">{'</div>'}</span>
              <span className="display-block">{'<div class="video-widget">'}</span>
              <span className="display-block">{'  <div class="video-card">'}</span>
              <span className="display-block">{'    <h2>Review Video 03</h2>'}</span>
              <span className="display-block">{'    <div class="card-content">'}</span>
              <span className="display-block">{'      <h3>Pronominal Verbs</h3>'}</span>
              <span className="display-block">{'      <p>(Video length: 5:14 minutes)</p>'}</span>
              <span className="display-block">{'      <div class="media-container">'}</span>
              <span className="display-block">{'        <div class="media-object">'}</span>
              <span className="display-block">{'          <iframe src="https://www.youtube.com/embed/7wUXSXZgNlU" title="YouTube video player?wmode=opaque" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" width="560" height="315" frameBorder="0"></iframe>'}</span>
              <span className="display-block">{'        </div>'}</span>
              <span className="display-block">{'      </div>'}</span>
              <span className="display-block">{'      <a class="btn ext" href="https://www.youtube.com/embed/7wUXSXZgNlU" target="_blank" rel="nonopener noopener">Watch on Youtube</a>'}</span>
              <span className="display-block">{'    </div>'}</span>
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
