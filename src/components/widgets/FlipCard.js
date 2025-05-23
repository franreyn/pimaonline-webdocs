import { useRef, useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

export default function FlipCard() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy code");

  useEffect(() => {
    const flipCards = document.querySelectorAll(".flip-card");

    const handleClick = (event) => {
      const target = event.currentTarget;
      const innerFlipCard = target.querySelector(".inner-card");
      const sibSelectInnerCard = target.querySelector("div");

      if (innerFlipCard) {
        innerFlipCard.offsetHeight;
        innerFlipCard.classList.toggle("flip");
      } else if (sibSelectInnerCard) {
        sibSelectInnerCard.offsetHeight;
        sibSelectInnerCard.classList.toggle("flip");
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleClick(event);
      }
    };

    flipCards.forEach((card) => {
      card.addEventListener("click", handleClick);
      card.addEventListener("keydown", handleKeyDown);
    });

    return () => {
      flipCards.forEach((card) => {
        card.removeEventListener("click", handleClick);
        card.removeEventListener("keydown", handleKeyDown);
      });
    };
  }, []);

	const [showCode, setShowCode] = useState(false);

	useEffect(() => {
		if (showCode) {
			hljs.highlightElement(codeRef.current); 
		}
	}, [showCode]);

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
    <section className="wd-content" id="toc-flip-card">
      <h2 id="flip-card" className="section-top anchor">
        Flip Card
      </h2>
      <p>
        Use <strong>Flip Card</strong> as a flashcard with a front and back of the card, you can allow students to view terms and definitions separately.
      </p>
      <p>
        Use <span className="wd-monospace">.flip-card-group</span> to wrap your flip cards.
      </p>
      <p>
        Within the <span className="wd-monospace">.flip-card-group</span> add flip cards each with their own term and definition.
      </p>
      <p>Apply the <span className="wd-monospace">.long</span> class to the <span className="wd-monospace">.flip-card-group</span> container to make the height of the flip cards larger.</p>
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="flip-card-group">
            <div className="flip-card">
						<div className="inner-card">
						<div className="front">Alliteration<div className="overlay">Your front text here</div></div>
						<div className="back">Alliteration is the repetition of the same consonant sound at the beginning of closely connected words. It is often used to create rhythm, emphasize particular phrases, or enhance the musical quality of language. An example is "She sells seashells by the seashore," where the "s" sound is repeated at the start of several words.<div className="overlay">Your back text here</div></div>
					</div>
            </div>
            <div className="flip-card">
						<div className="inner-card">
						<div className="front">Metaphor<div className="overlay">Your front text here</div></div>
						<div className="back">A metaphor is a figure of speech that directly compares one thing to another, suggesting they are alike in some way. Unlike similes, metaphors do not use "like" or "as" for the comparison. For example, in the phrase "time is a thief," time is compared to a thief, implying it steals moments from our lives.<div className="overlay">Your back text here</div></div>
					</div>
            </div>
          </div>
        </div>
        <div className="wd-btn-container">
					<button
						className="wd-toggle-btn"	onClick={() => setShowCode(!showCode)}>
						{showCode ? "Hide code" : "Show code"}
					</button>
					{showCode && (
					<button className="wd-copy-btn" onClick={handleCopyCode}>
						{buttonText}
					</button>
					)}
        </div>
				{showCode && (
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={codeRef}>
              {String.raw`<div class="flip-card-group">
  <div class="flip-card">
    <div class="inner-card">
      <div class="front">Alliteration<div class="overlay">Your front text here</div></div>
      <div class="back">Alliteration is the repetition of the same consonant sound at the beginning of closely connected words. It is often used to create...<div class="overlay">Your back text here</div></div>
    </div>
  </div>
  <div class="flip-card">
    <div class="inner-card">
      <div class="front">Metaphor.<div class="overlay">Your front text here</div></div>
      <div class="back"> A metaphor is a figure of speech that directly compares one thing to another, suggesting they are...<div class="overlay">Your back text here</div></div>
    </div>
  </div>
</div>`}
            </code>
          </pre>
        </div>
				)}
      </div>
    </section>
  );
}
