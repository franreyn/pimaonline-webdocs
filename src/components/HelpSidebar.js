import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function HelpSidebar() {
  const [tocOpen, setTocOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const router = useRouter();

  const sections = useRef([
    "toc-adding-template",
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
        <p>D2L Help Guides</p>
      </button>
      <button className={`close-btn ${tocOpen ? "show-close-btn" : "hide-close-btn"}`} onClick={closeSidebar}>
        <span></span>
        <span></span>
      </button>
      <ul className={`wd-sidebar ${tocOpen ? "show-toc" : "hide-toc"}`}>
        <li className={router.pathname === "/help" ? "active-page" : ""}><Link href="/help">D2L Help Guides</Link>
          <ul>
            <li className={activeId === "toc-adding-template" ? "is-current" : ""}>
              <Link href="/help/AddingTemplates" className="toc-caption">Adding a Template</Link>
            </li>
						<li className={activeId === "toc-adding-youtube" ? "is-current" : ""}>
              <Link href="/help/AddingYouTube" className="toc-caption">Adding a YouTube Video</Link>
            </li>
            <li className={activeId === "toc-adding-panopto" ? "is-current" : ""}>
              <Link href="/help/AddingPanopto" className="toc-caption">Adding a Panopto Video</Link>
            </li>
            <li className={activeId === "toc-adding-content-body" ? "is-current" : ""}>
              <Link href="/help/AddingContentBody" className="toc-caption">Adding a Content Body</Link>
            </li>
            <li className={activeId === "toc-accessing-course-files" ? "is-current" : ""}>
              <Link href="/help/AccessingCourseFiles" className="toc-caption">Accessing Course Files</Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}
