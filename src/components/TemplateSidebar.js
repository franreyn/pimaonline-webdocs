import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Scrollspy from "react-scrollspy";
import { useRouter } from "next/router";

export default function TemplateSidebar() {
  const [tocOpen, setTocOpen] = useState(false);

  const toggleTOC = () => {
    setTocOpen(!tocOpen);
  };

  const closeSidebar = () => {
    setTocOpen(false);
  };

  const router = useRouter();

  return (
    <>
      <button className="toc-btn" onClick={toggleTOC}>
        <Image className="toc-icon" src="/images/toc.svg" alt="table of content open button" width={20} height={16} />
        <p>Widget Content</p>
      </button>
      <button className={`close-btn ${tocOpen ? 'show-close-btn' : 'hide-close-btn'}`} onClick={closeSidebar}>
        <span></span>
        <span></span>
      </button>
      <ul className={`wd-sidebar ${tocOpen ? 'show-toc' : 'hide-toc'}`}>
        <li className={router.pathname === '/templates' ? 'active-page' : ''}><Link href="/templates">Templates</Link>
          <Scrollspy items={['toc-accordion', 'toc-assignments', 'toc-blockquote', 'toc-border', 'toc-call-out', 'toc-flip-card', 'toc-card-horizontal', 'toc-horizontal-display', 'toc-img-gallery', `toc-locked-content`, 'toc-media-container', 'toc-side-by-side', 'toc-tables', 'toc-tabs', 'toc-video-widget', 'toc-vocab-cards', 'toc-vocab-list']} currentClassName="is-current" offset={-100}>
            <li><Link href="templates/#one-column-templates" className="toc-accordion">One Column Templates</Link></li>
            <li><Link href="templates/#two-column-templates" className="toc-assignments">Two Column Templates</Link></li>
            <li><Link href="templates/#sow-templates" className="toc-blockquote">SOW Templates</Link></li>
          </Scrollspy>
        </li>
      </ul>
    </>
  )
}