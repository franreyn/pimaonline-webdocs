import { useRef, useState } from 'react';

export default function VocabCards() {
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
    <section className="wd-content" id="toc-vocab-cards">
      <h2 className="section-top" id="vocab-cards-widget">Vocab Cards Widget</h2>
      <p>
        Use the <strong>Vocab Cards Widget</strong> to create a set of flashcards with terms and definitions.
      </p>
      <p>
        Use <code className="monospace">.vocab-cards</code> to wrap the vocabulary list. Use <code className="monospace">&lt;dt&gt;</code> tags for terms and <code className="monospace">&lt;dd&gt;</code> for definitions.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
        <dl className="vocab-cards">
          <div className="vocab">
            <dt>Perennial</dt>
            <dd>Perennial is used to describe things that exist or continue in the same way or state for a long time, as well as things that happen again and again.</dd>
          </div>
          <div className="vocab">
            <dt>Perennial</dt>
            <dd>Perennial is used to describe things that exist or continue in the same way or state for a long time, as well as things that happen again and again.</dd>
          </div>
          <div className="vocab">
            <dt>Perennial</dt>
            <dd>Perennial is used to describe things that exist or continue in the same way or state for a long time, as well as things that happen again and again.</dd>
          </div>
          <div className="vocab">
            <dt>Perennial</dt>
            <dd>Perennial is used to describe things that exist or continue in the same way or state for a long time, as well as things that happen again and again.</dd>
          </div>
          <div className="vocab">
            <dt>Perennial</dt>
            <dd>Perennial is used to describe things that exist or continue in the same way or state for a long time, as well as things that happen again and again.</dd>
          </div>
          <div className="vocab">
            <dt>Perennial</dt>
            <dd>Perennial is used to describe things that exist or continue in the same way or state for a long time, as well as things that happen again and again.</dd>
          </div>
          <div className="vocab">
            <dt>Perennial</dt>
            <dd>Perennial is used to describe things that exist or continue in the same way or state for a long time, as well as things that happen again and again.</dd>
          </div>
        </dl>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={codeRef}>
              {String.raw`<dl class="vocab-cards">
  <div class="vocab">
    <dt>Perennial</dt>
    <dd>Perennial is used to describe things that exist or continue in the same way or state for a long time, as well as things that happen again and again.</dd>
  </div>
  <div class="vocab">
    <dt>Perennial</dt>
    <dd>Perennial is used to describe things that exist or continue in the same way or state for a long time, as well as things that happen again and again.</dd>
  </div>
  <div class="vocab">
    <dt>Perennial</dt>
    <dd>Perennial is used to describe things that exist or continue in the same way or state for a long time, as well as things that happen again and again.</dd>
              </span>
  </div>
  <div class="vocab">
    <dt>Perennial</dt>
    <dd>Perennial is used to describe things that exist or continue in the same way or state for a long time, as well as things that happen again and again.</dd>
  </div>
  <div class="vocab">
    <dt>Perennial</dt>
    <dd>Perennial is used to describe things that exist or continue in the same way or state for a long time, as well as things that happen again and again.</dd>
  </div>
  <div class="vocab">
    <dt>Perennial</dt>
    <dd>Perennial is used to describe things that exist or continue in the same way or state for a long time, as well as things that happen again and again.</dd>
  </div>
  <div class="vocab">
    <dt>Perennial</dt>
    <dd>Perennial is used to describe things that exist or continue in the same way or state for a long time, as well as things that happen again and again.</dd>
  </div>
</dl>`}
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
