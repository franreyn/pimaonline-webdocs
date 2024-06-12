import { useRef, useState } from 'react';

export default function Lead() {
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
      <section className="wd-content" id="toc-lead">
        <h3 id="lead" className="section-top">Lead</h3>
        <p>Add <span className="wd-monospace">.lead</span> to any paragraph element to make its text slightly larger. Use sparingly, lead paragraphs are great for introductory paragraphs but lose their magic if they are overused.</p>
        <div className="wd-window">
          <div className="wd-visual-ex">
            <p className="lead">Some text to help display a lead paragraph.</p>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<p class="lead">Some text to help display a lead paragraph.</p>`}
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