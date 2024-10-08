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
      <section id="toc-adding-templates">
        <h2 id="adding-templates" className="section-top anchor">How To Add A Template</h2>
        <p>Learn how to add a page to your course with the right theme and placeholder content.</p>
				<h3 className="spacer">Step by Step:</h3>
				<ol className={styles.d2lInstructions}>
					<li><p>Go to the module where you want to add the page, and then click the "Upload/Create" button.</p>
						<img src="/images/help/adding-templates/step1.png"></img>
					</li>
					<li><p>From the dropdown, click the "Upload Files" option.</p>
						<img src="/images/help/adding-templates/step2.png"></img>
					</li>
					<li><p>A pop-up dialogue box will appear. Select the "Public Files" option.</p>
						<img src="/images/help/adding-templates/step3.png"></img>
					</li>
					<li><p>A new set of options will appear in a table. Click on the "templates" folder.</p>
						<img src="/images/help/adding-templates/step4.png"></img>
					</li>
					<li><p>You'll see a list of theme templates to choose from. In this example, we'll select the "Template_Cards" folder. <br/>(The steps are the same for any template.)</p>
						<img src="/images/help/adding-templates/step5.png"></img>
					</li>
					<li><p>Within the template folder, there are a number of files to choose from. In this example, we'll add a templated page with the one-column layout. Select "one-column.html" by checking the box on the left-hand side.</p>
						<img src="/images/help/adding-templates/step6.png"></img>
					</li>
					<li><p>Now that the correct file is selected, click on the "Add" button.</p>
						<img src="/images/help/adding-templates/step7.png"></img>
					</li>
					<li><p>You'll be redirected to the module page in D2L. You'll now see the new file you added.</p>
						<img src="/images/help/adding-templates/step8.png"></img>
					</li>
					<li><p>After clicking on the file, the page will be the same templated page you copied from the templates folder.</p>
						<img src="/images/help/adding-templates/step9.png"></img>
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
  )
}
