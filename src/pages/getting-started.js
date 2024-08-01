import Head from "next/head";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { useLayoutEffect } from "react";
import QuickStart from "@/components/getting-started/QuickStart";
import ManualSetup from "@/components/getting-started/ManualSetup";
import Community from "@/components/getting-started/Community";
import Docs from "@/components/DocsIntro";

export default function GettingStarted() {

  // Remove any existing theme link (required to keep theme styles just on the theme page)
  useLayoutEffect(() => {
    const existingLink = document.querySelector("link[data-theme-link]");
    if (existingLink) {
      document.head.removeChild(existingLink);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Getting Started</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
      <Docs />
      </div>
      <div className="wd-grid">
        <main>
          <h2>Getting Started</h2>
          <p className="wd-break">Find help getting up and running with the PimaOnline ThemePack.</p>
          <QuickStart />
          <ManualSetup />
          <Community />
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