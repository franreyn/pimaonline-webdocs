import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Announcement from "./Announcement";
import Version from "./Version";
import { version } from '../../package.json';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();

	useEffect(() => {
    const addMetaToCodeSnippets = () => {
      const codeBlocks = document.querySelectorAll('.wd-html-code code.language-html');
    
      if (codeBlocks.length > 0) {
        codeBlocks.forEach((codeBlock) => {
          let codeContent = codeBlock.textContent;
    
          if (!codeContent.includes('<meta name="version"')) {
            const metaRegex = /<meta[^>]*>/g;
            const matches = [...codeContent.matchAll(metaRegex)];
    
            if (matches.length > 0) {
              const lastMeta = matches[matches.length - 1];
              const insertPosition = lastMeta.index + lastMeta[0].length;
    
              const versionMeta = `\n<meta name="version" content="v${version}">`;
              codeContent =
                codeContent.slice(0, insertPosition) +
                versionMeta +
                codeContent.slice(insertPosition);
            } else {
              codeContent = codeContent.replace(
                '<head>',
                `<head>\n<meta name="version" content="v${version}">`
              );
            }
    
            codeBlock.textContent = codeContent;
          }
        });
      }
    };
    addMetaToCodeSnippets();
  }, []); // Empty dependency array ensures this runs only once after component mounts


  return (
    <>
    <Version/>
      <nav className="wd-navbar">
        {/* logo */}
        <Link href="/">
          <Image className="logo" src="/images/logo.png" alt="Pima Community College logo" width={200} height={31} priority={true} />
        </Link>
        {/* hamburger button */}
        <button className="mobile-btn">
          <label htmlFor="check">
            <input type="checkbox" id="check" onClick={() => setMenuOpen(!menuOpen)}/> 
            <span></span>
            <span></span>
            <span></span>
          </label>
        </button>
        {/* nav links */}
        <div className={`nav-container ${menuOpen ? "show-menu" : "hide-menu"}`}>
          <ul className="nav-links">
            <li className={router.pathname === "/getting-started" ? "active-nav" : ""}>
              <Link href="/getting-started">Setup</Link>
              <ul className="sub-items">
                <li><Link href="/getting-started">Getting Started</Link></li>
                <li><Link href="/layouts">Layouts</Link></li>
                <li><Link href="/tips">Tips</Link></li>
              </ul>
            </li>
            <li className={router.pathname === "/templates" ? "active-nav" : ""}>
              <Link href="/templates">Templates</Link>
            </li>
            <li className={router.pathname === "/themes" ? "active-nav" : ""}>
              <Link href="/themes">Themes</Link>
            </li>
            <li className={router.pathname === "/plugins" ? "active-nav" : ""}>
              <Link href="/plugins">Plugins</Link>
            </li>
            <li className={router.pathname === "/widgets" ? "active-nav" : ""}>
              <Link href="/widgets">Widgets</Link>
            </li>
            <li className={router.pathname === "/utilities" ? "active-nav" : ""}>
              <Link href="/utilities">Utilities</Link>
            </li>
						<li className={router.pathname === "/help" ? "active-nav" : ""}>
              <Link href="/help">D2L Help</Link>
            </li>
          </ul>
        </div>
      </nav>
      {router.pathname === "/" && <Announcement />}
    </>
  )
}

export default Navbar;