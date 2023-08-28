import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
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
        <div className={`nav-container ${menuOpen ? 'show-menu' : 'hide-menu'}`}>
          <ul className="nav-links">
            <li>
              <Link href="getting-started">Docs</Link>
              <ul className="sub-items">
                <li><Link href="getting-started">Getting Started</Link></li>
                <li><Link href="layouts">Layouts</Link></li>
                <li><Link href="widgets">Widgets</Link></li>
                <li><Link href="utilities">Utilities</Link></li>
              </ul>
            </li>
            <li>
              <Link href="themes">Themes</Link>
            </li>
            <li>
              <Link href="https://fontawesome.com/v5/search?m=free">Icons</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;