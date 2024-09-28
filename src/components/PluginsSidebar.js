import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function PluginsSidebar() {
  const [tocOpen, setTocOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const router = useRouter();

  const sections = useRef([
    "toc-animation-library", "toc-custom-combos", "toc-dark-mode", "toc-focus-text", "toc-large-text", "toc-narrow-width", "toc-view-options"
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Adjust the offset as needed

      const currentSection = sections.current.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
      });

      if (currentSection !== activeId) {
        setActiveId(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeId]);

  const toggleTOC = () => {
    setTocOpen(!tocOpen);
  };

  const closeSidebar = () => {
    setTocOpen(false);
  };

  return (
    <>
      <button className="toc-btn" onClick={toggleTOC}>
        <Image className="toc-icon" src="/images/toc.svg" alt="table of content open button" width={20} height={16} />
        <p>Plugins Content</p>
      </button>
      <button className={`close-btn ${tocOpen ? "show-close-btn" : "hide-close-btn"}`} onClick={closeSidebar}>
        <span></span>
        <span></span>
      </button>
      <ul className={`wd-sidebar ${tocOpen ? "show-toc" : "hide-toc"}`}>
        <li className={`
          ${activeId === "toc-animation-library" ? "is-current" : ""} 
          ${router.pathname === "/plugins" ? "active-page" : ""}
        `}>
          <Link href="/plugins/#animation-library" className="toc-animation-library">Animation Library</Link>
        </li>
        <li className={router.pathname === "/plugins" ? "active-page" : ""}><Link href="/plugins">View Options</Link>
          <ul>
            <li className={activeId === "toc-dark-mode" ? "is-current" : ""}>
              <Link href="/plugins/#dark-mode" className="toc-dark-mode">Dark Mode</Link>
            </li>
            <li className={activeId === "toc-focus-text" ? "is-current" : ""}>
              <Link href="/plugins/#focus-text" className="toc-focus-text">Focus Text</Link>
            </li>
            <li className={activeId === "toc-large-text" ? "is-current" : ""}>
              <Link href="/plugins/#large-text" className="toc-large-text">Large Text</Link>
            </li>
            <li className={activeId === "toc-narrow-width" ? "is-current" : ""}>
              <Link href="/plugins/#narrow-width" className="toc-narrow-width">Narrow Width</Link>
            </li>
            <li className={activeId === "toc-custom-combos" ? "is-current" : ""}>
              <Link href="/plugins/#custom-combos" className="toc-custom-combos">Custom Combinations</Link>
            </li>
            <li className={activeId === "toc-view-options" ? "is-current" : ""}>
              <Link href="/plugins/#view-options" className="toc-view-options">All View Options</Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}
