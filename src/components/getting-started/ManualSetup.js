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
      <section className="wd-content" id="toc-manual-setup">
        <h2 id="manual-setup" className="section-top anchor">Manual Setup</h2>
        <p>For a more custom approach, follow these steps to manually install the template system.</p>
        <div className='wd-subitems'>
        <h3>CSS</h3>
        <p>Include the stylesheet by copying the code below and adding it in <span className="wd-monospace">&lt;head&gt;</span> before all other stylesheets.</p>
        <div className="wd-window">
        <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/css/themes/cards/styles.css">`}
              </code>
            </pre>
          </div>
        </div>
        <br />
        <br />
        <h3>jQuery</h3>
        <p>Include jQuery by adding the following code immediately before scripts2.js.</p>
        <div className="wd-window">
        <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js" defer></script>`}
              </code>
            </pre>
          </div>
        </div>
        <br />
        <br />
        <h3>JS</h3>
        <p>Include the scripts2.js file by adding the following code in <span className="wd-monospace">&lt;head&gt;</span> immediately after the stylesheets.</p>
        <div className="wd-window">
        <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer></script>`}
              </code>
            </pre>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}