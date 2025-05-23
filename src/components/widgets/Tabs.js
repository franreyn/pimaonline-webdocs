import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function Tabs() {
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

	// Functionality for tabs widget
	const [selectedTab, setSelectedTab] = useState("tab4"); // Default to 'tab4'

	const handleTabChange = (event) => {
		setSelectedTab(event.target.id); // Update state when the user selects a different tab
	};

	return (
		<section className="wd-content" id="toc-tabs">
			<h2 id="tabs" className="section-top anchor">
				Tabs
			</h2>
			<p>
				Use the <strong>Tabs Widget</strong> to organize and separate related
				information into their own individual tabs. Best used when there are
				multiple tabs.
			</p>
			<p>
				Use <span className="wd-monospace">.tabs</span> to wrap your entire tab
				widget. Use{" "}
				<span className="wd-monospace">
					&lt;label class="tab-header"&gt;Tab Title&lt;/label&gt;
				</span>{" "}
				to edit the title. <br />
				Use{" "}
				<span className="wd-monospace">
					&lt;div class="tab-panel"&gt; [content inside] &lt;/div&gt;
				</span>{" "}
				to edit what appears inside the tabs.
			</p>
			<div className="wd-window">
				<div className="wd-visual-ex">
					<div className="tabs" role="region" aria-label="tab group 1">
						<input
							className="tab-input"
							type="radio"
							id="tab1"
							name="hint-group-1"
							aria-describedby="tabHeading1"
							checked={selectedTab === "tab1"}
							onChange={handleTabChange}
						/>
						<label className="tab-header" htmlFor="tab1">
							<span>Introduction</span>
						</label>
						<div className="tab-panel" tabIndex="0" id="tabHeading1">
							<h4>Introduction to Writing</h4>
							<p>
								Effective writing begins with a strong introduction that grabs
								the reader’s attention. This section should provide a brief
								overview of the topic and outline the main points to be
								discussed. Aim to engage your audience with a compelling opening
								sentence or question. Providing context and a clear thesis
								statement will help set the stage for the rest of your paper.
							</p>
						</div>
						<input
							className="tab-input"
							type="radio"
							id="tab2"
							name="hint-group-1"
							aria-describedby="tabHeading2"
							checked={selectedTab === "tab2"}
							onChange={handleTabChange}
						/>
						<label className="tab-header" htmlFor="tab2">
							<span>Body</span>
						</label>
						<div className="tab-panel" tabIndex="0" id="tabHeading2">
							<h4>Developing the Body Paragraphs</h4>
							<p>
								The body of your paper is where you develop your arguments and
								provide evidence to support your thesis. Each paragraph should
								focus on a single idea and include topic sentences, supporting
								details, and examples. Use transitions to connect paragraphs and
								ensure a logical flow of information. Revising and editing are
								crucial to refining your arguments and enhancing clarity.
							</p>
						</div>
						<input
							className="tab-input"
							type="radio"
							id="tab3"
							name="hint-group-1"
							aria-describedby="tabHeading3"
							checked={selectedTab === "tab3"}
							onChange={handleTabChange}
						/>
						<label className="tab-header" htmlFor="tab3">
							<span>Conclusion</span>
						</label>
						<div className="tab-panel" tabIndex="0" id="tabHeading3">
							<h4>Concluding Your Paper</h4>
							<p>
								The conclusion summarizes the main points and reinforces the
								thesis statement. It should provide closure and reflect on the
								significance of the topic. Avoid introducing new information in
								the conclusion. A strong conclusion will leave a lasting
								impression and clearly demonstrate the importance of the
								discussion.
							</p>
						</div>
						<input
							type="radio"
							id="tab4"
							name="hint-group-1"
							aria-describedby="tabHeading4"
							checked={selectedTab === "tab4"}
							onChange={handleTabChange}
						/>
						<label
							className="tab-header hide-tab"
							htmlFor="tab4"
							title="Hide Panel"
						>
							<span>Hide</span>
						</label>
						<div
							className="tab-panel hide-panel"
							tabIndex="0"
							aria-hidden="true"
							id="tabHeading4"
						></div>
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
							{String.raw`<div class="tabs">
    <div class="tab-item"> 
        <label>Introduction</label>
        <h4>Introduction to Writing</h4>
	<p>Effective writing begins with a strong introduction that grabs the reader’s attention. This section should provide a brief overview of the topic and outline the main points to be discussed. Aim to engage your audience with a compelling opening sentence or question. Providing context and a clear thesis statement will help set the stage for the rest of your paper.</p>
	</div>
    <div class="tab-item">
        <label>Body</label>
        <h4>Developing the Body Paragraphs</h4>
        <p>The body of your paper is where you develop your arguments and provide evidence to support your thesis. Each paragraph should focus on a single idea and include topic sentences, supporting details, and examples. Use transitions to connect paragraphs and ensure a logical flow of information. Revising and editing are crucial to refining your arguments and enhancing clarity.</p>
    </div>
    <div class="tab-item">
        <label>Conclusion</label>
        <h4>Concluding Your Paper</h4>
        <p>The conclusion summarizes the main points and reinforces the thesis statement. It should provide closure and reflect on the significance of the topic. Avoid introducing new information in the conclusion. A strong conclusion will leave a lasting impression and clearly demonstrate the importance of the discussion.</p>
    </div>
</div> 
`}
						</code>
					</pre>
				</div>
				)}
			</div>
		</section>
	);
}
