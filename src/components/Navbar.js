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
        <div className="logo-wrapper d-block">
          <Link href={"/index.html"}>
            <Image className="logo" src="/images/logo.svg" alt="" width={74} height={21} />
          </Link>
        </div>
        <div className="wd-navwrap">
          {/* hamburger button */}
          <button className="mobile-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <Image className="hamburger" src="/images/minus-solid.svg" alt="" width={24} height={24} />
            ) : (
              <Image className="hamburger" src="/images/bars-solid.svg" alt="" width={24} height={24} />
            )}
          </button>
          {/* nav links */}
          <div className={`${menuOpen ? 'show-menu' : 'hide-menu'}`}>
            <ul className="nav-links">
              <li>
                <Link href={"/site/getting-started.html"}>Docs</Link>
              </li>
              <li>
                <Link href={"/site/themes.html"}>Themes</Link>
              </li>
              <li>
                <Link href="https://fontawesome.com/v5/search?m=free">Icons</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;