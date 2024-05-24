import { useRef, useState } from 'react';

export default function Highlight() {
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
    <>
      <section className="wd-content" id="toc-highlight">
        <h3 id="highlight" className="section-top">Highlight</h3>
        <p>Use <span className="wd-monospace">.highlight</span> to give a background color to your text, similar to highlighting text, to any word or group of words.</p>
        <div className="wd-window">
          <div className="wd-visual-ex">
            <span className="highlight">Some highlighted text.</span>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<span className="highlight">Some highlighted text.</span>`}
              </code>
            </pre>
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
        </div>
      </section>
    </>
  )
}