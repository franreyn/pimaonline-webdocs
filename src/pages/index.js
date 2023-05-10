import Head from "next/head";
import Navbar from "@/components/Navbar";
import Homepage from "@/components/Homepage";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>PimaOnline Webdocs</title>
        <meta name="description" content="Pima Online Webdocs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <Navbar />
        </header>
        <main>
          <Homepage />
        </main>
        <aside>

        </aside>
        <footer>
          
        </footer>
      </main>
    </>
  )
}
