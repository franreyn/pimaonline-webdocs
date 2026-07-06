import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

const infoPopupDemoContent = {
	parrots: "Planks of wood used by Valencian carpenters.",
	warning: "This action can't be undone once submitted.",
	tip: "You can revisit this page any time before the due date.",
	note: "Extra credit opportunities are listed on the syllabus.",
};

const infoPopupMobileWarning =
	"This activity uses the Info Popup widget, which isn't available on small screens. Please view this page on a desktop or tablet to complete it.";

function InfoPopupTrigger({ tooltipKey, color, label, activeKey, setActiveKey }) {
	const isOpen = activeKey === tooltipKey;
	const colorClass = color ? ` ${color}` : "";
	const themeClass = color ? ` info-popup-theme-${color}` : "";

	const toggle = () => setActiveKey(isOpen ? null : tooltipKey);

	return (
		<span className="info-popup-demo-wrapper">
			<span
				className={`info-popup${colorClass}`}
				data-tooltip={tooltipKey}
				role="button"
				tabIndex={0}
				aria-haspopup="dialog"
				aria-expanded={isOpen}
				onClick={toggle}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						toggle();
					}
				}}
			>
				{label}
			</span>
			{isOpen && (
				<div
					id="info-popup-modal"
					className={`info-popup-modal${themeClass}`}
					role="dialog"
					aria-modal="true"
					aria-label="More information"
				>
					<div className="info-popup-caret" aria-hidden="true" />
					<button
						type="button"
						className="info-popup-close-btn"
						aria-label="Close info popup"
						onClick={() => setActiveKey(null)}
					>
						×
					</button>
					<div className="info-popup-content">
						{infoPopupDemoContent[tooltipKey]}
					</div>
				</div>
			)}
		</span>
	);
}

