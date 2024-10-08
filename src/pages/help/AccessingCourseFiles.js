import styles from "../../styles/d2l.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLayoutEffect } from "react";
import HelpSidebar from "@/components/HelpSidebar";
import BackToTop from "@/components/BackToTop";

export default function AddingTemplates() {

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
      <section id="toc-accessing-course-files">
        <h2 id="accessing-course-files" className="section-top anchor">How To Access Course Files</h2>
        <p>Learn how to access files to edit the content of a course.</p>
				<h3 className="spacer">Step by Step:</h3>
				<h4>Change your role of a course to Developer in D2L</h4>
				<ol className={styles.d2lInstructions}>
					<li><p>The gear icon on the top right corner has user-related settings. Select "Users".</p>
						<img src="/images/help/accessing-course-files/step1.png"></img>
					</li>
					<li><p>Use the search bar to search for your username.</p>
						<img src="/images/help/accessing-course-files/step2.png"></img>
					</li>
					<li><p>Click on your name.</p>
						<img src="/images/help/accessing-course-files/step3.png"></img>
					</li>
					<li><p>Select the "Enrollments" tab and use the search bar to look up your course.</p>
						<img src="/images/help/accessing-course-files/step4.png"></img>
					</li>
					<li><p>Change your role to "Developer".</p>
						<img src="/images/help/accessing-course-files/step5.png"></img>
					</li>
				</ol>
				<h4>Use Dreamweaver to edit course files</h4>
				<ol className={styles.d2lInstructions}>
					<li><p>Dreamweaver is the standard code editor used while developing courses. Create a folder on your computer to store course files. A good place to store courses is in Documents where you can create a "Courses" folder that contains all of your courses. Then organize each course into its own folder and name it using the CRN.</p>
						<img src="/images/help/accessing-course-files/step6.png"></img>
					</li>
					<li><p>Within an individual course folder, create another folder and name it using the CRN followed by the month and year. This is done in case you have to redownload a copy of the course in the future.</p>
						<img src="/images/help/accessing-course-files/step7.png"></img>
					</li>
				</ol>
				<h4>Creating a site within Dreamweaver for a course</h4>
				<ol className={styles.d2lInstructions}>
					<li><p>Open Dreamweaver. Locate "Site" at the top and choose "New Site".</p>
						<img src="/images/help/accessing-course-files/step8.png"></img>
					</li>
					<li><p>Name the site and click on the folder icon next to the "Local Site Folder" field.</p>
						<img src="/images/help/accessing-course-files/step9.png"></img>
					</li>
					<li><p>Select the folder where the course files will be stored.</p>
						<img src="/images/help/accessing-course-files/step10.png"></img>
					</li>
					<li><p>Choose "Servers" on the left menu and click on the "+".</p>
						<img src="/images/help/accessing-course-files/step11.png"></img>
					</li>
					<li><div><p>Complete the fields to set up the server but <strong>DON'T</strong> click "Save" yet.</p>
							<ul>
							<li>Server Name: D2L</li>
							<li>Connect Using: WebDAV</li>
							<li>URL: <u>https://pimadav.desire2learn.com/</u></li>
							<li>Username: <em>your Pima username</em></li>
							<li>Password: <em>your Pima password</em></li>
						</ul>
						</div>
						<img src="/images/help/accessing-course-files/step12.png"></img>
					</li>
					<li><p>In D2L, use the course search bar to find the course you're trying to access.</p>
						<img src="/images/help/accessing-course-files/step13.png"></img>
					</li>
					<li><p>Using the "Tools" dropdown, select "Course Admin".</p>
						<img src="/images/help/accessing-course-files/step14.png"></img>
					</li>
					<li><p>Click on "Course Offering Information".</p>
						<img src="/images/help/accessing-course-files/step15.png"></img>
					</li>
					<li><p>Scroll down to where you see "Course Offering Path" and copy the path.</p>
						<img src="/images/help/accessing-course-files/step16.png"></img>
					</li>
					<li><p>Paste the path onto the end of the URL field in Dreamweaver. In this example, the full URL is <em>https://pimadav.desire2learn.com/content/enforced/583835-WRT101-DEV/</em></p>
						<img src="/images/help/accessing-course-files/step17.png"></img>
					</li>
					<li><p>The server set up is now complete, so you can go ahead and save.</p>
						<img src="/images/help/accessing-course-files/step18.png"></img>
					</li>
					<li><p>Sync the course files by clicking on the sync icon and previewing the files that you'll be downloading to your computer from D2L.</p>
						<img src="/images/help/accessing-course-files/step19.png"></img>
					</li>
					<li><p>The "Get" action indicates files that will be downloaded. There's an option to ignore certain files you don't want to download (mp4 files are a good example of files you want to ignore because of the large file size and we don't edit those in Dreamweaver anyway). Click "Ok" to start the sync process.</p>
						<img src="/images/help/accessing-course-files/step20.png"></img>
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
        </footer>    </>
  )
}
