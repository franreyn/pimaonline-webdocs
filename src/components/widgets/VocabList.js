export default function VocabList() {
  return (
    <section className="wd-content" id="toc-vocab-list">
      <h2 className="section-top" id="vocab-list-widget">Vocab List Widget</h2>
      <p>
        Use the <strong>Vocab List Widget</strong> to create a list of collapsible vocabulary items with terms and definitions.
      </p>
      <p>
        Use <code className="monospace">.vocab-list</code> to wrap the vocabulary list. Use <code className="monospace">&lt;dt&gt;</code> tags for terms and <code className="monospace">&lt;dd&gt;</code> for definitions.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <dl className="vocab-list">
            <button>Close All</button>
            <dt tabIndex="0">Term 1</dt>
            <dd>Term Definition 1</dd>
            <dt tabIndex="0">Term 2</dt>
            <dd>Term Definition 2</dd>
            <dt tabIndex="0">Term 3</dt>
            <dd>Term Definition 3</dd>
          </dl>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html">
              <span className="display-block">{'<dl class="vocab-list">'}</span>
              <span className="display-block">{'  <button>Close All</button>'}</span>
              <span className="display-block">{'  <dt tabIndex="0">Term 1</dt>'}</span>
              <span className="display-block">{'  <dd>Term Definition 1</dd>'}</span>
              <span className="display-block">{'  <dt tabIndex="0">Term 2</dt>'}</span>
              <span className="display-block">{'  <dd>Term Definition 2</dd>'}</span>
              <span className="display-block">{'  <dt tabIndex="0">Term 3</dt>'}</span>
              <span className="display-block">{'  <dd>Term Definition 3</dd>'}</span>
              <span className="display-block">{'</dl>'}</span>
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
