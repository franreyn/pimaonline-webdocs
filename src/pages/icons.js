import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLayoutEffect } from 'react';
import FontAwesome from '@/components/icons/FontAwesome';
import BootstrapIcons from '@/components/icons/BootstrapIcons';
import RemixIcons from '@/components/icons/RemixIcons';

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
      <div className="wd-grid">
        <main>
          <h1>Icons</h1>
          <p>Choose from thousands of icons to add visual interest to your course. We offer three icon libraries as part of our Themepack: Font Awesome, Bootstrap Icons, and Remix Icons.</p>
          <FontAwesome />
          <BootstrapIcons />
          <RemixIcons />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}