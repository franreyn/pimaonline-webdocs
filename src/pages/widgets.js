import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import Assignments from "@/components/widgets/Assignments";
import Blockquote from '@/components/widgets/Blockquote';
import Border from '@/components/widgets/Border';
import CallOut from '@/components/widgets/CallOut';
import CardHorizontal from '@/components/widgets/CardHorizontal';
import HorizontalDisplay from '@/components/widgets/HorizontalDisplay';
import ImageGallery from '@/components/widgets/ImageGallery';
import MediaContainer from '@/components/widgets/MediaContainer';
import SideBySide from '@/components/widgets/SideBySide';
import Tables from '@/components/widgets/Tables';
import Tabs from '@/components/widgets/Tabs';
import VideoWidget from '@/components/widgets/VideoWidget';
import VocabCards from '@/components/widgets/VocabCards';
import VocabList from '@/components/widgets/VocabList';
import { useLayoutEffect } from 'react';

export default function Widgets() {

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
        <title>Widgets</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-grid">
        <main>
        <h1>Widgets</h1>
        <p>Widgets are individual components which together form your web page.</p>
        <Assignments />
        <Blockquote />
        <Border />
        <CallOut />
        <CardHorizontal />
        <HorizontalDisplay />
        <ImageGallery />
        <MediaContainer />
        <SideBySide />
        <Tables />
        <Tabs />
        <VideoWidget />
        <VocabCards />
        <VocabList />
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