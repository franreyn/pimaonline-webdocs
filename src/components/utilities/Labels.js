import { useRef, useState } from 'react';

export default function Labels() {
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
      <section className="wd-content" id="toc-labels">
        <h3 id="labels" className="section-top">Labels</h3>
        <p>Use <span className="wd-monospace">.label</span> to create a badge-like icon using any text.</p>
        <div className="wd-window">
          <div className="wd-visual-ex">
            <label className="label label-default">Default label</label>
            <label className="label label-muted">Muted label</label>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<label class="label label-default">Default label</label>
<label class="label label-muted">Muted label</label>`}
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