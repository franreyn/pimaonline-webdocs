import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function TemplateSidebar() {
  const [tocOpen, setTocOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const router = useRouter();

  const sections = useRef([
    'toc-one-column', 'toc-one-column-1', 'toc-one-column-2', 'toc-one-column-3', 'toc-one-column-4', 'toc-one-column-5', 'toc-one-column-6',
    'toc-two-column', 'toc-two-column-1', 'toc-two-column-2', 'toc-two-column-3', 'toc-two-column-4', 'toc-two-column-5', 'toc-two-column-6',
    'toc-sow', 'toc-sow-1', 'toc-sow-2'
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
        <p>Templates</p>
      </button>
      <button className={`close-btn ${tocOpen ? 'show-close-btn' : 'hide-close-btn'}`} onClick={closeSidebar}>
        <span></span>
        <span></span>
      </button>
      <ul className={`wd-sidebar ${tocOpen ? 'show-toc' : 'hide-toc'}`}>
        <li className={router.pathname === '/templates' ? 'active-page' : ''}><Link href="/templates">Templates</Link>
          <ul>
            <li className={activeId === 'toc-one-column' ? 'is-current' : ''}>
              <Link href="/templates/#one-column-templates" className="toc-one-column">One Column Templates</Link>
              <ul>
                <li className={activeId === 'toc-one-column-1' ? 'is-current' : ''}>
                  <Link href="/templates/OneColumn1/#one-column-1" className="toc-one-column-1">Inspirational Structure</Link>
                </li>
                <li className={activeId === 'toc-one-column-2' ? 'is-current' : ''}>
                  <Link href="/templates/OneColumn2/#one-column-2" className="toc-one-column-2">Organized Welcome</Link>
                </li>
                <li className={activeId === 'toc-one-column-3' ? 'is-current' : ''}>
                  <Link href="/templates/OneColumn3/#one-column-3" className="toc-one-column-3">Content Roadmap</Link>
                </li>
                <li className={activeId === 'toc-one-column-4' ? 'is-current' : ''}>
                  <Link href="/templates/OneColumn4/#one-column-4" className="toc-one-column-4">Clean Grids</Link>
                </li>
                <li className={activeId === 'toc-one-column-5' ? 'is-current' : ''}>
                  <Link href="/templates/OneColumn5/#one-column-5" className="toc-one-column-5">Detailed Intro</Link>
                </li>
                <li className={activeId === 'toc-one-column-6' ? 'is-current' : ''}>
                  <Link href="/templates/OneColumn6/#one-column-6" className="toc-one-column-6">Overview Basics</Link>
                </li>
              </ul>
            </li>
            <li className={activeId === 'toc-two-column' ? 'is-current' : ''}>
              <Link href="/templates/#two-column-templates" className="toc-two-column">Two Column Templates</Link>
              <ul>
                <li className={activeId === 'toc-two-column-1' ? 'is-current' : ''}>
                  <Link href="/templates/TwoColumn1/#two-column-1" className="toc-two-column-1">Interactive Introductions</Link>
                </li>
                <li className={activeId === 'toc-two-column-2' ? 'is-current' : ''}>
                  <Link href="/templates/TwoColumn2/#two-column-2" className="toc-two-column-2">Warm Welcome</Link>
                </li>
                <li className={activeId === 'toc-two-column-3' ? 'is-current' : ''}>
                  <Link href="/templates/TwoColumn3/#two-column-3" className="toc-two-column-3">Key Topics & Tasks</Link>
                </li>
                <li className={activeId === 'toc-two-column-4' ? 'is-current' : ''}>
                  <Link href="/templates/TwoColumn4/#two-column-4" className="toc-two-column-4">Learning Medley</Link>
                </li>
                <li className={activeId === 'toc-two-column-5' ? 'is-current' : ''}>
                  <Link href="/templates/TwoColumn5/#two-column-5" className="toc-two-column-5">Course Clarity</Link>
                </li>
                <li className={activeId === 'toc-two-column-6' ? 'is-current' : ''}>
                  <Link href="/templates/TwoColumn6/#two-column-6" className="toc-two-column-6">Visual Overview</Link>
                </li>
              </ul>
            </li>
            <li className={activeId === 'toc-sow' ? 'is-current' : ''}>
              <Link href="/templates/#sow-templates" className="toc-sow">SOW Templates</Link>
              <ul>
                <li className={activeId === 'toc-sow-1' ? 'is-current' : ''}>
                  <Link href="/templates/SOW1/#sow-1" className="toc-sow-1">Schedule Overview</Link>
                </li>
                <li className={activeId === 'toc-sow-2' ? 'is-current' : ''}>
                  <Link href="/templates/SOW2/#sow-2" className="toc-sow-2">Module-by-Module</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}
