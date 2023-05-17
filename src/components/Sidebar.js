import Link from "next/link"

import React from 'react'

const Sidebar = () => {
  return (
    <ul className="wd-sidebar">
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
  )
}

export default Sidebar