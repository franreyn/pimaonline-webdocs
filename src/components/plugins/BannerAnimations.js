import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/night-owl.css";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("html", html);

const BANNER_SRC = "https://picsum.photos/id/1018/1920/600";

const DIRECTIONS = ["", "left", "right", "top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right"];

const ANIMATIONS = [
  {
    id: "zoomIn",
    title: "Zoom In",
    baseClass: "banner-zoom-in",
    hasDirection: true,
    description: "The banner image scales up slightly after the page loads. Add a direction suffix to set the point the image zooms in toward."
  },
  {
    id: "zoomOut",
    title: "Zoom Out",
    baseClass: "banner-zoom-out",
    hasDirection: true,
    description: "The banner image starts slightly zoomed in and scales back to its normal size. Add a direction suffix to set the point the image zooms out from."
  },
  {
    id: "pan",
    title: "Pan",
    baseClass: "banner-pan",
    hasDirection: true,
    description: "The banner image is enlarged and slowly slides in the chosen direction. Always add a direction suffix, since banner-pan on its own only enlarges the image without moving it."
  },
  {
    id: "fadeIn",
    title: "Fade In",
    baseClass: "banner-fade-in",
    hasDirection: false,
    description: "The banner image fades in after the page loads. It can be combined with any zoom or pan class to run both effects at the same time."
  },
  {
    id: "combined",
    title: "Combining Animations",
    baseClass: "banner-fade-in banner-zoom-in--top-right",
    hasDirection: false,
    description: "Add banner-fade-in alongside a zoom or pan class to fade the image in while it moves."
  }
];

const getBannerClass = (animation, direction) =>
  animation.hasDirection && direction ? `${animation.baseClass}--${direction}` : animation.baseClass;

const getBannerCode = (className) => String.raw`<header class="header">
  <img class="${className}" src="https://picsum.photos/id/1018/1920/600" alt="">
  <div class="text-container">
    <h1>Module 1: Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  </div>
</header>`;

function BannerDemo({ className }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const replay = () => {
    setLoaded(false);
    setTimeout(() => setLoaded(true), 50);
  };

  // Cached images can finish loading before onLoad is attached, and changing the class alone won't restart the animation
  useEffect(() => {
    if (imgRef.current?.complete) {
      replay();
    }
  }, [className]);

  return (
    <>
      <div className="banner-anim-wrap">
        <img ref={imgRef} className={`${className}${loaded ? " loaded" : ""}`} src={BANNER_SRC} alt="" onLoad={() => setLoaded(true)} />
      </div>
      <button className="wd-toggle-btn" onClick={replay}>Replay animation</button>
    </>
  );
}

