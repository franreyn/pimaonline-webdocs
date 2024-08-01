import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Sidebar() {
  const [tocOpen, setTocOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const router = useRouter();

  const sections = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

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
        <p>Docs Content</p>
      </button>
      <button className={`close-btn ${tocOpen ? "show-close-btn" : "hide-close-btn"}`} onClick={closeSidebar}>
        <span></span>
        <span></span>
      </button>
      <ul className={`wd-sidebar ${tocOpen ? "show-toc" : "hide-toc"}`}>
        <li className={router.pathname === "/getting-started" ? "active-page" : ""}>
          <Link href="/getting-started">Getting Started</Link>
          <ul>
            <li className={activeId === "toc-quick-start" ? "is-current" : ""}>
              <Link href="getting-started/#quick-start">Quick Start</Link>
            </li>
            <li className={activeId === "toc-manual-setup" ? "is-current" : ""}>
              <Link href="getting-started/#manual-setup">Manual Setup</Link>
            </li>
            <li className={activeId === "toc-community" ? "is-current" : ""}>
              <Link href="getting-started/#community">Community</Link>
            </li>
          </ul>
        </li>
        <li className={router.pathname === "/layouts" ? "active-page" : ""}>
          <Link href="/layouts">Layouts</Link>
          <ul>
            <li className={activeId === "toc-one-column-layout" ? "is-current" : ""}>
              <Link href="layouts/#one-column-layout">One Column</Link>
            </li>
            <li className={activeId === "toc-two-column-layout" ? "is-current" : ""}>
              <Link href="layouts/#two-column-layout">Two Column</Link>
            </li>
            <li className={activeId === "toc-three-section-layout" ? "is-current" : ""}>
              <Link href="layouts/#three-section-layout">Three Section</Link>
            </li>
          </ul>
        </li>
        <li className={router.pathname === "/tips" ? "active-page" : ""}>
          <Link href="/tips">Tips &amp; Tricks</Link>
          <ul>
            <li className={activeId === "toc-tip-1" ? "is-current" : ""}>
              <Link href="tips/#tip-1">Utilizing Templates</Link>
            </li>
            <li className={activeId === "toc-tip-2" ? "is-current" : ""}>
              <Link href="tips/#tip-2">Page Titles</Link>
            </li>
            <li className={activeId === "toc-tip-3" ? "is-current" : ""}>
              <Link href="tips/#tip-3">Creative Widgets</Link>
            </li>
            <li className={activeId === "toc-tip-4" ? "is-current" : ""}>
              <Link href="tips/#tip-4">Custom Styles</Link>
            </li>
         </ul>
        </li>
      </ul>
    </>
  )
}
