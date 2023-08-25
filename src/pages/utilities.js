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
      <div className="wd-grid">
        <main>
          <h1>Utility Classes</h1>
          <p>Utility classes help you quickly style your elements as they override that element's native styles.</p>
          <Caption />
          <Edit />
          <FontSizes />
          <Highlight />
          <Labels />
          <Lead />
          <Monospace />
        </main>
        <aside>
          <Sidebar />
        </aside>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}