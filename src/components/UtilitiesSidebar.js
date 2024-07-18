import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function UtilitiesSidebar() {
  const [tocOpen, setTocOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const router = useRouter();

  const sections = useRef([
    'toc-caption', 'toc-edit', 'toc-font-sizes', 'toc-highlight', 'toc-labels', 'toc-lead', 'toc-monospace', 
    'toc-bootstrap-icons', 'toc-font-awesome', 'toc-remix-icons'
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

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
        <p>Utilities Content</p>
      </button>
      <button className={`close-btn ${tocOpen ? 'show-close-btn' : 'hide-close-btn'}`} onClick={closeSidebar}>
        <span></span>
        <span></span>
      </button>
      <ul className={`wd-sidebar ${tocOpen ? 'show-toc' : 'hide-toc'}`}>
        <li className={router.pathname === '/utilities' ? 'active-page' : ''}><Link href="/utilities">Inline Classes</Link>
          <ul>
            <li className={activeId === 'toc-caption' ? 'is-current' : ''}>
              <Link href="/utilities/#caption" className="toc-caption">Caption</Link>
            </li>
            <li className={activeId === 'toc-edit' ? 'is-current' : ''}>
              <Link href="/utilities/#edit" className="toc-edit">Edit</Link>
            </li>
            <li className={activeId === 'toc-font-sizes' ? 'is-current' : ''}>
              <Link href="/utilities/#font-sizes" className="toc-font-sizes">Font Sizes</Link>
            </li>
            <li className={activeId === 'toc-highlight' ? 'is-current' : ''}>
              <Link href="/utilities/#highlight" className="toc-highlight">Highlight</Link>
            </li>
            <li className={activeId === 'toc-labels' ? 'is-current' : ''}>
              <Link href="/utilities/#labels" className="toc-labels">Labels</Link>
            </li>
            <li className={activeId === 'toc-lead' ? 'is-current' : ''}>
              <Link href="/utilities/#lead" className="toc-lead">Lead</Link>
            </li>
            <li className={activeId === 'toc-monospace' ? 'is-current' : ''}>
              <Link href="/utilities/#monospace" className="toc-monospace">Monospace</Link>
            </li>
          </ul>
        </li>
        <li className={router.pathname === '/icons' ? 'active-page' : ''}><Link href="/icons">Icon Classes</Link>
          <ul>
            <li className={activeId === 'toc-bootstrap-icons' ? 'is-current' : ''}>
              <Link href="/icons/#toc-bootstrap-icons" className="toc-bootstrap-icons">Bootstrap Icons</Link>
            </li>
            <li className={activeId === 'toc-font-awesome' ? 'is-current' : ''}>
              <Link href="/icons/#toc-font-awesome" className="toc-font-awesome">Font Awesome Icons</Link>
            </li>
            <li className={activeId === 'toc-remix-icons' ? 'is-current' : ''}>
              <Link href="/icons/#toc-remix-icons" className="toc-remix-icons">Remix Icons</Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}
