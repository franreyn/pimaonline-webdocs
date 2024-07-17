import { useRef, useState } from 'react';

export default function Tabs() {
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
    <section className="wd-content" id="toc-tabs">
      <h2 id="tabs" className="section-top anchor">
        Tabs
      </h2>
      <p>
        Use the <strong>Tabs Widget</strong> to organize and separate related information into their own individual tabs. Best used when there are multiple tabs.
      </p>
      <p>
        Use <span className="wd-monospace">.tabs</span> to wrap your entire tab widget. Use <span className="wd-monospace">&lt;label class="tab-header"&gt;Tab Title&lt;/label&gt;</span> to edit the title. <br />
        Use <span className="wd-monospace">&lt;div class="tab-panel"&gt; [content inside] &lt;/div&gt;</span> to edit what appears inside the tabs.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="tabs" role="region" aria-label="tab group 1">
            <input className="tab-input" type="radio" id="tab1" name="hint-group-1" aria-describedby="tabHeading1" />
            <label className="tab-header" htmlFor="tab1">
              <span>Tab Title 1</span>
            </label>
            <div className="tab-panel" tabIndex="0" id="tabHeading1">
              <h4>Tab 1 Heading Inside</h4>
              <p>
                Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.
              </p>
            </div>
            <input className="tab-input" type="radio" id="tab2" name="hint-group-1" aria-describedby="tabHeading2" />
            <label className="tab-header" htmlFor="tab2">
              <span>Tab Title 2</span>
            </label>
            <div className="tab-panel" tabIndex="0" id="tabHeading2">
              <h4>Tab 2 Heading Inside</h4>
              <p>
                Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.
              </p>
            </div>
            <input className="tab-input" type="radio" id="tab3" name="hint-group-1" aria-describedby="tabHeading3" />
            <label className="tab-header" htmlFor="tab3">
              <span>Tab Title 3</span>
            </label>
            <div className="tab-panel" tabIndex="0" id="tabHeading3">
              <h4>Tab 3 Heading Inside</h4>
              <p>
                Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.
              </p>
            </div>
            <input type="radio" id="tab4" name="hint-group-1" aria-describedby="tabHeading4" checked readOnly />
            <label className="tab-header hide-tab" htmlFor="tab4" title="Hide Panel">
              <span>Hide</span>
            </label>
            <div className="tab-panel hide-panel" tabIndex="0" aria-hidden="true" id="tabHeading4"></div>
          </div>
        </div>
        <div className="wd-btn-container">
          <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={codeRef}>
              {String.raw`<div class="tabs">
          <input/>
          <label>
            <span>Tab Title 1</span>
          </label>
          <div>
            <h4>Tab 1 Heading Inside</h4>
            <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
          </div>
          <input/>
          <label>
            <span>Tab Title 2</span>
          </label>
          <div>
            <h4>Tab 2 Heading Inside</h4>
            <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
          </div>
          <input/>
          <label>
            <span>Tab Title 3</span>
          </label>
          <div>
            <h4>Tab 3 Heading Inside</h4>
            <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>
          </div>
          <input/>
          <label>
            <span>Hide</span>
          </label>
          <div></div>
        </div>`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
