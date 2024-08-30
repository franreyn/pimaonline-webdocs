import { useRef, useState } from "react";

export default function VocabList() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleCopyCode = () => {
    const codeElement = codeRef.current;
    const range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    setButtonText("Copied!");

    setTimeout(() => {
      setButtonText("Copy code");
    }, 2000);
  };

  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const closeAll = () => {
    setOpenIndexes([]);
  };

  return (
    <section className="wd-content" id="toc-vocab-list">
      <h2 className="section-top anchor" id="vocab-list">Vocab List</h2>
      <p>
        Use the <strong>Vocab List Widget</strong> to create a list of collapsible vocabulary items with terms and definitions.
      </p>
      <p>
        Use <span className="wd-monospace">.vocab-list</span> to wrap the vocabulary list. Use <span className="wd-monospace">&lt;dt&gt;</span> tags for terms and <span className="wd-monospace">&lt;dd&gt;</span> for definitions.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <dl className="vocab-list">
            <button onClick={closeAll}>Close All</button>
            <dt tabIndex="0" onClick={() => toggleAccordion(0)}>Term 1</dt>
            <dd style={{ display: openIndexes.includes(0) ? "block" : "none" }}>Term Definition 1</dd>
            <dt tabIndex="0" onClick={() => toggleAccordion(1)}>Term 2</dt>
            <dd style={{ display: openIndexes.includes(1) ? "block" : "none" }}>Term Definition 2</dd>
            <dt tabIndex="0" onClick={() => toggleAccordion(2)}>Term 3</dt>
            <dd style={{ display: openIndexes.includes(2) ? "block" : "none" }}>Term Definition 3</dd>
          </dl>
        </div>
        <div className="wd-btn-container">
          <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={codeRef}>
              {String.raw`<dl class="vocab-list">
  <dt tabIndex="0">Term 1</dt>
  <dd>Term Definition 1</dd>
  <dt tabIndex="0">Term 2</dt>
  <dd>Term Definition 2</dd>
  <dt tabIndex="0">Term 3</dt>
  <dd>Term Definition 3</dd>
</dl>`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
