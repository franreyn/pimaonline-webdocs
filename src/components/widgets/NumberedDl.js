import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function NumberedDl() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    if (showCode && codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [showCode]);

  const handleCopyCode = async () => {
    if (!codeRef.current) return;
    try {
      await navigator.clipboard.writeText(codeRef.current.textContent);
      setButtonText("Copied!");
      setTimeout(() => setButtonText("Copy code"), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
      setButtonText("Failed to copy");
    }
  };

  return (
    <section className="wd-content" id="toc-numbered-dl">
      <h2 className="section-top anchor" id="numbered-dl">
        Numbered DL
      </h2>
      <p>
        Use the <strong>Numbered DL Widget</strong> to create an automatically
        numbered definition list.
      </p>
      <p>
        Use <span className="wd-monospace">.numbered-list</span> on a{" "}
        <span className="wd-monospace">&lt;dl&gt;</span> element. Use{" "}
        <span className="wd-monospace">&lt;dt&gt;</span> tags for terms and{" "}
        <span className="wd-monospace">&lt;dd&gt;</span> for definitions.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <dl className="numbered-list">
            <dt>Thesis Statement</dt>
            <dd>
              A sentence that states the main argument or point of an essay.
            </dd>
            <dt>Topic Sentence</dt>
            <dd>
              The first sentence in a paragraph that introduces its main idea.
            </dd>
            <dt>Transition</dt>
            <dd>
              Words or phrases that connect ideas and ensure smooth flow between
              sentences and paragraphs.
            </dd>
          </dl>
        </div>
        <div className="wd-btn-container">
          <button
            className="wd-toggle-btn"
            onClick={() => setShowCode(!showCode)}
          >
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
                {String.raw`<dl class="numbered-list">
  <dt>Thesis Statement</dt>
  <dd>A sentence that states the main argument or point of an essay.</dd>
  <dt>Topic Sentence</dt>
  <dd>The first sentence in a paragraph that introduces its main idea.</dd>
  <dt>Transition</dt>
  <dd>Words or phrases that connect ideas and ensure smooth flow...</dd>
</dl>`}
              </code>
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}
