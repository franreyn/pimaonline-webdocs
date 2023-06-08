import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  const [tocOpen, setTocOpen] = useState(false);

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
      <button className={`close-btn ${tocOpen ? 'show-close-btn' : 'hide-close-btn'}`} onClick={closeSidebar}>
        <span></span>
        <span></span>
      </button>
      <ul className={`wd-sidebar ${tocOpen ? 'show-toc' : 'hide-toc'}`}>
        <li><Link href="getting-started">Getting Started</Link>
          <ul>
            <li><Link href="quick-start">Quick Start</Link></li>
            <li><Link href="manual-setup">Manual Setup</Link></li>
            <li><Link href="community">Community</Link></li>
          </ul>
        </li>
        <li><Link href="layouts">Layouts</Link>
          <ul>
            <li><Link href="one-column">One Column</Link></li>
            <li><Link href="two-column">Two Column</Link></li>
            <li><Link href="three-section">Three Section</Link></li>
          </ul>
        </li>
        <li><Link href="widgets">Widgets</Link>
          <ul>
            <li><Link href="assignments">Assignments</Link></li>
            <li><Link href="blockquote">Blockquote</Link></li>
            <li><Link href="border">Border</Link></li>
          </ul>
        </li>
        <li><Link href="utilities">Utilities</Link>
          <ul>
            <li><Link href="caption">Caption</Link></li>
            <li><Link href="edit">Edit</Link></li>
            <li><Link href="font-sizes">Font Sizes</Link></li>
          </ul>
        </li>
      </ul>
    </>
  )
}