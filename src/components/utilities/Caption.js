import { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/night-owl.css';
import html from 'highlight.js/lib/languages/xml';

export default function Caption() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState('Copy code');

  hljs.registerLanguage('html', html);
  useEffect(() => {
    hljs.highlightAll();
  }, []);

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
      <section className="wd-content" id="toc-caption">
        <h3 id="caption" className="section-top">Caption</h3>
        <p>Use <span className="wd-monospace">.caption</span> to style text as a caption. This makes the text lighter, gray, and smaller.</p>
        <div className="wd-window">
          <div className="wd-visual-ex">
            <p className="caption">Some text to help display a caption</p>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<p class="caption">Some text to help display a caption</p>`}
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