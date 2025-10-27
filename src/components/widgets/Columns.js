import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function Columns() {
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
		<section className="wd-content" id="toc-columns">
			<h2 id="columns" className="section-top anchor">
				Columns
			</h2>
			<p>
				Use <strong>Columns</strong> to format text, images, and other widgets
				in a side-by-side fashion. A maximum of three columns will appear one
				line, and additional columns will automatically wrap to the next line.
				On mobile view, each column will stack.
			</p>
			<p>
				Use <span className="wd-monospace">.columns</span> as the parent
				element. Each nested block element will format as a column – wrap
				multiple elements within a <span className="wd-monospace">div</span> to
				keep them in the same column.
			</p>
			<div className="wd-window">
				<div className="wd-visual-ex">
					<div className="columns">
						<div>
							<h3>About Epistemology</h3>
							<p>
								Epistemology examines the nature and limits of knowledge,
								questioning what it means to "know" and how knowledge differs
								from mere belief. Epistemologists seek to define truth and
								explore how people justify beliefs, bridging the gap between
								opinion and fact.{" "}
							</p>
						</div>
						<div>
							<img src="https://unsplash.it/300/300" alt="" />
						</div>
						<p>
							In cognitive science, researchers study the mechanisms behind
							thought and perception, integrating psychology, neuroscience, and
							computer science. This interdisciplinary work has fueled advances
							in artificial intelligence and deepened our understanding of
							mental processes and human-computer interactions.
						</p>
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
							{String.raw`<div className="columns">
 <div>
  <h3>About Epistemology</h3>
  <p>Epistemology examines the nature and limits of knowledge, questioning what it means to "know" and how knowledge differs from mere belief. Epistemologists seek to define truth and explore how people justify beliefs, bridging the gap between opinion and fact.</p>
 </div>
 <div>
  <img src="https://unsplash.it/300/300" alt="" />
 </div>
 <p>In cognitive science, researchers study the mechanisms behind thought and perception, integrating psychology, neuroscience, and computer science. This interdisciplinary work has fueled advances in artificial intelligence and deepened our understanding of mental processes and human-computer interactions.</p>
</div>`}
						</code>
					</pre>
				</div>
				)}
			</div>
		</section>
	);
}
