import { useRef, useState, useEffect } from 'react';

export default function LockedContent() {
  // State variables
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState('Copy code');
  const [keyStatus, setKeyStatus] = useState(false);

  // useEffect runs in the client side to listen for state changes and have access to the document object
  useEffect(() => {
    const contentUnlockBtn = document.querySelector(".unlock-btn");

    // Triggers the confirmation window for studnet to agree to terms
    const handleUnlockButtonClick = () => {

      // Saves the confirmation response from student
      const confirmed = window.confirm(`Please confirm: ${contentUnlockBtn.textContent}`);

      if (confirmed) {
        // If use clicks ok, then change state variable keyStatus to true
        setKeyStatus(true);
      }
    };

    // Add click event listener to the unlock content button
    contentUnlockBtn.addEventListener("click", handleUnlockButtonClick);

    return () => {
      // Cleanup: Remove event listener when the component is unmounted to avoid confirmation window being triggered twice
      contentUnlockBtn.removeEventListener("click", handleUnlockButtonClick);
    };
  }, []);

  // useEffect here to access document and listen for changes to keyStatus variable
  useEffect(() => {
    checkHiddenContent();
  }, [keyStatus]);

  const checkHiddenContent = () => {
    // Target locked content areas and instruction areas
    const lockedContent = document.querySelectorAll(".locked-content");
    const contentLockInstructions = document.querySelectorAll(".instructions");

    // For each locked content area, adjust visibility based on keyStatus
    lockedContent.forEach((contentArea, index) => {
      if (keyStatus) {
        // Unlocks the content area
        contentArea.classList.add("open");
        // Removes instructions from view
        contentLockInstructions[index].classList.add("complete");
      } else {
        // Locks content area (functionality to re-lock content isn't active currently)
        contentArea.classList.remove("open");

        // Reveals instructions area (functionality to re-lock content isn't active currently)
        contentLockInstructions[index].classList.remove("complete");
      }
    });
  };

  const handleCopyCode = () => {
    const codeElement = codeRef.current;
    const range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    setButtonText('Copied!');

    setTimeout(() => {
      setButtonText('Copy code');
    }, 2000);
  };


  return (
    <section className="wd-content" id="toc-locked-content">
      <h2 id="locked-content" className="section-top">
        Locked Content
      </h2>
      <p>
        Use the <strong>Locked Content Widget</strong> to lock and unlock content.
      </p>
      <p>
        Use <span className="wd-monospace">.locked-content</span> to wrap the content you want hidden.
        Use <span className="wd-monospace">.instructions</span> to inform students about why content is hidden.
        Use <span className="wd-monospace">.unlocked-btn</span> to label the condition for unlocking the content.
      </p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="white-background">
            <div className="locked-content">
              <h2>Partially Visible Area</h2>
              <p>This is some of the text and the beginning of the area that is hidden through the widget. As you continue the content becomes less and less visible. All the way until you can't really see what is underneath it forcing the student to have to unlock the content</p>
            </div>
            <div className="instructions"><p>Instructions here.</p>
              <a className="btn unlock-btn">I have read X, Y, and Z</a>
            </div>
          </div>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={codeRef}>
              {String.raw`<div class="content-body">
  <div class="locked-content">
  <p>Some text used to describe the media object on the left hand side. Side-by-side is multipurpose, so feel free to mix and match text, videos and images.</p>
  </div>
  <div class="instructions">
  Instructions here.
   <a class="unlock-btn">I have read X, Y, and Z</a>
  </div>
</div>`}
            </code>
          </pre>
        </div>
        <div className="wd-btn-container">
          <button className="wd-copy-btn" onClick={handleCopyCode}>{buttonText}</button>
        </div>
      </div>
    </section>
  );
}
