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
      <h2 className="section-top anchor" id="vocab-cards">Vocab Cards</h2>
      <p>
        Use the <strong>Vocab Cards Widget</strong> to create a set of flashcards with terms and definitions.
      </p>
      <p>
        Use <span className="wd-monospace">.vocab-cards</span> to wrap the vocabulary list. Use <span className="wd-monospace">&lt;dt&gt;</span> tags for terms and <span className="wd-monospace">&lt;dd&gt;</span> for definitions.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
        <dl className="vocab-cards">
          <div className="vocab">
            <dt>Perennial</dt>
            <dd>Perennial is used to describe things that exist or continue in the same way or state for a long time, as well as things that happen again and again.</dd>
          </div>
          <div className="vocab">
            <dt>Evergreen</dt>
            <dd>Refers to plants that retain their green leaves throughout the year, regardless of the changing seasons. These plants are often associated with perennials due to their continuous growth and appearance.</dd>
          </div>
          <div className="vocab">
            <dt>Sustained</dt>
            <dd>Maintained or continued over an extended period of time. Perennials are known for their sustained growth and presence in a garden or landscape.</dd>
          </div>
          <div className="vocab">
            <dt>Cyclical</dt>
            <dd>Recurring in cycles or periods, often following a regular pattern. Perennials are part of the cyclical nature of plants, coming back each year as part of their life cycle.</dd>
          </div>
          <div className="vocab">
            <dt>Enduring</dt>
            <dd>Something that is able to last or persist for a long time, showing resilience and lasting quality. Perennial plants are often seen as enduring due to their ability to return year after year.</dd>
          </div>
          <div className="vocab">
            <dt>Unfading</dt>
            <dd>Something that does not lose its color, brilliance, or quality; remaining constant and vibrant. Perennials can be considered unfading due to their consistent return and appearance.</dd>
          </div>
          <div className="vocab">
            <dt>Perpetual</dt>
            <dd>Continuing indefinitely or indefinitely recurring. The concept of perennials aligns with the idea of perpetuality, as these plants come back year after year in an ongoing cycle.</dd>
          </div>
        </dl>
        </div>
        <div className="wd-btn-container">
          <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
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
    <dt>Evergreen</dt>
    <dd>Refers to plants that retain their green leaves throughout the year, regardless of the changing seasons. These plants are often associated with perennials due to their continuous growth and appearance.</dd>
  </div>
  <div class="vocab">
    <dt>Sustained</dt>
    <dd>Maintained or continued over an extended period of time. Perennials are known for their sustained growth and presence in a garden or landscape.</dd>
  </div>
  <div class="vocab">
    <dt>Cyclical</dt>
    <dd>Recurring in cycles or periods, often following a regular pattern. Perennials are part of the cyclical nature of plants, coming back each year as part of their life cycle.</dd>
  </div>
  <div class="vocab">
    <dt>Enduring</dt>
    <dd>Something that is able to last or persist for a long time, showing resilience and lasting quality. Perennial plants are often seen as enduring due to their ability to return year after year.</dd>
  </div>
  <div class="vocab">
    <dt>Unfading</dt>
    <dd>Something that does not lose its color, brilliance, or quality; remaining constant and vibrant. Perennials can be considered unfading due to their consistent return and appearance.</dd>
  </div>
  <div class="vocab">
    <dt>Perpetual</dt>
    <dd>Continuing indefinitely or indefinitely recurring. The concept of perennials aligns with the idea of perpetuality, as these plants come back year after year in an ongoing cycle.</dd>
  </div>
</dl>`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
