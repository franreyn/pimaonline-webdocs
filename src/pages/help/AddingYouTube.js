import styles from "../../styles/d2l.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLayoutEffect } from "react";
import HelpSidebar from "@/components/HelpSidebar";
import BackToTop from "@/components/BackToTop";

export default function AddingYouTube() {

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
      <section id="toc-adding-youtube">
        <h2 id="adding-youtube" className="section-top anchor">How To Add A YouTube Video</h2>
        <p>Learn how to add a YouTube Video to your course using an embed code and media container.</p>
        <h3 className="spacer">Step by Step:</h3>
        <ol className={styles.d2lInstructions}>
          <li><p>Locate the YouTube video you want to embed and click on the "Share" button.</p>
          <img src="/images/help/adding-youtube/step1.png" alt="Step 1"></img></li>
          <li><p>This popup menu will appear. Click on the "Embed" icon or text.</p>
          <img src="/images/help/adding-youtube/step2.png" alt="Step 2"></img></li>
          <li><p>A preview of the video and code will appear in a new popup menu. Click on the "Copy" button.</p>
          <img src="/images/help/adding-youtube/step3.png" alt="Step 3"></img></li>
          <li><p>Navigate to D2L and open the page where you wish to add a YouTube video. Click on the caret next to the page title.</p>
          <img src="/images/help/adding-youtube/step4.png" alt="Step 4"></img></li>
          <li><p>From the dropdown, click the "Edit HTML" option.</p>
          <img src="/images/help/adding-youtube/step5.png" alt="Step 5"></img></li>
          <li><p>From the editor toolbar, select the "view source code" button.</p>
          <img src="/images/help/adding-youtube/step6.png" alt="Step 6"></img></li>
          <li><p>Use "Command + F" or "Control + F" to search for "media-container".</p>
          <img src="/images/help/adding-youtube/step7.png" alt="Step 7"></img></li>
          <li><p>Click the "Next match" button to search the page for the correct code.</p>
          <img src="/images/help/adding-youtube/step8.png" alt="Step 8"></img></li>
          <li><p>If you cannot find a match, add a media container to the page. (See the <a href="https://pimaonline-webdocs.netlify.app/widgets#media-container">Media Container</a> article for an example.)</p>
          <img src="/images/help/adding-youtube/step8a.png" alt="Step 8a"></img></li>
          <li><p>After adding a media container, or finding a match, the code should look like this.</p>
          <img src="/images/help/adding-youtube/step9.png" alt="Step 9"></img></li>
          <li><p>With the code that you copied from YouTube, select the &lt;iframe&gt; code and copy and paste it in.</p>
          <img src="/images/help/adding-youtube/step10.png" alt="Step 10"></img></li>
					<li><p>After the &lt;iframe&gt; content has been replaced, be sure to edit the "title" attribute.</p>
          <img src="/images/help/adding-youtube/step11.png" alt="Step 11"></img></li>
					<li><p>Save your changes.</p>
          <img src="/images/help/adding-youtube/step12.png" alt="Step 12"></img></li>
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
  );
}
