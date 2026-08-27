import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function Timeline() {
	const textTimelineRef = useRef(null);
	const cardTimelineRef = useRef(null);

	const textHorizontalRef = useRef(null);
	const cardHorizontalRef = useRef(null);

	const [textTimelineButtonText, setTextTimelineButtonText] = useState("Copy code");
	const [cardTimelineButtonText, setCardTimelineButtonText] = useState("Copy code");

	const [showTextCode, setShowTextCode] = useState(false);
	const [showCardCode, setShowCardCode] = useState(false);

	const scrollOneViewport = (horizontalRef, direction) => {
		if (!horizontalRef.current) return;
		horizontalRef.current.scrollBy({
			left: horizontalRef.current.clientWidth * direction,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		if (showTextCode && textTimelineRef.current) {
			hljs.highlightElement(textTimelineRef.current);
		}
	}, [showTextCode]);

	useEffect(() => {
		if (showCardCode && cardTimelineRef.current) {
			hljs.highlightElement(cardTimelineRef.current);
		}
	}, [showCardCode]);

	const handleCopyCode = async (codeRef, setButtonText) => {
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
		<section className="wd-content" id="toc-timeline">
			<h2 id="timeline" className="section-top anchor">
				Timeline
			</h2>
			<p>
				Use the <strong>Timeline Widget</strong> to display a sequence of
				events in a horizontally scrolling track. Authors only need to
				provide the timeline items — the widget's script builds the
				scrolling track, nav buttons, and scroll hint automatically.
			</p>
			<p>
				Use <span className="wd-monospace">.timeline-item</span> on each
				event. Within each item, provide an{" "}
				<span className="wd-monospace">&lt;h4&gt;</span> for the title, a
				first <span className="wd-monospace">&lt;p&gt;</span> for the date,
				and a second <span className="wd-monospace">&lt;p&gt;</span> for the
				description. Add{" "}
				<span className="wd-monospace">data-icon="fa-icon-name"</span> on a{" "}
				<span className="wd-monospace">.timeline-item</span> to show a Font
				Awesome icon in its marker instead of the default step number.
			</p>

			<h3>Text Timeline</h3>
			<p>
				Use <span className="wd-monospace">.text-timeline</span> to wrap
				your timeline items in a text-only layout, with the marker placed
				between the title and date.
			</p>
			<div className="wd-window">
				<div className="wd-visual-ex">
					<div className="timeline-container text-timeline">
						<p className="timeline-scroll-indicator">Scroll horizontally to view &rarr;</p>
						<div className="timeline">
							<ol className="timeline-horizontal" ref={textHorizontalRef}>
								<li className="timeline-item">
									<div className="timeline-content">
										<h4 className="timeline-title">Project Kickoff</h4>
										<div className="timeline-marker"></div>
										<p className="timeline-date">2018</p>
										<p className="timeline-description">
											Scope defined, stakeholders aligned, and the first
											milestone set.
										</p>
									</div>
								</li>
								<li className="timeline-item">
									<div className="timeline-content">
										<h4 className="timeline-title">Version 1.0 Launch</h4>
										<div className="timeline-marker">
											<i className="fa fa-flag" aria-hidden="true"></i>
										</div>
										<p className="timeline-date">2021</p>
										<p className="timeline-description">
											Public launch of the initial release following rounds
											of iteration.
										</p>
									</div>
								</li>
								<li className="timeline-item">
									<div className="timeline-content">
										<h4 className="timeline-title">Ongoing Support</h4>
										<div className="timeline-marker"></div>
										<p className="timeline-date">2024</p>
										<p className="timeline-description">
											Continued updates based on user feedback and evolving
											needs.
										</p>
									</div>
								</li>
							</ol>
						</div>
						<div className="timeline-nav">
							<button
								className="timeline-prev"
								type="button"
								aria-label="View previous timeline item"
								onClick={() => scrollOneViewport(textHorizontalRef, -1)}
							>
								&larr;
							</button>
							<button
								className="timeline-next"
								type="button"
								aria-label="View next timeline item"
								onClick={() => scrollOneViewport(textHorizontalRef, 1)}
							>
								&rarr;
							</button>
						</div>
					</div>
				</div>
				<div className="wd-btn-container">
					<button
						className="wd-toggle-btn"
						onClick={() => setShowTextCode(!showTextCode)}
					>
						{showTextCode ? "Hide code" : "Show code"}
					</button>
					{showTextCode && (
						<button
							className="wd-copy-btn"
							onClick={() => handleCopyCode(textTimelineRef, setTextTimelineButtonText)}
						>
							{textTimelineButtonText}
						</button>
					)}
				</div>
				{showTextCode && (
					<div className="wd-html-code">
						<pre>
							<code className="language-html" ref={textTimelineRef}>
								{String.raw`<ol class="text-timeline">
  <li class="timeline-item">
    <h4>Project Kickoff</h4>
    <p>2018</p>
    <p>Scope defined, stakeholders aligned, and the first milestone set.</p>
  </li>
  <li class="timeline-item" data-icon="fa-flag">
    <h4>Version 1.0 Launch</h4>
    <p>2021</p>
    <p>Public launch of the initial release following rounds of iteration.</p>
  </li>
</ol>`}
							</code>
						</pre>
					</div>
				)}
			</div>
			<br />
			<br />

			<h3>Card Timeline</h3>
			<p>
				Use <span className="wd-monospace">.card-timeline</span> when you
				want to include an image with each event. The date and marker stay
				above the connecting rule, and each item renders as a card below
				it.
			</p>
			<div className="wd-window">
				<div className="wd-visual-ex">
					<div className="timeline-container card-timeline">
						<p className="timeline-scroll-indicator">Scroll horizontally to view &rarr;</p>
						<div className="timeline">
							<ol className="timeline-horizontal" ref={cardHorizontalRef}>
								<li className="timeline-item">
									<div className="timeline-content">
										<p className="timeline-date">2018</p>
										<div className="timeline-marker"></div>
										<div className="timeline-card">
											<img
												className="timeline-image"
												src="/images/widgets/calendar-cards/calendar-card_reading.jpg"
												alt=""
											/>
											<h4 className="timeline-title">Project Kickoff</h4>
											<p className="timeline-description">
												Scope defined, stakeholders aligned, and the first
												milestone set.
											</p>
										</div>
									</div>
								</li>
								<li className="timeline-item">
									<div className="timeline-content">
										<p className="timeline-date">2021</p>
										<div className="timeline-marker">
											<i className="fa fa-flag" aria-hidden="true"></i>
										</div>
										<div className="timeline-card">
											<img
												className="timeline-image"
												src="/images/widgets/calendar-cards/calendar-card_reading.jpg"
												alt=""
											/>
											<h4 className="timeline-title">Version 1.0 Launch</h4>
											<p className="timeline-description">
												Public launch of the initial release following
												rounds of iteration.
											</p>
										</div>
									</div>
								</li>
							</ol>
						</div>
						<div className="timeline-nav">
							<button
								className="timeline-prev"
								type="button"
								aria-label="View previous timeline item"
								onClick={() => scrollOneViewport(cardHorizontalRef, -1)}
							>
								&larr;
							</button>
							<button
								className="timeline-next"
								type="button"
								aria-label="View next timeline item"
								onClick={() => scrollOneViewport(cardHorizontalRef, 1)}
							>
								&rarr;
							</button>
						</div>
					</div>
				</div>
				<div className="wd-btn-container">
					<button
						className="wd-toggle-btn"
						onClick={() => setShowCardCode(!showCardCode)}
					>
						{showCardCode ? "Hide code" : "Show code"}
					</button>
					{showCardCode && (
						<button
							className="wd-copy-btn"
							onClick={() => handleCopyCode(cardTimelineRef, setCardTimelineButtonText)}
						>
							{cardTimelineButtonText}
						</button>
					)}
				</div>
				{showCardCode && (
					<div className="wd-html-code">
						<pre>
							<code className="language-html" ref={cardTimelineRef}>
								{String.raw`<ol class="card-timeline">
  <li class="timeline-item">
    <img src="event.jpg" alt="">
    <h4>Project Kickoff</h4>
    <p>2018</p>
    <p>Scope defined, stakeholders aligned, and the first milestone set.</p>
  </li>
  <li class="timeline-item" data-icon="fa-flag">
    <img src="event.jpg" alt="">
    <h4>Version 1.0 Launch</h4>
    <p>2021</p>
    <p>Public launch of the initial release following rounds of iteration.</p>
  </li>
</ol>`}
							</code>
						</pre>
					</div>
				)}
			</div>
		</section>
	);
}
