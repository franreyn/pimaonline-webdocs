import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();

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
            <li className={router.pathname === '/getting-started' ? 'active-nav' : ''}>
              <Link href="/getting-started">Docs</Link>
              <ul className="sub-items">
                <li><Link href="/getting-started">Getting Started</Link></li>
                <li><Link href="/layouts">Layouts</Link></li>
                <li><Link href="/icons">Icons</Link></li>
                <li><Link href="/utilities">Utilities</Link></li>
              </ul>
            </li>
            <li className={router.pathname === '/templates' ? 'active-nav' : ''}>
              <Link href="/templates">Templates</Link>
            </li>
            <li className={router.pathname === '/themes' ? 'active-nav' : ''}>
              <Link href="/themes">Themes</Link>
            </li>
            <li className={router.pathname === '/icons' ? 'active-nav' : ''}>
              <Link href="/widgets">Widgets</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;