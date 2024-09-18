import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function D2LHelpSidebar() {
  const [tocOpen, setTocOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const router = useRouter();

  const sections = useRef([
    "toc-how-to-add-template",
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
        <p>D2L Help Articles</p>
      </button>
      <button className={`close-btn ${tocOpen ? "show-close-btn" : "hide-close-btn"}`} onClick={closeSidebar}>
        <span></span>
        <span></span>
      </button>
      <ul className={`wd-sidebar ${tocOpen ? "show-toc" : "hide-toc"}`}>
        <li className={router.pathname === "/d2l-help" ? "active-page" : ""}><Link href="/d2l-help">D2L Help Articles</Link>
          <ul>
            <li className={activeId === "toc-how-to-add-template" ? "is-current" : ""}>
              <Link href="/d2l-help/#how-to-add-template" className="toc-caption">How to add a template</Link>
            </li>
						<li className={activeId === "toc-how-to-add-panopto" ? "is-current" : ""}>
              <Link href="/d2l-help/#how-to-add-panopto" className="toc-caption">How to add a Panopto video</Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}
