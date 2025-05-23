import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function VocabCards() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");
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
        <ul className="vocab-cards">
          <li className="vocab">
            <dt>Thesis Statement</dt>
            <dd>A thesis statement is a concise summary of the main point or claim of an essay or research paper. It presents the central argument or purpose of the paper and is usually located at the end of the introduction.</dd>
          </li>
          <li className="vocab">
            <dt>Topic Sentence</dt>
            <dd>A topic sentence is the first sentence in a paragraph that introduces the main idea or theme of the paragraph. It sets the tone for the content that follows and helps to organize the paragraph’s structure.</dd>
          </li>
          <li className="vocab">
            <dt>Transition</dt>
            <dd>Transitions are words or phrases used to connect ideas and ensure a smooth flow between sentences and paragraphs. They help guide the reader through the text by indicating relationships between concepts and maintaining coherence.</dd>
          </li>
          <li className="vocab">
            <dt>Evidence</dt>
            <dd>Evidence refers to the facts, examples, or data used to support claims and arguments within a paper. It can include statistics, quotations, and research findings that substantiate the writer's position and strengthen their argument.</dd>
          </li>
          <li className="vocab">
            <dt>Counterargument</dt>
            <dd>A counterargument is an opposing viewpoint or objection to the main argument presented in an essay. Addressing counterarguments helps to demonstrate a thorough understanding of the topic and strengthens the credibility of the writer’s position.</dd>
          </li>
          <li className="vocab">
            <dt>Conclusion</dt>
            <dd>The conclusion is the final section of an essay or paper that summarizes the main points, restates the thesis, and provides closure. It often reflects on the significance of the argument and may suggest implications or future areas of research.</dd>
          </li>
          <li className="vocab">
            <dt>Coherence</dt>
            <dd>The quality of being logical and consistent in writing, where ideas are clearly connected and flow smoothly from one to the next.</dd>
          </li>
        </ul>
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
              {String.raw`<ul class="vocab-cards">
  <li class="vocab">
    <dt>Thesis Statement</dt>
    <dd>A thesis statement is a concise summary of the main point or claim of an essay or...</dd>
  </li>
  <li class="vocab">
    <dt>Topic Sentence</dt>
    <dd>A topic sentence is the first sentence in a paragraph that...</dd>
  </li>
  <li class="vocab">
    <dt>Transition</dt>
    <dd>Transitions are words or phrases used to connect ideas and...</dd>
  </li>
  <li class="vocab">
    <dt>Evidence</dt>
    <dd>Evidence refers to the facts, examples, or data used to...</dd>
  </li>
  <li class="vocab">
    <dt>Counterargument</dt>
    <dd>A counterargument is an opposing viewpoint or objection to...</dd>
  </li>
  <li class="vocab">
    <dt>Conclusion</dt>
    <dd>The conclusion is the final section of an essay or paper that...</dd>
  </li>
  <li class="vocab">
    <dt>Coherence</dt>
    <dd>The quality of being logical and consistent in writing, where...</dd>
  </li>
</ul>`}
            </code>
          </pre>
        </div>
				)}
      </div>
    </section>
  );
}