export default function BannerAnimations() {
  const codeRefs = useRef({});
  const panZoomRef = useRef(null);
  const [buttonTexts, setButtonTexts] = useState({});
  const [showCode, setShowCode] = useState({});
  const [directions, setDirections] = useState({ zoomIn: "", zoomOut: "", pan: "right" });
  const [panZoomKey, setPanZoomKey] = useState(0);

  useEffect(() => {
    Object.entries(showCode).forEach(([id, isShown]) => {
      if (isShown && codeRefs.current[id]) {
        delete codeRefs.current[id].dataset.highlighted;
        hljs.highlightElement(codeRefs.current[id]);
      }
    });
  }, [showCode, directions]);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const toggleCode = (id) => {
    setShowCode(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyCode = async (ref, id) => {
    if (!ref) return;
    try {
      await navigator.clipboard.writeText(ref.textContent);
      setButtonTexts(prev => ({ ...prev, [id]: "Copied!" }));
      setTimeout(() => {
        setButtonTexts(prev => ({ ...prev, [id]: "Copy code" }));
      }, 2000);
    } catch (err) {
      console.error("Copy failed:", err);
      setButtonTexts(prev => ({ ...prev, [id]: "Failed to copy" }));
    }
  };

  return (
    <>
      <section className="wd-content" id="toc-banner-animations">
        <h3 id="banner-animations" className="section-top anchor">Header banner animations</h3>
        <p>Banner animation classes animate the header banner image once when the page loads. Add one of the classes below to the <span className="wd-monospace">&lt;img&gt;</span> inside the <span className="wd-monospace">.header</span> element. The image is hidden until the page finishes loading, then the animation plays and holds on its final frame.</p>
        <ul>
          <li><span className="wd-monospace">banner-zoom-in</span>: scales the image up slightly</li>
          <li><span className="wd-monospace">banner-zoom-out</span>: scales the image down from slightly zoomed in</li>
          <li><span className="wd-monospace">banner-pan</span>: slides the enlarged image in a direction</li>
          <li><span className="wd-monospace">banner-fade-in</span>: fades the image in</li>
        </ul>
        <p>Zoom and pan classes accept a direction suffix, written as two dashes followed by the direction (e.g. <span className="wd-monospace">banner-zoom-in--top-right</span>). A separate direction class is not needed. Available directions are <span className="wd-monospace">left</span>, <span className="wd-monospace">right</span>, <span className="wd-monospace">top</span>, <span className="wd-monospace">bottom</span>, <span className="wd-monospace">top-left</span>, <span className="wd-monospace">top-right</span>, <span className="wd-monospace">bottom-left</span> and <span className="wd-monospace">bottom-right</span>.</p>
        <p>Banner animations are turned off for users who have reduced motion enabled on their device, and they do not play inside the D2L editor.</p>
        {ANIMATIONS.map(animation => {
          const className = getBannerClass(animation, directions[animation.id]);
          return (
            <div key={animation.id}>
              <h4>{animation.title}</h4>
              <p>{animation.description}</p>
              <p>Use the class: <span className="wd-monospace">{className}</span></p>
              {animation.hasDirection && (
                <p>
                  <label htmlFor={`banner-direction-${animation.id}`}>Direction: </label>
                  <select
                    id={`banner-direction-${animation.id}`}
                    value={directions[animation.id]}
                    onChange={(e) => setDirections(prev => ({ ...prev, [animation.id]: e.target.value }))}
                  >
                    {DIRECTIONS.filter(direction => animation.id !== "pan" || direction).map(direction => (
                      <option key={direction || "none"} value={direction}>{direction || "center (no suffix)"}</option>
                    ))}
                  </select>
                </p>
              )}
              <div className="wd-btn-container">
                <button className="wd-toggle-btn" onClick={() => toggleCode(animation.id)}>{showCode[animation.id] ? "Hide code" : "Show code"}</button>
                {showCode[animation.id] && (
                  <button className="wd-copy-btn" onClick={() => handleCopyCode(codeRefs.current[animation.id], animation.id)}>{buttonTexts[animation.id] || "Copy code"}</button>
                )}
              </div>
              {showCode[animation.id] && (
                <div className="wd-html-code">
                  <pre>
                    <code className="language-html" key={className} ref={el => { codeRefs.current[animation.id] = el; }}>
                      {getBannerCode(className)}
                    </code>
                  </pre>
                </div>
              )}
              <br/>
              <div className="wd-window">
                <div className="wd-visual-ex">
                  <BannerDemo className={className} />
                </div>
              </div>
            </div>
          );
        })}
        <h4>Slow Pan &amp; Zoom</h4>
        <p>For a longer, more cinematic effect, add <span className="wd-monospace">data-header-animation="pan-zoom"</span> to the <span className="wd-monospace">.header</span> element instead of adding a class to the image. The banner slowly zooms and pans over 18 seconds, then holds on the zoomed-in frame.</p>
        <div className="wd-btn-container">
          <button className="wd-toggle-btn" onClick={() => toggleCode("panZoom")}>{showCode["panZoom"] ? "Hide code" : "Show code"}</button>
          {showCode["panZoom"] && (
            <button className="wd-copy-btn" onClick={() => handleCopyCode(panZoomRef.current, "panZoom")}>{buttonTexts["panZoom"] || "Copy code"}</button>
          )}
        </div>
        {showCode["panZoom"] && (
          <div className="wd-html-code">
            <pre>
              <code className="language-html" ref={el => { panZoomRef.current = el; codeRefs.current["panZoom"] = el; }}>
              {String.raw`<header class="header" data-header-animation="pan-zoom">
  <img src="https://picsum.photos/id/1018/1920/600" alt="">
  <div class="text-container">
    <h1>Module 1: Lorem ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  </div>
</header>`}
              </code>
            </pre>
          </div>
        )}
        <br/>
        <div className="wd-window">
          <div className="wd-visual-ex">
            <div className="header" data-header-animation="pan-zoom" key={panZoomKey}>
              <img src={BANNER_SRC} alt="" style={{ display: "block", width: "100%" }} />
            </div>
            <button className="wd-toggle-btn" onClick={() => setPanZoomKey(prev => prev + 1)}>Replay animation</button>
          </div>
        </div>
      </section>
    </>
  )
}
