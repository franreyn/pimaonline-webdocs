import { useRef, useState } from "react";

export default function ExpandableBanner() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");

  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [overlayImgSrc, setOverlayImgSrc] = useState("");

  const handleCopyCode = () => {
    const codeElement = codeRef.current;
    const range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    setButtonText("Copied!");
    setTimeout(() => setButtonText("Copy code"), 2000);
  };

  const handleExpandImage = (src) => {
    setOverlayImgSrc(src);
    setOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setOverlayOpen(false);
    setOverlayImgSrc("");
  };

  return (
    <section className="wd-content" id="toc-expandable-banner">
      <h2 id="expandable-banner" className="section-top anchor">
        Expandable Banner
      </h2>
      <p>Users are able to display the full size of banner images with the <strong>Expandable Banner</strong>.</p>
      <p>Add the <span className="wd-monospace">expandable-banner</span> class to <span className="wd-monospace">&lt;header class="header"&gt;&lt;header&gt;</span> to enable the Expandable Banner.</p>
      <p>Enabling the Expandable Banner will add a button to the banner image that allows users to expand the image to its full size. Clicking on the button opens an overlay that includes the full image and the optional caption/description.</p>
      <p>The Expandable Banner comes with a few options. Users can display:</p>
      <ol className="numbered-list">
        <li>An image with <span className="wd-monospace">no description</span>.
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>
              {buttonText}
            </button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`// This option has no alt text and no data-description attribute
<header className="header expandable-banner">
  <img src="/images/widgets/expandable-banner/portrait-art.jpg" alt="" />
  <div class="text-container">
    <h1>Module 1: Lorem ipsum dolor</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  </div>
</header>`}
              </code>
            </pre>
          </div>        
        </li>
        <li>An image that uses the <span className="wd-monospace">alt text as the description</span>. Alt text should be <span className="wd-monospace">short and concise</span>. If the description is longer and more detailed, use the next option.
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>
              {buttonText}
            </button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`// This option contains a short alt text that will display as a caption
<header className="header expandable-banner">
  <img src="/images/widgets/expandable-banner/portrait-art.jpg" alt="The Salon of Hercules ceiling painting in the Palace of Versailles" />
  <div class="text-container">
    <h1>Module 1: Lorem ipsum dolor</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  </div>
</header>`}
              </code>
            </pre>
          </div> 
        </li>
        <li>An image with a <span className="wd-monospace">detailed description</span> that uses the <span className="wd-monospace">data-description attribute</span>.
          <div className="wd-btn-container">
            <button className="wd-copy-btn" onClick={handleCopyCode}>
              {buttonText}
            </button>
          </div>
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={codeRef}>
                {String.raw`// This option also contains a more detailed data-description attribute that will display as a caption
<header className="header expandable-banner">
  <img src="/images/widgets/expandable-banner/portrait-art.jpg" alt="The Salon of Hercules ceiling painting in the Palace of Versailles" data-description="The Salon of Hercules ceiling painting in the Palace of Versailles, completed by François Lemoyne in 1736, is a grand Baroque masterpiece titled The Apotheosis of Hercules. Covering an expansive 1,400 square feet, the fresco depicts Hercules ascending to Mount Olympus, welcomed by the gods in a dramatic and dynamic composition filled with swirling clouds, rich colors, and expressive figures." />
  <div class="text-container">
    <h1>Module 1: Lorem ipsum dolor</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  </div>
</header>`}
              </code>
            </pre>
          </div> 
        </li>
      </ol>
      <h3>Expandable banner sample</h3>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <header className="header expandable-banner">
            <img
              src="/images/widgets/expandable-banner/portrait-art.jpg"
              alt=""
              className="banner-img"
            />
            <button
              className="expand-banner-btn"
              aria-label="View Full-Size Banner Image"
              onClick={() =>
                handleExpandImage("/images/widgets/expandable-banner/portrait-art.jpg")
              }
            ></button>
            <div className="text-container">
              <h1>Module 1: Lorem ipsum dolor</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </header>
        </div>
        <div className="wd-btn-container">
          <button className="wd-copy-btn" onClick={handleCopyCode}>
            {buttonText}
          </button>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={codeRef}>
              {String.raw`<header className="header expandable-banner">
  <img src="/images/widgets/expandable-banner/portrait-art.jpg" alt="" />
  <div class="text-container">
    <h1>Module 1: Lorem ipsum dolor</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  </div>
</header>`}
            </code>
          </pre>
        </div>
      </div>
      {isOverlayOpen && (
        <div
          className="banner-overlay"
          role="dialog"
          aria-modal="true"
          onClick={handleCloseOverlay}
        >
          <button
              className="close-overlay-btn"
              onClick={handleCloseOverlay}
              aria-label="Close full-size image"
            >
              &times;
            </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={overlayImgSrc} alt="Expanded Banner" />
          </figure>
        </div>
      )}
    </section>
  );
}
