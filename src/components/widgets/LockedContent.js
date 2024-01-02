import { useRef, useState, useEffect } from 'react';

export default function LockedContent() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState('Copy code');


  useEffect(() => {
    // Query selectors to select elements by their CSS classes
    const contentUnlockBtns = document.querySelectorAll(".unlock-btn");
    const lockedContent = document.querySelectorAll(".locked-content");
    const contentLockInstructions = document.querySelectorAll(".instructions");

    // Content Lock Widget
    console.log("a")
    console.log(contentUnlockBtns)

    // Save text content of unlock button
    const unlockContent = [];

    contentUnlockBtns.forEach((button) => {
      unlockContent.push(button.textContent)
    })

    // Create an object that keeps track of keys and their statuses
    let contentLockData = JSON.parse(localStorage.getItem("contentLockData")) || {};

    if (lockedContent) {

      // Checks the URL for the course number
      // const currentURL = window.parent.location.href;
      // const match = currentURL.match(/\/content\/(\d+)/);
      // const courseNumber = match ? match[1] : null;

      // Code for web docs to immitate the course number
      const courseNumber = 1234;

      // Add event listener for storage changes
      window.addEventListener("storage", (event) => {
        if (courseNumber) {
          handleLocalStorageUpdate(event, courseNumber);
        }
      });

      if (courseNumber) {

        // Check if the course data object has the course number
        if (!contentLockData.hasOwnProperty(courseNumber)) {
          contentLockData[courseNumber] = {
            keys: {},
            id: 0,
          };
        } else {
          // Reset the id count to 0 when the page is loaded
          contentLockData[courseNumber].id = 0;
        }

        // Get key number for each content area
        lockedContent.forEach((contentArea, index) => {
          let keyNum = contentArea.getAttribute("data-key");

          // Check if key already exists within the course, if it doesn't, add the key
          if (!contentLockData[courseNumber].keys[keyNum]) {

            // Add the key to the course keys
            contentLockData[courseNumber].keys[keyNum] = false;
          }
        });


        // Add event listener for unlock buttons outside the loop
        contentUnlockBtns.forEach((button, index) => {
          button.addEventListener("click", function (event) {

            const keyNum = lockedContent[index].getAttribute("data-key");

            // Add alert to ensure the user confirms the action to unlock the content
            const confirmed = window.confirm(`Please confirm: ${unlockContent[index]}`)

            if (confirmed) {
              // Toggle the key status
              contentLockData[courseNumber].keys[keyNum] = !contentLockData[courseNumber].keys[keyNum];

              // Toggle classes based on key status
              if (contentLockData[courseNumber].keys[keyNum]) {
                lockedContent[index].classList.add("open");
                contentLockInstructions[index].classList.add("complete");
              } else {
                lockedContent[index].classList.remove("open");
                contentLockInstructions[index].classList.remove("complete");
              }

              // Save the updated contentLockData object to local storage
              localStorage.setItem("contentLockData", JSON.stringify(contentLockData));

              // Update the hidden content based on the key status
              checkHiddenContent(courseNumber);
            }
          });

          // Apply initial classes based on key status
          const keyNum = lockedContent[index].getAttribute("data-key");

          // Make sure contentLockData[courseNumber] is initialized
          if (!contentLockData[courseNumber]) {
            contentLockData[courseNumber] = {
              keys: {},
              id: 0
            };
          }

          if (contentLockData[courseNumber].keys[keyNum]) {
            lockedContent[index].classList.add("open");
            contentLockInstructions[index].classList.add("complete");
          }
        }); // Add the { once: true } option);

        // Call the checkHiddenContent function initially
        checkHiddenContent(courseNumber);

        // Save the updated contentLockData object to local storage
        localStorage.setItem("contentLockData", JSON.stringify(contentLockData));
      }
    }

    // Function to run when local storage is updated
    function handleLocalStorageUpdate(event, courseNumber) {
      if (event && event.key === "contentLockData" && event.newValue) {
        // Update contentLockData variable
        contentLockData = JSON.parse(event.newValue);
        // Run your code here
        checkHiddenContent(courseNumber);
      }
    }

    // Check content areas function

    function checkHiddenContent(courseNumber) {

      // Get key number for each content area
      lockedContent.forEach((contentArea, index) => {
        let keyNum = contentArea.getAttribute("data-key");
        // Toggle classes based on key status
        if (contentLockData[courseNumber].keys[keyNum]) {
          lockedContent[index].classList.add("open");
          contentLockInstructions[index].classList.add("complete");
        } else {
          lockedContent[index].classList.remove("open");
          contentLockInstructions[index].classList.remove("complete");
        }
      });
    }

  })

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
            <div className="locked-content" data-key="1">
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
