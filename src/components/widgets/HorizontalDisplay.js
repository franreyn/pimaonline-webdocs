import { useRef, useState } from 'react';

export default function HorizontalDisplay() {
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
    <section className="wd-content" id="toc-horizontal-display">
      <h2 id="horizontal-display" className="section-top">
        Horizontal Display
      </h2>
      <p>
        Use <strong>Horizontal Display</strong> to display any content in an inline manner. This content will appear inline on desktops but will stack on smaller screens.
      </p>
      <p>
        Use <span className="wd-monospace">.horizontal-display</span> to wrap.
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
            <code className="language-html" ref={codeRef}>
              {String.raw`<div class="horizontal-display">
  <div>
    <img src="https://via.placeholder.com/200" alt="" />
  </div>
  <div>
    <img src="https://via.placeholder.com/200" alt="" />
  </div>
  <div>
    <img src="https://via.placeholder.com/200" alt="" />
  </div>
  <div>
    <img src="https://via.placeholder.com/200" alt="" />
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
