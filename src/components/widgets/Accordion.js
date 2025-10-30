import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

function AccordionItem({ title, children }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleAccordionTitleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="accordion-item">
			<h3
				className={`accordion-title ${isOpen ? "arrow-up" : "arrow-down"}`}
				onClick={handleAccordionTitleClick}
			>
				{title}
			</h3>
			{isOpen && <div className="accordion-content">{children}</div>}
		</div>
	);
}

export default function Accordion() {
	const codeRef = useRef(null);
	const [buttonText, setButtonText] = useState("Copy code");
	const [showCode, setShowCode] = useState(false);

	useEffect(() => {
		if (showCode) {
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
		<section className="wd-content" id="toc-accordion">
			<h2 id="accordion" className="section-top anchor">
				Accordion
			</h2>
			<p>
				Use the <strong>Accordion</strong> to display content in collapsible
				compartments.
			</p>
			<p>
				Use{" "}
				<span className="wd-monospace">
					&lt;div class="accordion"&gt;&nbsp;&lt;/div&gt;
				</span>{" "}
				to wrap your full accordion. Then, use{" "}
				<span className="wd-monospace">
					&lt;div class="accordion-item"&gt;&nbsp;&lt;/div&gt;
				</span>{" "}
				to wrap each tab (and its collapsible content). The first heading within{" "}
				<span className="wd-monospace">accordion-item</span> will automatically
				serve as the accordion title.
			</p>
			<div className="wd-window">
				<div className="wd-visual-ex">
					<div className="accordion">
						<AccordionItem title="Read">
							<p>
								Making News, March/April 2018. By Deb Venasse, Reporter,{" "}
								<em>IBPA Independent</em> magazine
							</p>
						</AccordionItem>
						<AccordionItem title="Discuss">
							<p>
								Adweek is a well-known organization that covers media and
								communication people, places, and things. Some of its popular
								elements with journalists, creatives, and media workers are the
								newsletters with news about the actual people doing the media
								work.
							</p>
						</AccordionItem>
					</div>
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
							{String.raw`<div class="accordion">
    <div class="accordion-item">
      <h3>Read</h3>
      <p>Making News, March/April 2018. By Deb Venasse, Reporter, IBPA Independent magazine</p>
   </div>
   <div class="accordion-item">
      <h3>Discuss</h3>
      <p>Adweek is a well-known organization that...</p>
   </div>
</div>`}
						</code>
					</pre>
				</div>
				)}
			</div>
		</section>
	);
}
