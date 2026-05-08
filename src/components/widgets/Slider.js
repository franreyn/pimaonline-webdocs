import React, { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

function SliderExample({ children }) {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = React.Children.toArray(children);

	const previousSlide = () => {
		setCurrentSlide((prev) =>
			prev > 0 ? prev - 1 : slides.length - 1
		);
	};

	const nextSlide = () => {
		setCurrentSlide((prev) =>
			prev < slides.length - 1 ? prev + 1 : 0
		);
	};

	const goToSlide = (index) => {
		setCurrentSlide(index);
	};

	const handleKeyDown = (event) => {
		switch (event.key) {
			case "ArrowLeft":
				previousSlide();
				break;

			case "ArrowRight":
				nextSlide();
				break;

			default:
				return;
		}

		event.preventDefault();
	};

	return (
		<div
			className="slider-widget h-400"
			tabIndex="0"
			role="group"
			aria-label={`Interactive slider: slide ${
				currentSlide + 1
			} of ${slides.length}`}
			onKeyDown={handleKeyDown}
		>
			<div className="slider-content">
				{slides.map((slide, index) => (
					<div
						key={index}
						className="slider-item"
						hidden={currentSlide !== index}
					>
						{slide}
					</div>
				))}
			</div>

			<div className="slider-dots-bar">
				{slides.map((_, index) => (
					<button
						key={index}
						type="button"
						className={`slider-dot ${
							currentSlide === index ? "active" : ""
						}`}
						onClick={() => goToSlide(index)}
						aria-label={`Go to slide ${index + 1}`}
						aria-pressed={currentSlide === index}
					/>
				))}
			</div>

			<button
				type="button"
				className="slider-arrow icon-chevron-left"
				onClick={previousSlide}
				aria-label="Previous slide"
			/>

			<button
				type="button"
				className="slider-arrow icon-chevron-right"
				onClick={nextSlide}
				aria-label="Next slide"
			/>
		</div>
	);
}

export default function Slider() {
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
		<section className="wd-content" id="toc-slider">
			<h2 id="slider" className="section-top anchor">
				Slider
			</h2>

			<p>
				Use the <strong>Slider</strong> component to display
				content in a horizontal carousel interface.
			</p>

			<p>
				Wrap the full component in{" "}
				<span className="wd-monospace">
					&lt;div class="slider-widget"&gt;&lt;/div&gt;
				</span>{" "}
				and place each slide inside a{" "}
				<span className="wd-monospace">
					&lt;div class="slider-item"&gt;&lt;/div&gt;
				</span>.
			</p>

			<div className="wd-window">
				<div className="wd-visual-ex">
					<SliderExample>
						<div>
							<h3 className="icon-book-open">
								Aenean euismod
							</h3>

							<p>
								Nunc sed lacus sit amet purus convallis
								vestibulum vitae quis libero. Nunc
								consectetur tristique aliquet.
							</p>

							<p>
								Suspendisse risus ex, vestibulum non
								leo sit amet, consequat ultricies eros.
							</p>
						</div>

						<div>
							<div className="card-horizontal">
								<div className="card-body">
									<p>
										Ut posuere vitae ante varius
										consequat. Vivamus id
										condimentum dui.
									</p>
								</div>

								<div className="card-img">
									<img
										src="https://d2l.pima.edu/shared/images/placeholder/400x400.jpg"
										alt=""
									/>
								</div>
							</div>
						</div>

						<div>
							<div className="media-container">
								<div className="media-object">
									<iframe
										width="560"
										height="315"
										src="https://www.youtube.com/embed/Dxz8GPU-E1s"
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										allowFullScreen
									/>
								</div>
							</div>
						</div>
					</SliderExample>
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
							<code className="language-html" ref={codeRef} >
                {String.raw`<div class="slider-widget">
	<div class="slider-item">
		<h3>Slide 1</h3>
		<p>Slider content goes here.</p>
	</div>
	<div class="slider-item">
		<h3>Slide 2</h3>
		<p>Slider content goes here.</p>
	</div>
	<div class="slider-item">
		<h3>Slide 3</h3>
		<p>Slider content goes here.</p>
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