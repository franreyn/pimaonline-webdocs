import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { useLayoutEffect } from 'react';
import Docs from '@/components/DocsIntro';

export default function Tips() {

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
        <title>Tips & Tricks</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
      <Docs />
      </div>
      <div className="wd-grid">
        <main>
          <h2>Tips &amp; Tricks</h2>
          <p className='wd-break'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis sollicitudin justo. Quisque porttitor facilisis rhoncus.</p>
          <section className="wd-content" id="toc-tip-1">
          <h3 id="tip-1" className="section-top anchor">Tip #1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis sollicitudin justo. Quisque porttitor facilisis rhoncus. Proin viverra sodales ante, vel eleifend diam. Donec ac metus justo. Nunc ornare, libero hendrerit suscipit scelerisque, felis mauris accumsan dolor, in pellentesque ex neque nec lectus.</p>
          <br />
          <div className="wd-subitems">
          <h4>Sub-Tip One</h4>
              <p>Donec quis sollicitudin justo</p>
              <br />
              <h4>Sub-Tip Two</h4>
              <p>Quisque porttitor facilisis</p>
              </div>
          </section>
          <section className="wd-content" id="toc-tip-2">
          <h3 id="tip-2" className="section-top anchor">Tip #2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis sollicitudin justo. Quisque porttitor facilisis rhoncus. Proin viverra sodales ante, vel eleifend diam. Donec ac metus justo. Nunc ornare, libero hendrerit suscipit scelerisque, felis mauris accumsan dolor, in pellentesque ex neque nec lectus.</p>
          <br />
          <div className="wd-subitems">
          <h4>Sub-Tip One</h4>
              <p>Donec quis sollicitudin justo</p>
              <br />
              <h4>Sub-Tip Two</h4>
              <p>Quisque porttitor facilisis</p>
              </div>
          </section>
          <section className="wd-content" id="toc-tip-3">
          <h3 id="tip-3" className="section-top anchor">Tip #3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis sollicitudin justo. Quisque porttitor facilisis rhoncus. Proin viverra sodales ante, vel eleifend diam. Donec ac metus justo. Nunc ornare, libero hendrerit suscipit scelerisque, felis mauris accumsan dolor, in pellentesque ex neque nec lectus.</p>
          <br />
          <div className="wd-subitems">
          <h4>Sub-Tip One</h4>
              <p>Donec quis sollicitudin justo</p>
              <br />
              <h4>Sub-Tip Two</h4>
              <p>Quisque porttitor facilisis</p>
              </div>
          </section>
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