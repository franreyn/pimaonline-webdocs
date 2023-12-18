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
        <li className={router.pathname === '/widgets' ? 'active-page' : ''}><Link href="/widgets">Widgets</Link>
        <Scrollspy items={['toc-accordion', 'toc-assignments', 'toc-blockquote', 'toc-border', 'toc-call-out', 'toc-card-horizontal', 'toc-horizontal-display', 'toc-img-gallery', 'toc-media-container', 'toc-side-by-side', 'toc-tables', 'toc-tabs', 'toc-video-widget', 'toc-vocab-cards', 'toc-vocab-list']} currentClassName="is-current" offset={-100}>
            <li><Link href="widgets/#accordion" className="toc-accordion">Accordion</Link></li>
            <li><Link href="widgets/#assignments" className="toc-assignments">Assignments Widget</Link></li>
            <li><Link href="widgets/#blockquote" className="toc-blockquote">Blockquote</Link></li>
            <li><Link href="widgets/#border" className="toc-border">Border</Link></li>
            <li><Link href="widgets/#call-out" className="toc-call-out">Call Out</Link></li>
            <li><Link href="widgets/#card-horizontal" className="toc-card-horizontal">Card Horizontal</Link></li>
            <li><Link href="widgets/#horizontal-display" className="toc-horizontal-display">Horizontal Display</Link></li>
            <li><Link href="widgets/#img-gallery" className="toc-img-gallery">Image Gallery</Link></li>
            <li><Link href="widgets/#media-container" className="toc-media-container">Media Container</Link></li>
            <li><Link href="widgets/#side-by-side" className="toc-side-by-side">Side-by-side</Link></li>
            <li><Link href="widgets/#tables" className="toc-tables">Tables</Link></li>
            <li><Link href="widgets/#tabs" className="toc-tabs">Tabs</Link></li>
            <li><Link href="widgets/#video-widget" className="toc-video-widget">Video Widget</Link></li>
            <li><Link href="widgets/#vocab-cards" className="toc-vocab-cards">Vocab Cards</Link></li>
            <li><Link href="widgets/#vocab-list" className="toc-vocab-list">Vocab List</Link></li>
          </Scrollspy>
        </li>
        <li className={router.pathname === '/utilities' ? 'active-page' : ''}><Link href="/utilities">Utilities</Link>
          <Scrollspy items={['toc-caption', 'toc-edit', 'toc-font-sizes', 'toc-highlight', 'toc-labels', 'toc-lead', 'toc-monospace']} currentClassName="is-current" offset={-100}>
            <li><Link href="utilities/#caption">Caption</Link></li>
            <li><Link href="utilities/#edit">Edit</Link></li>
            <li><Link href="utilities/#font-sizes">Font Sizes</Link></li>
            <li><Link href="utilities/#highlight">Highlight</Link></li>
            <li><Link href="utilities/#labels">Labels</Link></li>
            <li><Link href="utilities/#lead">Lead</Link></li>
            <li><Link href="utilities/#monospace">Monospace</Link></li>
          </Scrollspy>
        </li>
      </ul>
    </>
  )
}