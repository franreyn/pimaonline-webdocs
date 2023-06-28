import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="wd-footer">
        <ul>
          <li>
            <Link href="getting-started">Docs</Link>
            <ul className="sub-items">
              <li><Link href="getting-started">Getting Started</Link></li>
              <li><Link href="layouts">Layouts</Link></li>
              <li><Link href="widgets">Widgets</Link></li>
              <li><Link href="utilities">Utilities</Link></li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="themes">Themes</Link>
              <ul className="sub-items">
                <li><Link href="ajs">AJS</Link></li>
                <li><Link href="art">Art</Link></li>
                <li><Link href="aviation">Aviation</Link></li>
                <li><Link href="business">Business</Link></li>
                <li><Link href="cad">CAD</Link></li>
              </ul>
          </li>
        </ul>
        <ul>
          <li>
            Icons
              <ul className="sub-items">
                <li><Link href="https://fontawesome.com/icons">FontAwesome</Link></li>
                <li><Link href="https://www.gettyimages.com/">Getty Images</Link></li>
              </ul>
          </li>
        </ul>
        <ul>
          <li>
            Community
              <ul className="sub-items">
                <li><Link href="https://github.com/">GitHub</Link></li>
                <li><Link href="https://d2l.pima.edu/">D2L</Link></li>
              </ul>
          </li>
        </ul>
      </div>
    </>
  )
}