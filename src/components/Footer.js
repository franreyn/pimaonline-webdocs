import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="wd-footer">
      <div className="wd-logo-wrapper">
        <Link href="/">
          <Image className="logo" src="/images/logo-icon.png" alt="Pima Community College logo" width={50} height={50} />
        </Link>
      </div>
        <ul>
          <li><h4 className="accent">Build</h4>
            <ul className="sub-items">
              <li><Link href="getting-started">Getting Started</Link></li>
              <li><Link href="layouts">Layouts</Link></li>
              <li><Link href="templates">Templates</Link></li>
              <li><Link href="https://pimaonline-course-builder.netlify.app/">Course Builder</Link></li>
            </ul>
          </li>
        </ul>
        <ul>
          <li><h4 className="accent">Customize</h4>
          <ul className="sub-items">
              <li><Link href="themes">Themes</Link></li>
              <li><Link href="plugins#animation-library">Animation Library</Link></li>
              <li><Link href="plugins#view-options-main">View Options</Link></li>
              <li><Link href="widgets">Widgets</Link></li>
              <li><Link href="utilities">Utilities</Link></li>
            </ul>
          </li>
        </ul>
        <ul>
          <li><h4 className="accent">Help</h4>
              <ul className="sub-items">
                <li><Link href="tips">Tips &amp; Tricks</Link></li>
                <li><Link href="help">D2L Help</Link></li>
              </ul>
          </li>
        </ul>
        <ul>
          <li><h4 className="accent">Quick Links</h4>
              <ul className="sub-items">
                <li><Link href="https://github.com/">GitHub</Link></li>
                <li><Link href="https://d2l.pima.edu/">D2L</Link></li>
                <li><Link href="https://fontawesome.com/icons">FontAwesome</Link></li>
                <li><Link href="https://www.gettyimages.com/">Getty Images</Link></li>
              </ul>
          </li>
        </ul>
      </div>
    </>
  )
}