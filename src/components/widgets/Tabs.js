export default function Tabs() {
  return (
    <section className="wd-content" id="toc-tabs-widget">
      <h2 id="tabs-widget" className="section-top">
        Tabs Widget
      </h2>
      <p>
        Use the <strong>Tabs Widget</strong> to organize and separate related information into their own individual tabs. Best used when there are multiple tabs.
      </p>
      <p>
        Use <span className="monospace">.tabs</span> to wrap your entire tab widget. Use <span className="monospace">&lt;label class="tab-header"&gt;Tab Title&lt;/label&gt;</span> to edit the title. <br />
        Use <span className="monospace">&lt;div class="tab-panel"&gt; [content inside] &lt;/div&gt;</span> to edit what appears inside the tabs.
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
            <input type="radio" id="tab4" name="hint-group-1" aria-describedby="tabHeading4" checked />
            <label className="tab-header hide-tab" htmlFor="tab4" title="Hide Panel">
              <span>Hide</span>
            </label>
            <div className="tab-panel hide-panel" tabIndex="0" aria-hidden="true" id="tabHeading4"></div>
          </div>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html">
              <span className="display-block">{'<div class="tabs" role="region" aria-label="tab group 1">'}</span>
              <span className="display-block">{'  <input class="tab-input" type="radio" id="tab1" name="hint-group-1" aria-describedby="tabHeading1" />'}</span>
              <span className="display-block">{'  <label class="tab-header" for="tab1">'}</span>
              <span className="display-block">{'    <span>Tab Title 1</span>'}
              {'  </label>'}</span>
              <span className="display-block">{'  <div class="tab-panel" tabindex="0" id="tabHeading1">'}</span>
              <span className="display-block">{'    <h4>Tab 1 Heading Inside</h4>'}</span>
              <span className="display-block">{'    <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>'}</span>
              <span className="display-block">{'  </div>'}</span>
              <span className="display-block">{'  <input class="tab-input" type="radio" id="tab2" name="hint-group-1" aria-describedby="tabHeading2" />'}</span>
              <span className="display-block">{'  <label class="tab-header" for="tab2">'}</span>
              <span className="display-block">{'    <span>Tab Title 2</span>'}</span>
              <span className="display-block">{'  </label>'}</span>
              <span className="display-block">{'  <div class="tab-panel" tabindex="0" id="tabHeading2">'}</span>
              <span className="display-block">{'    <h4>Tab 2 Heading Inside</h4>'}</span>
              <span className="display-block">{'    <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>'}</span>
              <span className="display-block">{'  </div>'}</span>
              <span className="display-block">{'  <input class="tab-input" type="radio" id="tab3" name="hint-group-1" aria-describedby="tabHeading3" />'}</span>
              <span className="display-block">{'  <label class="tab-header" for="tab3">'}</span>
              <span className="display-block">{'    <span>Tab Title 3</span>'}</span>
              <span className="display-block">{'  </label>'}</span>
              <span className="display-block">{'  <div class="tab-panel" tabindex="0" id="tabHeading3">'}</span>
              <span className="display-block">{'    <h4>Tab 3 Heading Inside</h4>'}</span>
              <span className="display-block">{'    <p>Some long text to demonstrate a tab widget. This text can be something as long as multiple paragraphs or as short as a couple of sentences.</p>'}</span>
              <span className="display-block">{'  </div>'}</span>
              <span className="display-block">{'  <input type="radio" id="tab4" name="hint-group-1" aria-describedby="tabHeading4" checked />'}</span>
              <span className="display-block">{'  <label class="tab-header hide-tab" for="tab4" title="Hide Panel">'}</span>
              <span className="display-block">{'    <span>Hide</span>'}</span>
              <span className="display-block">{'  </label>'}</span>
              <span className="display-block"></span>
              <span className="display-block">{'</div>'}</span>
            </code>
          </pre>
        </div>
        <div className="wd-btn-container">
          <button className="wd-copy-btn">Copy code</button>
        </div>
      </div>
    </section>
  );
}
