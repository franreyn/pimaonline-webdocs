import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function VocabList() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");
  const [openIndexes, setOpenIndexes] = useState([]);
	const [showCode, setShowCode] = useState(false);

	useEffect(() => {
		if (showCode) {
			hljs.highlightElement(codeRef.current); 
		}
	}, [showCode]);

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
            <dt tabIndex="0" onClick={() => toggleAccordion(0)}>Thesis Statement</dt>
            <dd style={{ display: openIndexes.includes(0) ? "block" : "none" }}>A sentence that states the main argument or point of an essay.</dd>
            <dt tabIndex="0" onClick={() => toggleAccordion(1)}>Topic Sentence</dt>
            <dd style={{ display: openIndexes.includes(1) ? "block" : "none" }}>The first sentence in a paragraph that introduces its main idea.</dd>
            <dt tabIndex="0" onClick={() => toggleAccordion(2)}>Transition</dt>
            <dd style={{ display: openIndexes.includes(2) ? "block" : "none" }}>Words or phrases that connect ideas and ensure smooth flow between sentences and paragraphs.</dd>
          </dl>
        </div>
        <div className="wd-btn-container">
					<button
						className="wd-toggle-btn"	onClick={() => setShowCode(!showCode)}>
						{showCode ? "Hide code" : "Show code"}
					</button>
					{showCode && (
					<button className="wd-copy-btn" onClick={handleCopyCode}>
						{buttonText}
					</button>
					)}
        </div>
				{showCode && (
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={codeRef}>
              {String.raw`<dl class="vocab-list">
  <dt tabIndex="0">Thesis Statement</dt>
  <dd>A sentence that states the main argument or point of an essay...</dd>
  <dt tabIndex="0">Topic Sentence</dt>
  <dd>The first sentence in a paragraph that introduces its main idea...</dd>
  <dt tabIndex="0">Transition</dt>
  <dd>Words or phrases that connect ideas and ensure smooth flow between sentences and paragraphs...</dd>
</dl>`}
            </code>
          </pre>
        </div>
				)}
      </div>
    </section>
  );
}
