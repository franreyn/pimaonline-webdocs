import styles from "../../styles/d2l.module.css";
import { useEffect, useRef, useState } from "react";
import "highlight.js/styles/night-owl.css";
export default function HowToAddContentBody() {

	const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");

	const handleCopyCode = () => {
    const codeElement = codeRef.current;
    const range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    setButtonText("Copied!");

    setTimeout(() => {
      setButtonText("Copy code");
    }, 2000);
  };

  return (
    <>
      <section id="toc-how-to-add-content-body">
        <h2 id="how-to-add-content-body" className="section-top anchor">How To Add A Content Body</h2>
        <p className="mb-8">Learn how to add a content body to your page in D2L.</p>
				<ol className={styles.d2lInstructions}>
					<li>
						<p>Click on the caret next to the page title.</p>
						<img src="/images/d2l-help/how-to-add-content-body/step1.png" alt="step 1"/>
					</li>
					<li>
						<p>From the dropdown, select the "Edit HTML" option.</p>
						<img src="/images/d2l-help/how-to-add-content-body/step2.png" alt="step 2"/>
					</li>
					<li>
						<p>Select the element directly above where you want to add a content body.<br/>(In this example, I'll select the blockquote to find the content directly above where I want to insert a content body.)</p>
						<img src="/images/d2l-help/how-to-add-content-body/step3.png" alt="step 3"/>
					</li>
					<li>
						<p>While the element is selected, click on the "view source code" button.</p>
						<img src="/images/d2l-help/how-to-add-content-body/step4.png" alt="step 4"/>
					</li>
					<li>
						<p>Locate the content body code that contains the element you highlighted.</p>
						<img src="/images/d2l-help/how-to-add-content-body/step5.png" alt="step 5"/>
					</li>
					<li>
						<p>Locate the small arrow on the left side and click it to collapse the content body so it looks like the image below.</p>
						<img src="/images/d2l-help/how-to-add-content-body/step6.png" alt="step 6"/>
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
						<img src="/images/d2l-help/how-to-add-content-body/step7.png" alt="step 7"/>

					</li>
					<li>
						<p>Click on the "save" button to save your changes.</p>
						<img src="/images/d2l-help/how-to-add-content-body/step8.png" alt="step 8"/>
					</li>
					<li> 
						<p>You should now see your content body in the page.</p>
						<img src="/images/d2l-help/how-to-add-content-body/step9.png" alt="step 9"/>
					</li>
					</ol>
				</section>
				</>
	)}