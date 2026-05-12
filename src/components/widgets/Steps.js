import { useEffect, useRef, useState } from "react";

import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

import "highlight.js/styles/night-owl.css";

hljs.registerLanguage("html", html);

function StepsWidget({ steps }) {
	const [activeStep, setActiveStep] = useState(0);

	const toggleStep = (index) => {
		setActiveStep((prev) => (prev === index ? null : index));
	};

	const collapseAll = () => {
		setActiveStep(null);
	};

	return (
		<div className="steps-widget">
			<div className="steps-controls">
				<button
					type="button"
					className="control-btn steps-collapse-all"
					onClick={collapseAll}
				>
					Collapse All
				</button>
			</div>

			{steps?.map((step, index) => {
				const isActive = activeStep === index;

				return (
					<div
						key={index}
						className={`step-item ${
							isActive ? "active" : ""
						}`}
					>
						<div
							className="step-header"
							role="button"
							tabIndex={0}
							aria-expanded={isActive}
							aria-controls={`step-content-${index}`}
							onClick={() => toggleStep(index)}
							onKeyDown={(event) => {
								if (
									event.key === "Enter" ||
									event.key === " "
								) {
									event.preventDefault();
									toggleStep(index);
								}
							}}
						>
							<div
								className="step-marker"
								aria-hidden="true"
							/>

							<span className="step-number">
								Step {index + 1}
							</span>
						</div>

						{isActive && (
							<span className="step-status">
								<span className="sr-only">
									,{" "}
								</span>
								(current step)
							</span>
						)}

						<div
              className={`step-content ${
                isActive ? "active" : ""
              }`}
              id={`step-content-${index}`}
              role="region"
              aria-hidden={!isActive}
            >
							<div className="step-content-inner">
								<h3>{step.title}</h3>
								<p>{step.content}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default function Steps() {
	const codeRef = useRef(null);

	const [buttonText, setButtonText] = useState("Copy code");
	const [showCode, setShowCode] = useState(false);

	useEffect(() => {
		if (showCode && codeRef.current) {
			hljs.highlightElement(codeRef.current);
		}
	}, [showCode]);

	const handleCopyCode = async () => {
		if (!codeRef.current) return;

		try {
			await navigator.clipboard.writeText(
				codeRef.current.textContent
			);

			setButtonText("Copied!");

			setTimeout(() => {
				setButtonText("Copy code");
			}, 2000);

		} catch (err) {
			console.error("Copy failed:", err);
			setButtonText("Failed to copy");
		}
	};

	return (
		<section className="wd-content" id="toc-steps">
			<h2 id="steps" className="section-top anchor">
				Steps
			</h2>

			<p>
				Use the <strong>Steps</strong> component to
				display sequential instructions in an
				interactive accordion-style layout.
			</p>

			<p>
				Wrap the full component in{" "}
				<span className="wd-monospace">
					&lt;div class="steps-widget"&gt;&lt;/div&gt;
				</span>{" "}
				and place each step inside a{" "}
				<span className="wd-monospace">
					&lt;div class="step-item"&gt;&lt;/div&gt;
				</span>.
			</p>

			<div className="wd-window">
				<div className="wd-visual-ex">
          <StepsWidget
            steps={[
              {
                title: "Share Your Slide with Your Group and Discuss",
                content:
                  "After you have completed your slide, please do the following to support discussion with your classmates within your assigned discussion topic.",
              },
              {
                title: "Review Peer Feedback",
                content:
                  "Spend some time conversing with your group mates about their results and suggestions for improvement.",
              },
              {
                title: "Finalize and Submit",
                content:
                  "Ensure you have responded to at least two other group mates before the deadline.",
              },
            ]}
          />
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
							onClick={handleCopyCode}
						>
							{buttonText}
						</button>
					)}
				</div>

				{showCode && (
					<div className="wd-html-code">
						<pre>
							<code
								className="language-html"
								ref={codeRef}
							>
								{String.raw`<div class="steps-widget">
	<div class="step-item">
		<h3>Step Title</h3>
		<p>Step content goes here.</p>
	</div>

	<div class="step-item">
		<h3>Step Title</h3>
		<p>Additional step content.</p>
	</div>

	<div class="step-item">
		<h3>Step Title</h3>
		<p>More step content.</p>
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