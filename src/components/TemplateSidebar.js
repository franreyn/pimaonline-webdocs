import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Scrollspy from "react-scrollspy";
import { useRouter } from "next/router";

export default function TemplateSidebar() {
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
        <p>Widget Content</p>
      </button>
      <button className={`close-btn ${tocOpen ? 'show-close-btn' : 'hide-close-btn'}`} onClick={closeSidebar}>
        <span></span>
        <span></span>
      </button>
      <ul className={`wd-sidebar ${tocOpen ? 'show-toc' : 'hide-toc'}`}>
        <li className={router.pathname === '/templates' ? 'active-page' : ''}><Link href="/templates">Templates</Link>
          <Scrollspy items={['toc-one-column', 'toc-one-column-1', 'toc-one-column-2', 'toc-one-column-3', 'toc-one-column-4', 'toc-one-column-5', 'toc-one-column-6','toc-two-column', 'toc-two-column-1', 'toc-two-column-2', 'toc-two-column-3', 'toc-two-column-4', 'toc-two-column-5', 'toc-two-column-6', 'toc-sow', 'toc-sow-1', 'toc-sow-2']} currentClassName="is-current" offset={-100}>
            <li><Link href="/templates/#one-column-templates" className="toc-one-column">One Column Templates</Link>
            <ul>
              <li><Link href="/templates/OneColumn1/#one-column-1" className="toc-one-column-1">Inspirational Structure</Link></li>
              <li><Link href="/templates/OneColumn2/#one-column-2" className="toc-one-column-2">Organized Welcome</Link></li>  
              <li><Link href="/templates/OneColumn3/#one-column-3" className="toc-one-column-3">Content Roadmap</Link></li>  
              <li><Link href="/templates/OneColumn4/#one-column-4" className="toc-one-column-4">Clean Grids</Link></li>  
              <li><Link href="/templates/OneColumn5/#one-column-5" className="toc-one-column-5">Detailed Intro</Link></li>  
              <li><Link href="/templates/OneColumn6/#one-column-6" className="toc-one-column-6">Overview Basics</Link></li>    
            </ul></li>
            <li><Link href="/templates/#two-column-templates" className="toc-two-column">Two Column Templates</Link>
            <ul>
              <li><Link href="/templates/TwoColumn1/#two-column-1" className="toc-two-column-1">Interactive Introductions</Link></li>
              <li><Link href="/templates/TwoColumn2/#two-column-2" className="toc-two-column-2">Warm Welcome</Link></li>  
              <li><Link href="/templates/TwoColumn3/#two-column-3" className="toc-two-column-3">Key Topics & Tasks</Link></li>  
              <li><Link href="/templates/TwoColumn4/#two-column-4" className="toc-two-column-4">Learning Medley</Link></li>  
              <li><Link href="/templates/TwoColumn5/#two-column-5" className="toc-two-column-5">Course Clarity</Link></li>  
              <li><Link href="/templates/TwoColumn6/#two-column-6" className="toc-two-column-6">Visual Overview</Link></li>    
            </ul>
            </li>
            <li><Link href="/templates/#sow-templates" className="toc-sow">SOW Templates</Link>
            <ul>
              <li><Link href="/templates/SOW1/#sow-1" className="toc-sow-1">Schedule Overview</Link></li>
              <li><Link href="/templates/SOW2/#sow-2" className="toc-sow-2">Module-by-Module</Link></li>  
            </ul>
            </li>
          </Scrollspy>
        </li>
      </ul>
    </>
  )
}