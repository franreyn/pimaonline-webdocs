import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("xml", html);

export default function Accordion() {
	const codeRef = useRef(null);
	const [buttonText, setButtonText] = useState("Copy code");
	const [liked, setLiked] = useState(false);

	useEffect(() => {
		hljs.highlightAll();
	}, []);

	const handleCopyCode = async () => {
		try {
			await navigator.clipboard.writeText(codeRef.current.textContent);
			setButtonText("Copied!");
			setTimeout(() => setButtonText("Copy code"), 2000);
		} catch (err) {
			console.error("Copy failed:", err);
			setButtonText("Failed to copy");
		}
	};

	const toggleLike = () => {
		setLiked(!liked);
	};

	return (
		<section className="wd-content" id="toc-social-post">
			<h2 id="social-post" className="section-top anchor">
				Social Post
			</h2>
			<p>
				Use the <strong>Social Post</strong> widget to display an image and caption styled as an interactive social media-style post for visual interest.
			</p>
			<p>
				Use{" "}
				<span className="wd-monospace">
					.social-post</span>{" "}
				to wrap all widget content. Use{" "}
				<span className="wd-monospace">
					.social-post-title</span>{" "}
				to wrap an optional title in the username position. Use{" "}
				<span className="wd-monospace">
					.social-post-image</span>{" "}
				to wrap your <span className="wd-monospace">&lt;img&gt;</span> element. Then, use{" "}
				<span className="wd-monospace">
					.social-post-body</span>{" "}
				to wrap your caption content.
			</p>
			<p>All other widget elements will be added dynamically via JavaScript.</p>

			<div className="wd-window">
				<div className="wd-visual-ex">
					<div className={`social-post ${liked ? "liked" : ""}`}>
						<div className="social-post-title">Username</div>
						<div className="social-post-image">
							<img src="https://placehold.co/650x350" alt="Post Content" />
						</div>
						<div className="social-post-icons">
							<span className="like-icon" onClick={toggleLike} role="button" tabIndex={0}></span>
							<span className="comment-icon"></span>
						</div>
						<div className="social-post-likes"></div>
						<div className="social-post-body">Nullam lobortis quam id justo porta suscipit.</div>
					</div>
				</div>

				<div className="wd-btn-container">
					<button className="wd-copy-btn" onClick={handleCopyCode}>
						{buttonText}
					</button>
				</div>

				<div className="wd-html-code">
					<pre>
						<code className="language-html" ref={codeRef}>
							{String.raw`<div class="social-post">
  <div class="social-post-title">Username</div>
  <div class="social-post-image">
    <img src="https://placehold.co/650x350" alt="Post Content" />
  </div>
  <div class="social-post-body">Nullam lobortis quam id justo porta suscipit.</div>
</div>`}
						</code>
					</pre>
				</div>
			</div>
		</section>
	);
}
