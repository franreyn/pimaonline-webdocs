import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Scrollspy from "react-scrollspy";
import { useRouter } from "next/router";

export default function UtilitiesSidebar() {
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
        <p>Utilities Content</p>
      </button>
      <button className={`close-btn ${tocOpen ? 'show-close-btn' : 'hide-close-btn'}`} onClick={closeSidebar}>
        <span></span>
        <span></span>
      </button>
      <ul className={`wd-sidebar ${tocOpen ? 'show-toc' : 'hide-toc'}`}>
      <li className={router.pathname === '/utilities' ? 'active-page' : ''}><Link href="/utilities">Inline Classes</Link>
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
        <li className={router.pathname === '/icons' ? 'active-page' : ''}><Link href="/icons">Icon Classes</Link>
          <Scrollspy items={['toc-bootstrap-icons', 'toc-font-awesome', 'toc-remix-icons']} currentClassName="is-current" offset={-100}>
            <li><Link href="icons/#toc-bootstrap-icons">Bootstrap Icons</Link></li>
            <li><Link href="icons/#toc-font-awesome">Font Awesome Icons</Link></li>
            <li><Link href="icons/#toc-remix-icons">Remix Icons</Link></li>
          </Scrollspy>
        </li>
      </ul>
    </>
  )
}