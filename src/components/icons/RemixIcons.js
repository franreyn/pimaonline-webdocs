import { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/night-owl.css';
import html from 'highlight.js/lib/languages/xml';
import Link from 'next/link';

export default function RemixIcons() {

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
      <section className="wd-content anchor" id="toc-remix-icons">
        <div className="flex-heading">
          <h3>Remix Icons</h3>
          <Link href="https://remixicon.com/" target="_blank" className="color-link fa-arrow-up-right-from-square"></Link>
        </div>
        <p>Another library included in our Themepack is Remix Icons. You can find a full list of icons <Link href="https://remixicon.com/" target="_blank" className="color-link">here</Link>.</p>
        <p>To use a Remix Icon, add a class to a heading element. <em>Note: These icons have a prefix of "ri-".</em></p>
        <div className="wd-window">
          <div className="wd-visual-ex">
            <h3 className="ri-star-fill">Welcome to English 101!</h3>
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<h3 class="ri-star-fill">Welcome to English 101!</h3>`}
              </code>
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}