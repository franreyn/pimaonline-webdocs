import { useRef, useState } from 'react';

export default function ImageGallery() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState('Copy code');

  const handleCopyCode = () => {
    const codeElement = codeRef.current;
    const range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    setButtonText('Copied!');

    setTimeout(() => {
      setButtonText('Copy code');
    }, 2000);
  };

  return (
    <section className="wd-content" id="toc-img-gallery">
      <h2 id="img-gallery" className="section-top">
        Image Gallery
      </h2>
      <p>
        Use <strong>Image Gallery</strong> to display images in a grid and allow users to expand the images.
      </p>
      <p>
        Use <span className="wd-monospace">&lt;div class="image-gallery"&gt;&lt;/div&gt;</span> to wrap your content.
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
            <code className="language-html" ref={codeRef}>
              {String.raw`<div class="image-gallery">
  <div class="gallery-wrapper">
    <div class="image-box">
      <img src="https://picsum.photos/id/1018/400/200" alt="" />
    </div>
    <div class="image-box">
      <img src="https://picsum.photos/id/1047/300/400" alt="" />
    </div>
    <div class="image-box">
      <img src="https://picsum.photos/id/1059/500/300" alt="" />
    </div>
    <div class="image-box">
      <img src="https://picsum.photos/id/119/500/300" alt="" />
    </div>
    <div class="image-box">
      <img src="https://picsum.photos/id/143/800/200" alt="" />
    </div>
  </div>
</div>`}
            </code>
          </pre>
        </div>
        <div className="wd-btn-container">
          <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
        </div>
      </div>
    </section>
  );
}
