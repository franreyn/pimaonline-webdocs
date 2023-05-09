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
        <div className="logo-wrapper">
          <Link href={"/index.html"}>
            <Image className="logo" src="/images/logo.png" alt="" width={200} height={31.5} />
          </Link>
        </div>
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
              <Link href={"/site/getting-started.html"}>Docs</Link>
              <ul className="sub-items">
                <li><Link href={"/site/getting-started.html"}>Getting Started</Link></li>
                <li><Link href={"/site/layouts.html"}>Layouts</Link></li>
                <li><Link href={"/site/widgets.html"}>Widgets</Link></li>
                <li><Link href={"/site/utilities.html"}>Utilities</Link></li>
              </ul>
            </li>
            <li>
              <Link href={"/site/themes.html"}>Themes</Link>
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