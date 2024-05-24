import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { useLayoutEffect } from 'react';
import FontAwesome from '@/components/icons/FontAwesome';
import BootstrapIcons from '@/components/icons/BootstrapIcons';
import RemixIcons from '@/components/icons/RemixIcons';
import Docs from '@/components/docsIntro';

export default function Icons() {

  // Remove any existing theme link (required to keep theme styles just on the theme page)
  useLayoutEffect(() => {
    const existingLink = document.querySelector('link[data-theme-link]');
    if (existingLink) {
      document.head.removeChild(existingLink);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Icons</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
      <Docs />
      </div>
      <div className="wd-grid">
        <main>
          <h2>Icons</h2>
          <p className='wd-break'>Choose from thousands of icons to add visual interest to your course. We offer three icon libraries as part of our Themepack: Font Awesome, Bootstrap Icons, and Remix Icons.</p>
          <div className='wd-subitems'>
          <FontAwesome />
          </div>
          <div className="wd-subitems">
          <BootstrapIcons />
          </div>
          <div className="wd-subitems">
          <RemixIcons />
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