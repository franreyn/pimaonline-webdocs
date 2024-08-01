import { useRef, useState } from "react";

export default function FontSizes() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");

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
    <>
      <section className="wd-content" id="toc-font-sizes">
        <h3 id="font-sizes" className="section-top anchor">Font Sizes</h3>
        <p>Use <span className="wd-monospace">.font-size-h3</span> to convert any text to the native size of our heading-3.</p>
        <p>Use <span className="wd-monospace">.font-size-h4</span> to convert any text to the native size of our heading-4.</p>
        <div className="wd-window">
          <div className="wd-visual-ex">
            <h2 className="font-size-h3">Some heading</h2>
            <h3 className="font-size-h4">Some heading</h3>
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<h2 class="font-size-h3">Some heading</h2>
<h3 class="font-size-h4">Some heading</h3>`}
              </code>
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}