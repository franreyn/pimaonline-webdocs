import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Script from 'next/script';
import Sidebar from '@/components/Sidebar';
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

export default function Widgets() {
  return (
    <>
      <Head>
        <title>PimaOnline Webdocs</title>
        <meta name="description" content="Pima Online Webdocs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/night-owl.min.css" />
        <Script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js" defer />
        <Script src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer />
        <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js" />
        <Script async>hljs.highlightAll();</Script>
      </Head>
      <header>
        <Navbar />
      </header>
      <div className="wd-grid">
        <aside>
          <Sidebar />
        </aside>
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
      </div>
    </>
  )
}