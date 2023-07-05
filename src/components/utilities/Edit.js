import { useRef, useState } from 'react';

export default function Edit() {
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
      <section className="wd-content" id="toc-edit">
        <h2 id="edit" className="section-top">Edit</h2>
        <p>Use <span className="wd-monospace">.edit</span> on any text element to color the text red. Note: This is used to leave notes for others and will be removed prior to cloning.</p>
        <div className="wd-window">
          <div className="wd-visual-ex">
            <p className="edit">Some text to help display an edit note.</p>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<p class="edit">Some text to help display an edit note.</p>`}
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