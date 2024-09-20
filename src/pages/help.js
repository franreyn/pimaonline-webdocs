import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLayoutEffect } from "react";
import HelpSidebar from "@/components/HelpSidebar";

export default function Help() {

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
        <title>D2L Help Articles</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>D2L Help Articles</h1>
      <p className="wd-break">Find help articles on specific D2L tasks related to Themepack.</p>
      </div>
      <div className="wd-grid">
        <main>
          <section className="help-grid anchor">
            <div>
              <h3>Adding Templates</h3>
                <p>Learn how to add a page to your course with the right theme and placeholder content.</p>
                <Link className="wd-btn" href="/help/AddingTemplates">View Steps</Link>
            </div>
            <div>
              <h3>Adding YouTube</h3>
              <p>Learn how to add a YouTube Video to your course using an embed code and media container.</p>
              <Link className="wd-btn" href="/help/AddingYouTube">View Steps</Link>
            </div>
            <div>
              <h3>Adding Panopto</h3>
                <p>Learn how to add a Panopto video to your course.</p>
                <Link className="wd-btn" href="/help/AddingPanopto">View Steps</Link>
            </div>
            <div>
              <h3>Adding Content Body</h3>
                <p>Learn how to add a content body to your page in D2L.</p>
                <Link className="wd-btn" href="/help/AddingContentBody">View Steps</Link>
            </div>
          </section>
        </main>
        <aside>
            <HelpSidebar />
          </aside>
        </div>
        <footer>
          <Footer />
        </footer>
    </>
  )
}