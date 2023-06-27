export default function ImageGallery() {
  return (
    <section className="wd-content" id="toc-img-gallery">
      <h2 id="img-gallery" className="section-top">
        Image Gallery
      </h2>
      <p>
        Use <strong>Image Gallery</strong> to display images in a grid and allow users to expand the images.
      </p>
      <p>
        Use <span className="monospace">&lt;div class="image-gallery"&gt;&lt;/div&gt;</span> to wrap your content.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="image-gallery">
            <div className="gallery-wrapper">
              <div className="image-box">
                <img src="https://picsum.photos/id/1018/400/200" alt="" />
              </div>
              <div className="image-box">
                <img src="https://picsum.photos/id/1047/300/400" alt="" />
              </div>
              <div className="image-box">
                <img src="https://picsum.photos/id/1059/500/300" alt="" />
              </div>
              <div className="image-box">
                <img src="https://picsum.photos/id/119/500/300" alt="" />
              </div>
              <div className="image-box">
                <img src="https://picsum.photos/id/143/800/200" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html">
              <span className="display-block">{'<div class="image-gallery">'}</span>
              <span className="display-block">{'  <div class="gallery-wrapper">'}</span>
              <span className="display-block">{'    <div class="image-box">'}</span>
              <span className="display-block">{'      <img src="https://picsum.photos/id/1018/400/200" alt="" />'}</span>
              <span className="display-block">{'    </div>'}</span>
              <span className="display-block">{'    <div class="image-box">'}</span>
              <span className="display-block">{'      <img src="https://picsum.photos/id/1047/300/400" alt="" />'}</span>
              <span className="display-block">{'    </div>'}</span>
              <span className="display-block">{'    <div class="image-box">'}</span>
              <span className="display-block">{'      <img src="https://picsum.photos/id/1059/500/300" alt="" />'}</span>
              <span className="display-block">{'    </div>'}</span>
              <span className="display-block">{'    <div class="image-box">'}</span>
              <span className="display-block">{'      <img src="https://picsum.photos/id/119/500/300" alt="" />'}</span>
              <span className="display-block">{'    </div>'}</span>
              <span className="display-block">{'    <div class="image-box">'}</span>
              <span className="display-block">{'      <img src="https://picsum.photos/id/143/800/200" alt="" />'}</span>
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
