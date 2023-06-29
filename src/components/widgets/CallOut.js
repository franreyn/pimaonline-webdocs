import { useRef, useState } from 'react';

export default function CallOut() {
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
            <code className="language-html" ref={codeRef}>
              {String.raw`<div class="call-out">
  <p>Some text to help display a caption.</p>
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
