import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";
import Image from "next/image";

export default function AnimationLibrary() {
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
      <section className="wd-content" id="toc-animation-library">
        <h3>Fade-in content animation</h3>
        <p>The fade-in class added to the <span className="wd-monospace">&lt;h2&gt;</span> and <span className="wd-monospace">&lt;p&gt;</span> elements will fade-in the elements when users scroll to it.</p>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <Image src="/images/plugins/animation-library/fade-in.webp" alt="" width={400} height={200} />
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open fade-in">Module Introduction</h2>
<p class="fade-in">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
        </div>
        <h3>Slide-in content animation</h3>
        <p>Slide-in classes will slide-in the elements when users scroll to it. Elements can slide in from either left, right, top or bottom. The animation can either be more pronounced (i.e. slide-left-offscreen) or more subtle (i.e. slide-left-subtle).</p>
        <h4><span className="wd-monospace">slide-left-offscreen</span></h4>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <Image src="/images/plugins/animation-library/slide-left-offscreen.webp" alt="" width={400} height={200} />
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-left-offscreen">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
        </div>
        <h4><span className="wd-monospace">slide-right-offscreen</span></h4>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <Image src="/images/plugins/animation-library/slide-right-offscreen.webp" alt="" width={400} height={200} />
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-right-offscreen">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
        </div>
        <h4><span className="wd-monospace">slide-top-offscreen</span></h4>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <Image src="/images/plugins/animation-library/slide-top-offscreen.webp" alt="" width={400} height={200} />
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-top-offscreen">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
        </div>
        <h4><span className="wd-monospace">slide-bottom-offscreen</span></h4>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <Image src="/images/plugins/animation-library/slide-bottom-offscreen.webp" alt="" width={400} height={200} />
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-bottom-offscreen">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
        </div>
        <h4><span className="wd-monospace">slide-left-subtle</span></h4>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <Image src="/images/plugins/animation-library/slide-left-subtle.webp" alt="" width={400} height={200} />
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-left-subtle">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
        </div>
        <h4><span className="wd-monospace">slide-right-subtle</span></h4>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <Image src="/images/plugins/animation-library/slide-right-subtle.webp" alt="" width={400} height={200} />
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-right-subtle">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
        </div>
        <h4><span className="wd-monospace">slide-top-subtle</span></h4>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <Image src="/images/plugins/animation-library/slide-top-subtle.webp" alt="" width={400} height={200} />
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-top-subtle">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
        </div>
        <h4><span className="wd-monospace">slide-bottom-subtle</span></h4>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <Image src="/images/plugins/animation-library/slide-bottom-subtle.webp" alt="" width={400} height={200} />
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-bottom-subtle">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
        </div>
        <h3>Button animations</h3>
        <p>The following classes can be added to buttons or links styled as buttons to make them more interactive.</p>
        <ul>
          <li><span className="wd-monospace">change-bg-color</span>: changes the background color of a button on hover</li>
          <li><span className="wd-monospace">slide-bg-color</span>: slides in a new background color on hover</li>
          <li><span className="wd-monospace">pulse-hover</span>: slightly increases the size of a button on hover</li>
          <li><span className="wd-monospace">click-shadow</span>: an inset shadow is added to a button when clicked</li>
          <li><span className="wd-monospace">hover-glow</span>: button has halo-like glow on hover</li>
          <li><span className="wd-monospace">rounded-bg-slide</span>: slides in a new background color on hover for rounded buttons</li>
          <li><span className="wd-monospace">parallel-outlines</span>: background color of a button turns transparent and outlines get added to the top and bottom</li>
          <li><span className="wd-monospace">outline</span>: background color turns transparent and outline is added</li>
        </ul>
        <div className="wd-window">
          <div className="wd-visual-ex">
            <a class="btn change-bg-color" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Change bg color</a>
            <a class="btn slide-bg-color" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Slide bg color</a>
            <a class="btn pulse-hover" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Pulse hover</a>
            <a class="btn click-shadow" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Click shadow</a>
            <a class="btn hover-glow" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Hover glow</a>
            <a class="btn rounded-bg-slide" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Rounded bg slide</a>
            <a class="btn parallel-outlines" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Parallel outlines</a>
            <a class="btn outline" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Outline</a>
          </div>
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
              {String.raw`// Change background color of button
<a class="btn change-bg-color" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Readings</a>

// Slide new background color in from left
<a class="btn slide-bg-color" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Readings</a>

// Button slightly increases in size on hover
<a class="btn pulse-hover" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Readings</a>

// Adds inset shadow to button when clicked
<a class="btn click-shadow" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Readings</a>

// Button has a halo-like glow on hover
<a class="btn hover-glow" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Readings</a>

// New background slides in from left for rounded buttons
<a class="btn rounded-bg-slide" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Readings</a>

//Background color turns transparent with outlines on top and bottom
<a class="btn parallel-outlines" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Readings</a>

// Background color turns transparent and button is outlined
<a class="btn outline" href="/d2l/common/dialogs/quickLink/quickLink.d2l?ou=608068&amp;type=content&amp;rcode=PIMA-3596885" target="_blank">Go to Readings</a>`}
              </code>
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}