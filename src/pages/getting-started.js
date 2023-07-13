import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { useLayoutEffect } from 'react';

export default function GettingStarted() {

  useLayoutEffect(() => {
    // Remove any existing theme link
    const existingLink = document.querySelector('link[data-theme-link]');
    if (existingLink) {
      document.head.removeChild(existingLink);
    }
  }, []);

  return (
    <>
      <Head>
        <title>PimaOnline Webdocs</title>
        <meta name="description" content="Pima Online Webdocs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <div className="wd-grid">
        <main>
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