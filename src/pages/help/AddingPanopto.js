import styles from "../../styles/d2l.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLayoutEffect } from "react";
import HelpSidebar from "@/components/HelpSidebar";
import BackToTop from "@/components/BackToTop";

export default function AddingPanopto() {

		  // Remove any existing theme link (required to keep theme styles just on the theme page)
			useLayoutEffect(() => {
				const existingLink = document.querySelector("link[data-theme-link]");
				if (existingLink) {
					document.head.removeChild(existingLink);
				}
			}, []);

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
		<section id="toc-adding-panopto">
			<h2 id="adding-panopto" className="section-top anchor">How To Add A Panopto Video</h2>
			<p>Learn how to add a Panopto video to your course.</p>
			<h3 className="spacer">Step by Step:</h3>
			<ol className={styles.d2lInstructions}>
				<li>
					<p>Navigate to the page where you wish to add a Panopto video.</p>
					<img src="/images/help/adding-panopto/step1.png" alt="step 1"></img>
				</li>
				<li>
					<p>From the dropdown, select the "Edit HTML" option.</p>
					<img src="/images/help/adding-panopto/step2.png" alt="step 2"></img>
					</li>
				<li>
					<p>Select the area that you want to add the Panopto video.</p>
					<img src="/images/help/adding-panopto/step3.png" alt="step 3"></img>
					</li>
				<li>
					<p>From the editor toolbar select the "insert stuff" button.</p>
					<img src="/images/help/adding-panopto/step4.png" alt="step 4"></img>
					</li>
				<li>
					<p>Scroll down from the "Insert Stuff" dropdown and select "Panopto Embed".</p>
					<img src="/images/help/adding-panopto/step5.png" alt="step 5"></img>
					</li>
				<li>
				<p>The Panopto popup will appear. You may choose a video from your folder.</p>
					<img src="/images/help/adding-panopto/step6.png" alt="step 6"></img>
					</li>
				<li>
				<p>To select a different folder, click on the drop down to access other folders.</p>
					<img src="/images/help/adding-panopto/step7.png" alt="step 7"></img>
					</li>
				<li>
					<p>After selecting the correct folder, select the video you want on the page. Then click the "Insert" button.</p>
					<img src="/images/help/adding-panopto/step8.png" alt="step 8"></img>
					</li>
				<li>
				<p>A new popup with a preview will load. Ensure that the video is correct, then click the "Insert" button.</p>
					<img src="/images/help/adding-panopto/step9.png" alt="step 9"></img>
					</li>
					<li>
					<p>You should now see the Panopto video embedded on the page.</p>
						<img src="/images/help/adding-panopto/step10.png" alt="step 10"></img>
					</li>
					<li>
					<p>Drag your mouse over the video so it is highlighted, showing you've selected the Panopto video.</p>
						<img src="/images/help/adding-panopto/step11.png" alt="step 11"></img>
					</li>
					<li>
					<p>While the video is selected, click on the "view source code" button.</p>
						<img src="/images/help/adding-panopto/step12.png" alt="step 12"></img>
					</li>
					<li>
					<p>The Panopto HTML code should be highlighted in blue.</p>
						<img src="/images/help/adding-panopto/step13.png" alt="step 13"></img>
					</li>
					<li>
					<p>Replace the code around the &lt;iframe&gt; with the code for a media-container. (For an example, see the <a href="https://pimaonline-webdocs.netlify.app/widgets#media-container">Media Container article</a>)<br/>Please note that the &lt;iframe&gt; code remains the same, only the HTML around the &lt;iframe&gt; should change.</p>
						<img src="/images/help/adding-panopto/step14.png" alt="step 14"></img>
					</li>
					<li>
					<p>Save your changes.</p>
						<img src="/images/help/adding-panopto/step15.png" alt="step 15"></img>
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
	)};