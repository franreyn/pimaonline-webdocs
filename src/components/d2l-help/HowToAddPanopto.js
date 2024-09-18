import styles from "../../styles/d2l.module.css";

export default function HowToAddPanopto() {
  return (
    <>
		<section id="toc-how-to-add-panopto">
			<h2 id="how-to-add-panopto" className="section-top anchor">How To Add A Panopto Video</h2>
			<p className="wd-break">Learn how to add a Panopto video to your course.</p>
			<ol className={styles.d2lInstructions}>
				<li>
					<p>Navigate to the page where you wish to add a Panopto video.</p>
					<img src="/images/d2l-help/how-to-add-panopto/step1.png"></img>
				</li>
				<li>
					<p>From the dropdown, select the "Edit HTML" option.</p>
					<img src="/images/d2l-help/how-to-add-panopto/step2.png"></img>
					</li>
				<li>
					<p>Select the area that you want to add the Panopto video.</p>
					<img src="/images/d2l-help/how-to-add-panopto/step3.png"></img>
					</li>
				<li>
					<p>From the editor toolbar select the "insert stuff" button.</p>
					<img src="/images/d2l-help/how-to-add-panopto/step4.png"></img>
					</li>
				<li>
					<p>Scroll down from the "Insert Stuff" dropdown and select "Panopto Embed".</p>
					<img src="/images/d2l-help/how-to-add-panopto/step5.png"></img>
					</li>
				<li>
				<p>The Panopto popup will appear. You may choose a video from your folder.</p>
					<img src="/images/d2l-help/how-to-add-panopto/step6.png"></img>
					</li>
				<li>
				<p>To select a different folder, click on the drop down to access other folders.</p>
					<img src="/images/d2l-help/how-to-add-panopto/step7.png"></img>
					</li>
				<li>
					<p>After selecting the correct folder, select the video you want on the page. Then click the "Insert" button.</p>
					<img src="/images/d2l-help/how-to-add-panopto/step8.png"></img>
					</li>
				<li>
				<p>A new popup with a preview will load. Ensure that the video is correct, then click the "Insert" button.</p>
					<img src="/images/d2l-help/how-to-add-panopto/step9.png"></img>
					</li>
					<li>
					<p>You should now see the Panopto video embedded on the page.</p>
						<img src="/images/d2l-help/how-to-add-panopto/step10.png"></img>
					</li>
					<li>
					<p>Drag your mouse over the video so it is highlighted, showing you've selected the Panopto video.</p>
						<img src="/images/d2l-help/how-to-add-panopto/step11.png"></img>
					</li>
					<li>
					<p>While the video is selected, click on the "view source code" button.</p>
						<img src="/images/d2l-help/how-to-add-panopto/step12.png"></img>
					</li>
					<li>
					<p>The Panopto HTML code should be highlighted in blue.</p>
						<img src="/images/d2l-help/how-to-add-panopto/step13.png"></img>
					</li>
					<li>
					<p>Replace the code around the &lt;iframe&gt; with the code for a media-container. (For an example, see the <a href="https://pimaonline-webdocs.netlify.app/widgets#media-container">Media Container article</a>)<br/>Please note that the &lt;iframe&gt; code remains the same, only the HTML around the &lt;iframe&gt; should change.</p>
						<img src="/images/d2l-help/how-to-add-panopto/step14.png"></img>
					</li>
					<li>
					<p>Save your changes</p>
						<img src="/images/d2l-help/how-to-add-panopto/step15.png"></img>
					</li>
			</ol>
		</section>
		</>
	)};