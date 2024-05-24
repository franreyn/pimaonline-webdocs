import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Caption from '@/components/utilities/Caption';
import Edit from '@/components/utilities/Edit';
import FontSizes from '@/components/utilities/FontSizes';
import Highlight from '@/components/utilities/Highlight';
import Labels from '@/components/utilities/Labels';
import Lead from '@/components/utilities/Lead';
import Monospace from '@/components/utilities/Monospace';
import Footer from '@/components/Footer';
import { useLayoutEffect } from 'react';
import Docs from '@/components/docsIntro';

export default function Utilities() {

  // Remove any existing theme link (required to keep theme styles just on the theme page)
  useLayoutEffect(() => {
    const existingLink = document.querySelector('link[data-theme-link]');
    if (existingLink) {
      document.head.removeChild(existingLink);
    }
})

  return (
    <>
      <Head>
        <title>Utilities</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
      <Docs />
      </div>
      <div className="wd-grid">
        <main>
          <h2>Utility Classes</h2>
          <p className='wd-break'> Utility classes help you quickly style your elements as they override that element's native styles.</p>
          <div className='wd-subitems'>
          <Caption />
          </div>
          <div className="wd-subitems">
          <Edit />
          </div>
          <div className="wd-subitems">
          <FontSizes />
          </div>
          <div className="wd-subitems">
          <Highlight />
          </div>
          <div className="wd-subitems">
          <Labels />
          </div>
          <div className="wd-subitems">
          <Lead />
          </div>
          <div className="wd-subitems">
          <Monospace />
          </div>
        </main>
        <aside>
          <Sidebar />
        </aside>
        </div>
        <footer>
          <Footer />
        </footer>
    </>
  )
}