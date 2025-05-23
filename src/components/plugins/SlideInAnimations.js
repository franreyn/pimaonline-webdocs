import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function SlideInAnimations() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");
	const slideLeftOffRef = useRef(null);
	const [showSlideLeftOff, setSlideLeftOff] = useState(false);
	const slideRightOffRef = useRef(null);
	const [showSlideRightOff, setSlideRightOff] = useState(false);
	const slideTopOffRef = useRef(null);
	const [showSlideTopOff, setSlideTopOff] = useState(false);
	const slideBottomOffRef = useRef(null);
	const [showSlideBottomOff, setSlideBottomOff] = useState(false);
	const slideLeftSubtleRef = useRef(null);
	const [showSlideLeftSubtle, setSlideLeftSubtle] = useState(false);
	const slideRightSubtleRef = useRef(null);
	const [showSlideRightSubtle, setSlideRightSubtle] = useState(false);
	const slideTopSubtleRef = useRef(null);
	const [showSlideTopSubtle, setSlideTopSubtle] = useState(false);
	const slideBottomSubtleRef = useRef(null);
	const [showSlideBottomSubtle, setSlideBottomSubtle] = useState(false);

  useEffect(() => {
    if (showSlideLeftOff) {
      hljs.highlightElement(slideLeftOffRef.current);
    }
  }, [showSlideLeftOff]);

	useEffect(() => {
    if (showSlideRightOff) {
      hljs.highlightElement(slideRightOffRef.current);
    }
  }, [showSlideRightOff]);

	useEffect(() => {
    if (showSlideTopOff) {
      hljs.highlightElement(slideTopOffRef.current);
    }
  }, [showSlideTopOff]);

	useEffect(() => {
    if (showSlideBottomOff) {
      hljs.highlightElement(slideBottomOffRef.current);
    }
  }, [showSlideBottomOff]);

	useEffect(() => {
    if (showSlideLeftSubtle) {
      hljs.highlightElement(slideLeftSubtleRef.current);
    }
  }, [showSlideLeftSubtle]);

	useEffect(() => {
    if (showSlideRightSubtle) {
      hljs.highlightElement(slideRightSubtleRef.current);
    }
  }, [showSlideRightSubtle]);

	useEffect(() => {
    if (showSlideTopSubtle) {
      hljs.highlightElement(slideTopSubtleRef.current);
    }
  }, [showSlideTopSubtle]);

	useEffect(() => {
    if (showSlideBottomSubtle) {
      hljs.highlightElement(slideBottomSubtleRef.current);
    }
  }, [showSlideBottomSubtle]);
  
  useEffect(() => {
    hljs.highlightAll();
  }, []);

	const handleCopyCode = (ref) => {
		const codeElement = ref.current;
		if (!codeElement) return;
	
		const range = document.createRange();
		range.selectNode(codeElement);
		const selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(range);
		document.execCommand("copy");
		selection.removeAllRanges();
	
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
        <h4>Slide Left Offscreen</h4>
				<p>Use the class: <span className="wd-monospace">slide-left-offscreen</span></p>
				<div className="wd-btn-container">
						<button className="wd-toggle-btn" onClick={() => setSlideLeftOff(!showSlideLeftOff)}>{showSlideLeftOff ? "Hide code" : "Show code"}</button>
						{showSlideLeftOff && (
						<button className="wd-copy-btn" onClick={() => handleCopyCode(slideLeftOffRef)}>{buttonText}</button>
						)}
					</div>
					{showSlideLeftOff && (
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={slideLeftOffRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-left-offscreen">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
					)}
					<br/>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <video width="640" height="360" controls>
              <source src="/images/plugins/animation-library/slide-left-offscreen.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
				<h4>Slide Right Offscreen</h4>
				<p>Use the class: <span className="wd-monospace">slide-right-offscreen</span></p>
				<div className="wd-btn-container">
						<button className="wd-toggle-btn" onClick={() => setSlideRightOff(!showSlideRightOff)}>{showSlideRightOff ? "Hide code" : "Show code"}</button>
						{showSlideRightOff && (
						<button className="wd-copy-btn" onClick={() => handleCopyCode(slideRightOffRef)}>{buttonText}</button>
						)}
					</div>
					{showSlideRightOff && (
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={slideRightOffRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-right-offscreen">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
					)}
					<br/>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <video width="640" height="360" controls>
              <source src="/images/plugins/animation-library/slide-right-offscreen.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <h4>Slide Top Offscreen</h4>
				<p>Use the class: <span className="wd-monospace">slide-top-offscreen</span></p>
				<div className="wd-btn-container">
						<button className="wd-toggle-btn" onClick={() => setSlideTopOff(!showSlideTopOff)}>{showSlideTopOff ? "Hide code" : "Show code"}</button>
						{showSlideTopOff && (
						<button className="wd-copy-btn" onClick={() => handleCopyCode(slideTopOffRef)}>{buttonText}</button>
						)}
					</div>
					{showSlideTopOff && (
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={slideTopOffRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-top-offscreen">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
					)}
					<br/>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <video width="640" height="360" controls>
              <source src="/images/plugins/animation-library/slide-top-offscreen.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
				<h4>Slide Bottom Offscreen</h4>
				<p>Use the class: <span className="wd-monospace">slide-bottom-offscreen</span></p>
				<div className="wd-btn-container">
						<button className="wd-toggle-btn" onClick={() => setSlideBottomOff(!showSlideBottomOff)}>{showSlideBottomOff ? "Hide code" : "Show code"}</button>
						{showSlideBottomOff && (
						<button className="wd-copy-btn" onClick={() => handleCopyCode(slideBottomOffRef)}>{buttonText}</button>
						)}
					</div>
					{showSlideBottomOff && (
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={slideBottomOffRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-bottom-offscreen">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
					)}
					<br/>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <video width="640" height="360" controls>
              <source src="/images/plugins/animation-library/slide-bottom-offscreen.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
				<h4>Slide Left Subtle</h4>
				<p>Use the class: <span className="wd-monospace">slide-left-subtle</span></p>
				<div className="wd-btn-container">
						<button className="wd-toggle-btn" onClick={() => setSlideLeftSubtle(!showSlideLeftSubtle)}>{showSlideLeftSubtle ? "Hide code" : "Show code"}</button>
						{showSlideLeftSubtle && (
						<button className="wd-copy-btn" onClick={() => handleCopyCode(slideLeftSubtleRef)}>{buttonText}</button>
						)}
					</div>
					{showSlideLeftSubtle && (
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={slideLeftSubtleRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-left-subtle">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
					)}
					<br/>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <video width="640" height="360" controls>
              <source src="/images/plugins/animation-library/slide-left-subtle.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
				<h4>Slide Right Subtle</h4>
				<p>Use the class: <span className="wd-monospace">slide-right-subtle</span></p>
				<div className="wd-btn-container">
						<button className="wd-toggle-btn" onClick={() => setSlideRightSubtle(!showSlideRightSubtle)}>{showSlideRightSubtle ? "Hide code" : "Show code"}</button>
						{showSlideRightSubtle && (
						<button className="wd-copy-btn" onClick={() => handleCopyCode(slideRightSubtleRef)}>{buttonText}</button>
						)}
					</div>
					{showSlideRightSubtle && (
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={slideRightSubtleRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-right-subtle">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
					)}
					<br/>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <video width="640" height="360" controls>
              <source src="/images/plugins/animation-library/slide-right-subtle.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <h4>Slide Top Subtle</h4>
				<p>Use the class: <span className="wd-monospace">slide-top-subtle</span></p>
				<div className="wd-btn-container">
						<button className="wd-toggle-btn" onClick={() => setSlideTopSubtle(!showSlideTopSubtle)}>{showSlideTopSubtle ? "Hide code" : "Show code"}</button>
						{showSlideTopSubtle && (
						<button className="wd-copy-btn" onClick={() => handleCopyCode(slideTopSubtleRef)}>{buttonText}</button>
						)}
					</div>
					{showSlideTopSubtle && (
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={slideTopSubtleRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-top-subtle">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
					)}
					<br/>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <video width="640" height="360" controls>
              <source src="/images/plugins/animation-library/slide-top-subtle.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <h4>Slide Bottom Subtle</h4>
				<p>Use the class: <span className="wd-monospace">slide-bottom-subtle</span></p>
				<div className="wd-btn-container">
						<button className="wd-toggle-btn" onClick={() => setSlideBottomSubtle(!showSlideBottomSubtle)}>{showSlideBottomSubtle ? "Hide code" : "Show code"}</button>
						{showSlideBottomSubtle && (
						<button className="wd-copy-btn" onClick={() => handleCopyCode(slideBottomSubtleRef)}>{buttonText}</button>
						)}
					</div>
					{showSlideBottomSubtle && (
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={slideBottomSubtleRef}>
              {String.raw`<h2 class="icon-book-open">Module Introduction</h2>
<p class="slide-bottom-subtle">Lorem ipsum dolor...</p>`}
              </code>
            </pre>
          </div>
					)}
					<br/>
        <div className="wd-window">
          <div className="wd-visual-ex center-ex">
            <video width="640" height="360" controls>
              <source src="/images/plugins/animation-library/slide-bottom-subtle.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  )
}