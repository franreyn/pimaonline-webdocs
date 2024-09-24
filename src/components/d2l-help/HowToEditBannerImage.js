import styles from "../../styles/d2l.module.css";

export default function HowToEditBannerImage() {
  return (
    <>
      <section id="toc-how-to-edit-banner-image">
        <h2 id="how-to-edit-banner-image" className="section-top anchor">How to Edit the Banner Image</h2>
        <p className="mb-8">Learn how to edit the banner image that is located at the top of the web page.</p>
				<ol className={styles.d2lInstructions}>
					<li><p>Click the small caret icon next to the page title.</p>
						<img src="/images/d2l-help/edit-banner-image/step1.png"></img>
					</li>
					<li><p>From the dropdown, select the "Edit HTML" option.</p>
						<img src="/images/d2l-help/edit-banner-image/step2.png"></img>
					</li>
					<li><p>The web page will switch to edit mode. Click on the banner image area to see a blue outline indicating that it's selected.</p>
						<img src="/images/d2l-help/edit-banner-image/step3.png"></img>
					</li>
					<li><p>When the banner image area is selected, right-click to see a box labeled "Image..." and click it.</p>
						<img src="/images/d2l-help/edit-banner-image/step4.png"></img>
					</li>
					<li><p>A dialogue box will appear. Edit the source to change the image.</p>
						<img src="/images/d2l-help/edit-banner-image/step5.png"></img>
					</li>
					<li><p>Leave this box un-checked.</p>
						<img src="/images/d2l-help/edit-banner-image/step6.png"></img>
					</li>
					<li><p>Even though this image is decorative, please add an alternative description to improve user experience.</p>
						<img src="/images/d2l-help/edit-banner-image/step7.png"></img>
					</li>
					<li><p>After making your edits, click the "save" button.</p>
						<img src="/images/d2l-help/edit-banner-image/step8.png"></img>
					</li>
					<li><p>Now your image should replace the old one.</p>
						<img src="/images/d2l-help/edit-banner-image/step9.png"></img>
					</li>
				</ol>
      </section>
    </>
  )
}
