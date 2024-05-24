import { useRef, useState } from 'react';

export default function Monospace() {
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
      <section className="wd-content" id="toc-monospace">
        <h3 id="monospace" className="section-top">Monospace</h3>
        <p>Add <span className="wd-monospace">.monospace</span> to any text element to create monospaced text. Note: Changes the text's font.</p>
        <div className="wd-window">
          <div className="wd-visual-ex">
            <p className="monospace">Some monospaced text.</p>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<p class="monospace">Some monospaced text.</p>`}
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