import styles from "../../styles/d2l.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HelpSidebar from "@/components/HelpSidebar";
import { useLayoutEffect, useRef, useState } from "react";
import "highlight.js/styles/night-owl.css";
import BackToTop from "@/components/BackToTop";

export default function AddingContentBody() {

	// Remove any existing theme link (required to keep theme styles just on the theme page)
	useLayoutEffect(() => {
		const existingLink = document.querySelector("link[data-theme-link]");
		if (existingLink) {
			document.head.removeChild(existingLink);
		}
	}, []);

	const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");

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
    <>
		<Head>
<title>D2L Help Articles</title>
</Head>
<header className="wd-header">
<Navbar />
</header>
<div className="wd-intro">
<h1>D2L Help Articles</h1>
<p className="wd-break">Find help articles on specific D2L tasks related to Themepack.</p>
</div>
<div className="wd-grid">
	<main>
      <section id="toc-adding-content-body">
        <h2 id="adding-content-body" className="section-top anchor">How To Add A Content Body</h2>
        <p>Learn how to add a content body to your page in D2L.</p>
				<h3 className="spacer">Step by Step:</h3>
				<ol className={styles.d2lInstructions}>
					<li>
						<p>Click on the caret next to the page title.</p>
						<img src="/images/help/adding-content-body/step1.png" alt="step 1"/>
					</li>
					<li>
						<p>From the dropdown, select the "Edit HTML" option.</p>
						<img src="/images/help/adding-content-body/step2.png" alt="step 2"/>
					</li>
					<li>
						<p>Select the element directly above where you want to add a content body.<br/>(In this example, I'll select the blockquote to find the content directly above where I want to insert a content body.)</p>
						<img src="/images/help/adding-content-body/step3.png" alt="step 3"/>
					</li>
					<li>
						<p>While the element is selected, click on the "view source code" button.</p>
						<img src="/images/help/adding-content-body/step4.png" alt="step 4"/>
					</li>
					<li>
						<p>Locate the content body code that contains the element you highlighted.</p>
						<img src="/images/help/adding-content-body/step5.png" alt="step 5"/>
					</li>
					<li>
						<p>Locate the small arrow on the left side and click it to collapse the content body so it looks like the image below.</p>
						<img src="/images/help/adding-content-body/step6.png" alt="step 6"/>
						</li>
						<li>
						<p>Create a new line underneath it and copy and paste this code. Now it should look like the image below.<br/>(Please note that in most cases the first element within a content body is an &lt;h2&gt; element.)</p>
						<div className="wd-btn-container">
          <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
        </div>
				<div className={`wd-html-code ${styles.codeBlock}`}>
          <pre>
            <code className="language-html" ref={codeRef}>
            {String.raw`<div class="content-body">
  <h2>Heading Here</h2>
  //...enter content here
</div>`}</code>
          </pre>
        </div>
						<img src="/images/help/adding-content-body/step7.png" alt="step 7"/>

					</li>
					<li>
						<p>Click on the "save" button to save your changes.</p>
						<img src="/images/help/adding-content-body/step8.png" alt="step 8"/>
					</li>
					<li> 
						<p>You should now see your content body in the page.</p>
						<img src="/images/help/adding-content-body/step9.png" alt="step 9"/>
					</li>
					</ol>
				</section>
				</main>
        <aside>
            <HelpSidebar />
          </aside>
        </div>
				<BackToTop/>
        <footer>
          <Footer />
        </footer>
				</>
	)}