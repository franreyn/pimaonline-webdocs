import { useEffect, useRef, useState } from 'react';

export default function FlipCard() {
  const codeRef = useRef(null);
  const [buttonText, setButtonText] = useState('Copy code');

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
    <section className="wd-content" id="toc-flip-card">
      <h2 id="flip-card" className="section-top">
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
      <div className="wd-window">
        <div className="wd-visual-ex">
          <div className="flip-card-group">
            <div className="flip-card">
              <div className="inner-card">
                <div className="front">This is the term. The term has a brief description of the thing or it is simply one word.<div className="overlay">Your front text here</div></div>
                <div className="back">This is the definition. The definition can be long or short it just depends on what it is defining. This is an extra long definition of something important and we don't want it to get cut off so we're going to make this a large flip card and give it a special class to helps resize it. If it does go past this certain size we can make it full widget even.  But I can't type enough to breka the smaller one so it must be a pretty big definition.          <div className="overlay">Your back text here</div></div>
              </div>
            </div>
            <div className="flip-card">
              <div className="inner-card">
                <div className="front">This is the term. The term has a brief description of the thing or it is simply one word.<div className="overlay">Your front text here</div></div>
                <div className="back">This is the definition. The definition can be long or short it just depends on what it is defining. This is an extra long definition of something important and we don't want it to get cut off so we're going to make this a large flip card and give it a special class to helps resize it. If it does go past this certain size we can make it full widget even.  But I can't type enough to breka the smaller one so it must be a pretty big definition.          <div className="overlay">Your back text here</div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="wd-html-code">
          <pre>
            <code className="language-html" ref={codeRef}>
              {String.raw`          
              <div class="flip-card-group">
              <div class="flip-card">
              <div class="inner-card">
                <div class="front">This is the term. The term has a brief description of the thing or it is simply one word.<div class="overlay">Your front text here</div></div>
                <div class="back">This is the definition. The definition can be long or short it just depends on what it is defining. This is an extra long definition of something important and we don't want it to get cut off so we're going to make this a large flip card and give it a special class to helps resize it. If it does go past this certain size we can make it full widget even.  But I can't type enough to breka the smaller one so it must be a pretty big definition.          <div class="overlay">Your back text here</div></div>
            </div>
                <div class="flip-card">
                  <div class="inner-card">
                    <div class="front">This is the term. The term has a brief description of the thing or it is simply one word.<div class="overlay">Your front text here</div></div>
                    <div class="back">This is the definition. The definition can be long or short it just depends on what it is defining. This is an extra long definition of something important and we don't want it to get cut off so we're going to make this a large flip card and give it a special class to helps resize it. If it does go past this certain size we can make it full widget even.  But I can't type enough to breka the smaller one so it must be a pretty big definition.          <div class="overlay">Your back text here</div></div>
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
