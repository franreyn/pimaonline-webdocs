import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect } from "react";
import TemplateSidebar from "@/components/TemplateSidebar";

export default function Templates() {

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
        <title>Templates</title>
      </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Templates</h1>
      <p className="wd-break">Premade templates to browse and inspire your course content layouts. Ready to grab and go!</p>
      </div>
      <div className="wd-grid">
        <main>
          <h2 className="anchor" id="one-column-templates">One Column Templates</h2>
          <section className="template-section">
            <div>
              <Link href="/templates/OneColumn1"><Image src="/images/templates/onecolumn1.jpg" alt="" width={800} height={1400} priority="true"  /></Link>
              <div>
                <h3>Inspirational Structure</h3>
                <p>Communicate expectations, provide encouragement, and deliver support to students</p>
                <Link className="wd-btn" href="/templates/OneColumn1">View Template</Link>
              </div>
            </div>
            <div>
            <Link href="/templates/OneColumn2"><Image src="/images/templates/onecolumn2.jpg" alt="" width={800} height={1400} /></Link>
              <div>
                <h3>Organized Welcome</h3>
                <p>Support students with digestible course details, beneficial resources, and a personal touch</p>
                <Link className="wd-btn" href="/templates/OneColumn2">View Template</Link>
              </div>
            </div>
            <div>
            <Link href="/templates/OneColumn3"><Image src="/images/templates/onecolumn3.jpg" alt="" width={800} height={1400} /></Link>
              <div>
                <h3>Content Roadmap</h3>
                <p>With both a module guide and course roadmap, keep all students on route</p>
                <Link className="wd-btn" href="/templates/OneColumn3">View Template</Link>
              </div>
            </div>
            <div>
            <Link href="/templates/OneColumn4"><Image src="/images/templates/onecolumn4.jpg" alt="" width={800} height={1400} /></Link>
              <div>
                <h3>Clean Grids</h3>
                <p>A clean way to display the assignments, key points, and learning resources for any module</p>
                <Link className="wd-btn" href="/templates/OneColumn4">View Template</Link>
              </div>
            </div>
            <div>
            <Link href="/templates/OneColumn5"><Image src="/images/templates/onecolumn5.jpg" alt="" width={800} height={1400} /></Link>
              <div>
                <h3>Text Heavy Intro or Detailed Course Intro</h3>
                <p>Set students up for success by outlining course structure & expectations</p>
                <Link className="wd-btn" href="/templates/OneColumn5">View Template</Link>
              </div>
            </div>
            <div>
            <Link href="/templates/OneColumn6"><Image src="/images/templates/onecolumn6.jpg" alt="" width={800} height={1400} /></Link>
              <div>
                <h3>Overview Basics</h3>
                <p>With just the basics, give students a flyover view of module highlights</p>
                <Link className="wd-btn" href="/templates/OneColumn6">View Template</Link>
              </div>
            </div>
          </section>
          <h2 className="anchor" id="two-column-templates">Two Column Templates</h2>
          <section className="template-section">
          <div>
          <Link href="/templates/TwoColumn1"><Image src="/images/templates/twocolumn1.jpg" alt="" width={800} height={1400} /></Link>
            <div>
              <h3>Interactive Introductions</h3>
              <p>Keep students engaged with the course outline with visual-feedback-rich content</p>
              <Link className="wd-btn" href="/templates/TwoColumn1">View Template</Link>
            </div>
          </div>
          <div>
          <Link href="/templates/TwoColumn1"><Image src="/images/templates/twocolumn2.jpg" alt="" width={800} height={1400} /></Link>            <div>
              <h3>Warm Welcome</h3>
              <p>Get students eager to learn with a warm and encouraging introduction</p>
              <Link className="wd-btn" href="/templates/TwoColumn2">View Template</Link>
            </div>
          </div>
          <div>
          <Link href="/templates/TwoColumn1"><Image src="/images/templates/twocolumn3.jpg" alt="" width={800} height={1400} /></Link>            <div>
              <h3>Key Topics and Tasks</h3>
              <p>Get to the point quick with this Module Overview utilizing just the essentials</p>
              <Link className="wd-btn" href="/templates/TwoColumn3">View Template</Link>
            </div>
          </div>
          <div>
          <Link href="/templates/TwoColumn1"><Image src="/images/templates/twocolumn4.jpg" alt="" width={800} height={1400} /></Link>            <div>
              <h3>Learning Medley</h3>
              <p>A collection of content varieties to give your students access to their preferred learning channel</p>
              <Link className="wd-btn" href="/templates/TwoColumn4">View Template</Link>
            </div>
          </div>
          <div>
          <Link href="/templates/TwoColumn1"><Image src="/images/templates/twocolumn5.jpg" alt="" width={800} height={1400} /></Link>            <div>
              <h3>Course Clarity</h3>
              <p>Set students up for success by outlining course structure & expectations</p>
              <Link className="wd-btn" href="/templates/TwoColumn5">View Template</Link>
            </div>
          </div>
          <div>
          <Link href="/templates/TwoColumn1"><Image src="/images/templates/twocolumn6.jpg" alt="" width={800} height={1400} /></Link>            <div>
              <h3>Visual Overview</h3>
              <p>An easy-to-digest Module Overview with a balanced text-to-image ratio and linked task table</p>
              <Link className="wd-btn" href="/templates/TwoColumn6">View Template</Link>
            </div>
          </div>
          </section>
          <h2 className="anchor" id="sow-templates">SOW Templates</h2>
          <section className="template-section">
          <div>
          <Link href="/templates/SOW1"><Image src="/images/templates/sow1.jpg" alt="" width={800} height={1400} /></Link>            <div>
              <h3>Schedule Overview</h3>
              <p>Give a 30,000-foot view of the course schedule with just the need-to-know key dates and deadlines</p>
              <Link className="wd-btn" href="/templates/TwoColumn5">View Template</Link>
            </div>
          </div>
          <div>
          <Link href="/templates/SOW2"><Image src="/images/templates/sow2.jpg" alt="" width={800} height={1400} /></Link>            <div>
              <h3>Module-By-Module</h3>
              <p>Give students all the details with module-by-module tables that can be linked to specific assignments and quizzes</p>
              <Link className="wd-btn" href="/templates/TwoColumn6">View Template</Link>
            </div>
          </div>
          </section>
        </main>
        <aside>
            <TemplateSidebar />
          </aside>
        </div>
        <footer>
          <Footer />
        </footer>
    </>
  )
}