import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Scrollspy from "react-scrollspy";
import { useRouter } from "next/router";

export default function Sidebar() {
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
        <p>Docs Content</p>
      </button>
      <button className={`close-btn ${tocOpen ? 'show-close-btn' : 'hide-close-btn'}`} onClick={closeSidebar}>
        <span></span>
        <span></span>
      </button>
      <ul className={`wd-sidebar ${tocOpen ? 'show-toc' : 'hide-toc'}`}>
        <li className={router.pathname === '/getting-started' ? 'active-page' : ''}><Link href="/getting-started">Getting Started</Link>
          <Scrollspy items={['toc-quick-start', 'toc-manual-setup', 'toc-community']} currentClassName="is-current" offset={-100}>
            <li><Link href="getting-started/#quick-start">Quick Start</Link></li>
            <li><Link href="getting-started/#manual-setup">Manual Setup</Link></li>
            <li><Link href="getting-started/#community">Community</Link></li>
          </Scrollspy>
        </li>
        <li className={router.pathname === '/layouts' ? 'active-page' : ''}><Link href="/layouts">Layouts</Link>
          <Scrollspy items={['toc-one-column-layout', 'toc-two-column-layout', 'toc-three-section-layout']} currentClassName="is-current" offset={-100}>
            <li><Link href="layouts/#one-column-layout" className="toc-one-column-layout">One Column</Link></li>
            <li><Link href="layouts/#two-column-layout" className="toc-two-column-layout">Two Column</Link></li>
            <li><Link href="layouts/#three-section-layout" className="toc-three-section-layout">Three Section</Link></li>
          </Scrollspy>
        </li>
        <li className={router.pathname === '/tips' ? 'active-page' : ''}><Link href="/tips">Tips &amp; Tricks</Link>
          <Scrollspy items={['toc-tip-1', 'toc-tip-2', 'toc-tip-3', 'toc-tip-4']} currentClassName="is-current" offset={-100}>
            <li><Link href="tips/#tip-1" className="toc-tip-1">Utilizing Templates</Link></li>
            <li><Link href="tips/#tip-2" className="toc-tip-2">Page Titles</Link></li>
            <li><Link href="tips/#tip-3" className="toc-tip-3">Creative Widgets</Link></li>
            <li><Link href="tips/#tip-4" className="toc-tip-4">Custom Styles</Link></li>
          </Scrollspy>
        </li>
      </ul>
    </>
  )
}