export default function InfoPopup() {
	const [activeKey, setActiveKey] = useState(null);

	const codeRef = useRef(null);
	const [buttonText, setButtonText] = useState("Copy code");
	const [showCode, setShowCode] = useState(false);

	const codeRef2 = useRef(null);
	const [buttonText2, setButtonText2] = useState("Copy code");
	const [showCode2, setShowCode2] = useState(false);

	useEffect(() => {
		if (showCode && codeRef.current) {
			hljs.highlightElement(codeRef.current);
		}
	}, [showCode]);

	useEffect(() => {
		if (showCode2 && codeRef2.current) {
			hljs.highlightElement(codeRef2.current);
		}
	}, [showCode2]);

	// Close the open popup on Escape, matching the production widget's keyboard support
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key !== "Escape") return;
			setActiveKey((current) => (current ? null : current));
		};
		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, []);

	// Close the open popup when clicking anywhere outside its trigger/modal
	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (!(e.target instanceof Element)) return;
			if (e.target.closest(".info-popup-demo-wrapper")) return;
			setActiveKey((current) => (current ? null : current));
		};
		document.addEventListener("mousedown", handleOutsideClick);
		return () => document.removeEventListener("mousedown", handleOutsideClick);
	}, []);

	const copyCode = async (ref, setText) => {
		if (!ref.current) return;
		try {
			await navigator.clipboard.writeText(ref.current.textContent);
			setText("Copied!");
			setTimeout(() => setText("Copy code"), 2000);
		} catch (err) {
			console.error("Copy failed:", err);
			setText("Failed to copy");
			setTimeout(() => setText("Copy code"), 2000);
		}
	};

	return (
		<section className="wd-content" id="toc-info-popup">
			<h2 id="info-popup" className="section-top anchor">
				Info Popup
			</h2>
			<p>
				Use the <strong>Info Popup</strong> to let users click on a word or
				phrase to open a small modal with supplementary content, without
				leaving the page or taking up permanent space in the layout.
			</p>
			<p>
				The widget is built from two paired elements that share a{" "}
				<span className="wd-monospace">data-tooltip</span> key: the{" "}
				<span className="wd-monospace">.info-popup</span> trigger a user
				clicks on, and a hidden content{" "}
				<span className="wd-monospace">&lt;div&gt;</span> holding the
				popup's HTML.
			</p>
			<p>
				 The trigger should be a <span className="wd-monospace">&lt;span&gt;</span> element wrapping around the trigger, but the content must be a{" "}
				<span className="wd-monospace">&lt;div&gt;</span> and can be placed
				anywhere on the page.
			</p>
			<p><strong>Note:</strong> This widget is currently only available on desktop or tablet size screens. You'll see another HTML
				portion of the widget in the code that appears for mobile users.</p>
			<div className="wd-window">
				<div className="wd-visual-ex info-popup-demo-visual-ex">
					<p>
						Info Popups work well for adding a brief definition or aside
						right where a reader needs it, without sending them away from
						the page. For example, in Valencian carpentry the word{" "}<InfoPopupTrigger
							tooltipKey="parrots"
							label="parrots"
							activeKey={activeKey}
							setActiveKey={setActiveKey}
						/>{" "}refers to something you might not expect — click it to find
						out, then keep reading the rest of this paragraph as if
						nothing happened.
					</p>
					<div data-tooltip="parrots" hidden>
						<p>{infoPopupDemoContent.parrots}</p>
					</div>
					<div className="info-popup-mobile-message">
						<p>{infoPopupMobileWarning}</p>
					</div>
				</div>
				<div className="wd-btn-container">
					<button
						className="wd-toggle-btn"
						onClick={() => setShowCode(!showCode)}
					>
						{showCode ? "Hide code" : "Show code"}
					</button>
					{showCode && (
						<button
							className="wd-copy-btn"
							onClick={() => copyCode(codeRef, setButtonText)}
						>
							{buttonText}
						</button>
					)}
				</div>
				{showCode && (
					<div className="wd-html-code">
						<pre>
							<code className="language-html" ref={codeRef}>
								{String.raw`<p>
  Info Popups work well for adding a brief definition or aside right where a
  reader needs it, without sending them away from the page. For example, in
  Valencian carpentry the word <span class="info-popup" data-tooltip="parrots">parrots</span>
  refers to something you might not expect — click it to find out, then keep
  reading the rest of this paragraph as if nothing happened.
</p>

<div data-tooltip="parrots">
  <p>Planks of wood used by Valencian carpenters.</p>
</div>

<div class="info-popup-mobile-message">
  <p>This activity uses the Info Popup widget, which isn't available on small
  screens. Please view this page on a desktop or tablet to complete it.</p>
</div>`}
							</code>
						</pre>
					</div>
				)}
			</div>
<br></br>
			<h3>Color Themes</h3>
			<p>
				Add the <span className="wd-monospace">.red</span>,{" "}
				<span className="wd-monospace">.green</span>, or{" "}
				<span className="wd-monospace">.blue</span> class to the trigger to change
				the popup's accent color. Leave the class off to use the default
				theme.
			</p>
			<p>
				<strong>Note:</strong> The colors may appear a little different in D2L on a white
				background, but the style and theme is generally the same.
			</p>
			<div className="wd-window">
				<div className="wd-visual-ex info-popup-demo-visual-ex">
					<p>
						Before submitting your assignment, please read this{" "}
						<InfoPopupTrigger
							tooltipKey="warning"
							color="red"
							label="warning"
							activeKey={activeKey}
							setActiveKey={setActiveKey}
						/>, review this{" "}
						<InfoPopupTrigger
							tooltipKey="tip"
							color="green"
							label="tip"
							activeKey={activeKey}
							setActiveKey={setActiveKey}
						/>, and check this{" "}
						<InfoPopupTrigger
							tooltipKey="note"
							color="blue"
							label="note"
							activeKey={activeKey}
							setActiveKey={setActiveKey}
						/>{" "}
						about extra credit. Click each word to preview its themed
						popup and confirm the color reads clearly against the
						surrounding content.
					</p>
					<div data-tooltip="warning" hidden>
						<p>{infoPopupDemoContent.warning}</p>
					</div>
					<div data-tooltip="tip" hidden>
						<p>{infoPopupDemoContent.tip}</p>
					</div>
					<div data-tooltip="note" hidden>
						<p>{infoPopupDemoContent.note}</p>
					</div>
					<div className="info-popup-mobile-message">
						<p>{infoPopupMobileWarning}</p>
					</div>
				</div>
				<div className="wd-btn-container">
					<button
						className="wd-toggle-btn"
						onClick={() => setShowCode2(!showCode2)}
					>
						{showCode2 ? "Hide code" : "Show code"}
					</button>
					{showCode2 && (
						<button
							className="wd-copy-btn"
							onClick={() => copyCode(codeRef2, setButtonText2)}
						>
							{buttonText2}
						</button>
					)}
				</div>
				{showCode2 && (
					<div className="wd-html-code">
						<pre>
							<code className="language-html" ref={codeRef2}>
								{String.raw`<p>
  Before submitting your assignment, please read this
  <span class="info-popup red" data-tooltip="warning">warning</span>, review this
  <span class="info-popup green" data-tooltip="tip">tip</span>, and check this
  <span class="info-popup blue" data-tooltip="note">note</span> about extra credit.
</p>

<div data-tooltip="warning">
  <p>This action can't be undone once submitted.</p>
</div>
<div data-tooltip="tip">
  <p>You can revisit this page any time before the due date.</p>
</div>
<div data-tooltip="note">
  <p>Extra credit opportunities are listed on the syllabus.</p>
</div>

<div class="info-popup-mobile-message">
  <p>This activity uses the Info Popup widget, which isn't available on small
  screens. Please view this page on a desktop or tablet to complete it.</p>
</div>`}
							</code>
						</pre>
					</div>
				)}
			</div>
<br></br>
			<h3>Mobile</h3>
			<p>
				Info Popups are disabled below the{" "}
				<span className="wd-monospace">min-700</span> breakpoint since
				click-to-open modals don't translate well to small touch screens.
				Wrap a plain-text fallback in{" "}
				<span className="wd-monospace">.info-popup-mobile-message</span> so
				mobile users get a warning or the popup modal content — try resizing your browser below 700px on either demo
				above to see the fallback message appear in place of the disabled
				trigger.
			</p>
		</section>
	);
}
