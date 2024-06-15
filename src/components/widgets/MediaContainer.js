import { useRef, useState } from 'react';

export default function MediaContainer() {
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
    <section className="wd-content" id="toc-media-container">
      <h2 id="media-container" className="section-top anchor">
        Media Container
      </h2>
      <p>
        Use <strong>Media Container</strong> to display any iframe with accompanying text or without.
      </p>
      <h3>With caption</h3>
      <p>
        Use <span className="wd-monospace">.media-container</span> as the parent element of both{' '}
        <span className="wd-monospace">.media-object</span> which will house your iframe and{' '}
        <span className="wd-monospace">.media-info</span> which will house your video's caption.
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
        <div className="wd-btn-container">
          <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={codeRef}>
              {String.raw`<div class="media-container">
  <div class="media-object">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rFve845ScJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div class="media-info">
    <p>Some text used to describe the media object.</p>
  </div>
</div>`}
            </code>
          </pre>
        </div>
      </div><br /><br />
      <h3>Without caption</h3>
      <p>
        Use <span className="wd-monospace">.media-container</span> as the parent element of{' '}
        <span className="wd-monospace">.media-object</span> which will house your iframe.
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
        <div className="wd-btn-container">
          <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={codeRef}>
              {String.raw`<div class="media-container">
  <div class="media-object">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rFve845ScJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
