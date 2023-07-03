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

export default function Utilities() {
  return (
    <>
      <Head>
        <title>PimaOnline Webdocs</title>
        <meta name="description" content="Pima Online Webdocs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <Script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js" defer />
        <Script src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-themepack/dist/js/scripts2.js" defer />
      </Head>
      <header>
        <Navbar />
      </header>
      <div className="wd-grid">
        <aside>
          <Sidebar />
        </aside>
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
      </div>
    </>
  )
}