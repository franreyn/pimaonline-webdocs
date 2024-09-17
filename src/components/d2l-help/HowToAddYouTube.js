import styles from "../../styles/d2l.module.css";

export default function HowToAddYouTube() {
  return (
    <>
      <section id="toc-how-to-add-youtube">
        <h2 id="how-to-add-youtube" className="section-top anchor">How To Add A YouTube Video</h2>
        <p className="wd-break">Learn how to add a YouTube Video to your course using an embed code and media container.</p>
        <ol className={styles.d2lInstructions}>
          <li><p>Locate the YouTube video you want to embed and click on the "Share" button.</p>
          <img src="/images/d2l-help/how-to-add-youtube/step1.png" alt="Step 1"></img></li>
          <li><p>This popup menu will appear. Click on the "Embed" icon or text.</p>
          <img src="/images/d2l-help/how-to-add-youtube/step2.png" alt="Step 2"></img></li>
          <li><p>A preview of the video and code will appear in a new popup menu. Click on the "Copy" button.</p>
          <img src="/images/d2l-help/how-to-add-youtube/step3.png" alt="Step 3"></img></li>
          <li><p>Navigate to D2L and open the page where you wish to add a YouTube video. Click on the caret next to the page title.</p>
          <img src="/images/d2l-help/how-to-add-youtube/step4.png" alt="Step 4"></img></li>
          <li><p>From the dropdown, click the "Edit HTML" option.</p>
          <img src="/images/d2l-help/how-to-add-youtube/step5.png" alt="Step 5"></img></li>
          <li><p>From the editor toolbar, select the "view source code" button.</p>
          <img src="/images/d2l-help/how-to-add-youtube/step6.png" alt="Step 6"></img></li>
          <li><p>Use "Command + F" or "Control + F" to search for "media-container".</p>
          <img src="/images/d2l-help/how-to-add-youtube/step7.png" alt="Step 7"></img></li>
          <li><p>Click the "Next match" button to search the page for the correct code.</p>
          <img src="/images/d2l-help/how-to-add-youtube/step8.png" alt="Step 8"></img></li>
          <li><p>If you cannot find a match, add a media container to the page. (See the <a href="https://pimaonline-webdocs.netlify.app/widgets#media-container">Media Container</a> article for an example.)</p>
          <img src="/images/d2l-help/how-to-add-youtube/step8a.png" alt="Step 8a"></img></li>
          <li><p>After adding a media container, or finding a match, the code should look like this.</p>
          <img src="/images/d2l-help/how-to-add-youtube/step9.png" alt="Step 9"></img></li>
          <li><p>With the code that you copied from YouTube, select the &lt;iframe&gt; code and copy and paste it in.</p>
          <img src="/images/d2l-help/how-to-add-youtube/step10.png" alt="Step 10"></img></li>
          <li><p>After the &lt;iframe&gt; content has been replaced, save your changes.</p>
          <img src="/images/d2l-help/how-to-add-youtube/step11.png" alt="Step 11"></img></li>
        </ol>
      </section>
    </>
  );
}
