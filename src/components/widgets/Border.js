import { useRef, useState } from 'react';

export default function Border() {
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
    <section className="wd-content" id="toc-border">
      <h2 id="border" className="section-top">
        Border
      </h2>
      <p>
        Use <strong>Border</strong> to bring attention to any piece of learning content. The content is contained within a subtly-colored background, making it ideal for learning objectives or any other content that needs to stand out.
      </p>
      <p>
        Use <span className="monospace">.border</span> to wrap your content. You may use a single element or multiple.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="border">
            <h3>Some heading</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={codeRef}>
            {String.raw`<div class="border">
  <h3>Some example text to help display a border widget.</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
