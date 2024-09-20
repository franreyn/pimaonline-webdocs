import styles from "../../styles/d2l.module.css";

export default function HowToAddTemplate() {
  return (
    <>
      <section id="toc-how-to-add-template" className="mb-8">
        <h2 id="how-to-add-template" className="section-top anchor">How To Add A Template</h2>
        <p className="mb-4">Learn how to add a page to your course with the right theme and placeholder content.</p>
				<ol className={styles.d2lInstructions}>
					<li><p>Go to the module where you want to add the page, and then click the "Upload/Create" button.</p>
						<img src="/images/d2l-help/how-to-add-template/step1.png"></img>
					</li>
					<li><p>From the dropdown, click the "Upload Files" option.</p>
						<img src="/images/d2l-help/how-to-add-template/step2.png"></img>
					</li>
					<li><p>A pop-up dialogue box will appear. Select the "Public Files" option.</p>
						<img src="/images/d2l-help/how-to-add-template/step3.png"></img>
					</li>
					<li><p>A new set of options will appear in a table. Click on the "templates" folder.</p>
						<img src="/images/d2l-help/how-to-add-template/step4.png"></img>
					</li>
					<li><p>You'll see a list of theme templates to choose from. In this example, we'll select the "Template_Cards" folder. <br/>(The steps are the same for any template.)</p>
						<img src="/images/d2l-help/how-to-add-template/step5.png"></img>
					</li>
					<li><p>Within the template folder, there are a number of files to choose from. In this example, we'll add a templated page with the one-column layout. Select "one-column.html" by checking the box on the left-hand side.</p>
						<img src="/images/d2l-help/how-to-add-template/step6.png"></img>
					</li>
					<li><p>Now that the correct file is selected, click on the "Add" button.</p>
						<img src="/images/d2l-help/how-to-add-template/step7.png"></img>
					</li>
					<li><p>You'll be redirected to the module page in D2L. You'll now see the new file you added.</p>
						<img src="/images/d2l-help/how-to-add-template/step8.png"></img>
					</li>
					<li><p>After clicking on the file, the page will be the same templated page you copied from the templates folder.</p>
						<img src="/images/d2l-help/how-to-add-template/step9.png"></img>
					</li>
				</ol>
      </section>
    </>
  )
}
