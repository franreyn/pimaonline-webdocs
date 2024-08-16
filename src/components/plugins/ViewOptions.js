import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";
import Image from "next/image";

export default function ViewOptions() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");

  hljs.registerLanguage("html", html);
  useEffect(() => {
    hljs.highlightAll();
  }, []);

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
      <section className="wd-content" id="toc-view-options">
        <h3 id="view-options" className="section-top anchor">All View Options</h3>
        <p>Use <span className="wd-monospace">view-options</span> to automatically add all of the above view options to your course shell. This gives students the option to toggle any combination of dark mode, focus reader, large text, or narrow width versions of the webpage.</p>
        <div className="wd-visual-ex">
        <section className="wd-side-by-side">
        <div className="wd-side-by-side-item">
         <Image src="/images/plugins/VO-all-open.jpg" alt="" width={292} height={280} priority="true"  />
          </div>
          <div className="wd-side-by-side-item">
          <Image src="/images/plugins/VO-all-on.jpg" alt="" width={292} height={280} />
          </div>
          </section>
          </div>
          <div className="wd-window">
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`<body view-options>`}
              </code>
            </pre>
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
          </div>
      </section>
    </>
  )
}