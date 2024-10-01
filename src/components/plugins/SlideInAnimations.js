import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";

export default function SlideInAnimations() {
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
      <section className="wd-content" id="toc-slide-in-animations">
        <h3 id="slide-in-animations" className="section-top anchor">Slide-in content animations</h3>
        <p>Slide-in classes will slide-in the elements when users scroll to it. Elements can slide in from either left, right, top or bottom. The animation can either be more pronounced (i.e. slide-left-offscreen) or more subtle (i.e. slide-left-subtle).</p>
        <h4><span className="wd-monospace">slide-left-offscreen</span></h4>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <video width="640" height="360" controls>
              <source src="/images/plugins/animation-library/slide-left-offscreen.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-left-offscreen">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
        </div>
        <h4><span className="wd-monospace">slide-right-offscreen</span></h4>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <video width="640" height="360" controls>
              <source src="/images/plugins/animation-library/slide-right-offscreen.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-right-offscreen">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
        </div>
        <h4><span className="wd-monospace">slide-top-offscreen</span></h4>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <video width="640" height="360" controls>
              <source src="/images/plugins/animation-library/slide-top-offscreen.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-top-offscreen">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
        </div>
        <h4><span className="wd-monospace">slide-bottom-offscreen</span></h4>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <video width="640" height="360" controls>
              <source src="/images/plugins/animation-library/slide-bottom-offscreen.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-bottom-offscreen">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
        </div>
        <h4><span className="wd-monospace">slide-left-subtle</span></h4>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <video width="640" height="360" controls>
              <source src="/images/plugins/animation-library/slide-left-subtle.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-left-subtle">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
        </div>
        <h4><span className="wd-monospace">slide-right-subtle</span></h4>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <video width="640" height="360" controls>
              <source src="/images/plugins/animation-library/slide-right-subtle.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-right-subtle">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
        </div>
        <h4><span className="wd-monospace">slide-top-subtle</span></h4>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <video width="640" height="360" controls>
              <source src="/images/plugins/animation-library/slide-top-subtle.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-top-subtle">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
        </div>
        <h4><span className="wd-monospace">slide-bottom-subtle</span></h4>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <video width="640" height="360" controls>
              <source src="/images/plugins/animation-library/slide-bottom-subtle.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-bottom-subtle">Lorem ipsum dolor...</p>`}
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