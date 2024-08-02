import Head from "next/head";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { useLayoutEffect } from "react";
import Docs from "@/components/docsIntro";
import Link from "next/link";

export default function Tips() {

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
          <p className="wd-break">Find practical insights and clever solutions to help you make the most of all that Themepack has to offer.</p>
          <section className="wd-content" id="toc-tip-1">
          <h3 id="tip-1" className="section-top anchor">Utilizing Templates</h3>
          <p>Not sure where to start? Streamline your course creation process by leveraging <Link href="/templates" target="_blank" className="color-link">pre-made templates</Link>. A solid foundation, structured content and customizable elements, templates allow you to quickly and easily develop engaging and effective courses tailored to your needs.</p>
          <br />
          <div className="wd-subitems">
          <h4>How to Use Templates:</h4>
            <ol className="with-marker">
              <li>Go to the templates page to browse through options</li>
              <li>Once you've chosen a template, copy the code and paste the supplied code</li>
              <li>Customize away!</li>
            </ol>
              </div>
          </section>
          <section className="wd-content" id="toc-tip-2">
          <h3 id="tip-2" className="section-top anchor">Page Titles</h3>
          <p>Whenever possible, match your page title with the H1 content. This alignment helps ensure consistency, providing users with a clear and cohesive experience. You can see an example of this practice below:</p>
          <br />
          <div className="wd-subitems">
          <h4>Matching Your Title and H1</h4>
          <p>Match the <span className="wd-monospace">&lt;title&gt;</span> element to the <span className="wd-monospace">&lt;h1&gt;</span> element in your code.</p>
          <p>Find the <span className="wd-monospace">&lt;title&gt;</span> tag within the document <span className="wd-monospace">&lt;head&gt;</span> and the <span className="wd-monospace">&lt;h1&gt;</span> within the <span className="wd-monospace">&lt;header&gt;</span> tag.</p>
        </div>
          </section>
          <section className="wd-content" id="toc-tip-3">
          <h3 id="tip-3" className="section-top anchor">Make the Most of Widgets</h3>
          <p>While most widgets were created with a specific purpose in mind, many can be used for a variety of objectives. Unleash your creativity by experimenting with different widgets to enhance functionality and user experience. By thoughtfully integrating a variety of widgets, you can create dynamic, interactive, and engaging courses to provide a richer, more personalized experience. </p>
          <br />
          <div className="wd-subitems">
          <h4>Widget Inspiration</h4>
          <section className="wd-side-by-side">
          <div className="wd-side-by-side-item">
          <h5>Accordion</h5>
            <ol className="with-marker">
              <li>FAQs</li>
              <li>Course objectives or assignment details</li>
              <li>Digestible content sections</li>
            </ol>
            <br />
            <h5>Assignments</h5>
            <ol className="with-marker">
              <li>Additional resources</li>
              <li>Reading highlights & links to those pages or chapters</li>
              <li>CLOs or course link shortcuts</li>
            </ol>
            <br />
            <h5>Border</h5>
            <ol className="with-marker">
              <li>Featured content or important announcements</li>
              <li>Key takeaways or learning objectives</li>
              <li>Adding extra highlight to a blockquote</li>
            </ol>
            <br />
            <h5>Flip Cards</h5>
            <ol className="with-marker">
              <li>Flash cards for quiz content</li>
              <li>Photos and expanded descriptions</li>
              <li>Contact cards or course resources</li>
            </ol>
            </div>
            <div className="wd-side-by-side-item">
            <h5>Tables</h5>
            <ol className="with-marker">
              <li>Course agenda or weekly assignments</li>
              <li>Historical event timelines</li>
              <li>Chapter summaries</li>
              <li>Resource lists</li>
              <li>Grading rubrics</li>
            </ol>
            <br />
            <h5>Tabs</h5>
            <ol className="with-marker">
              <li>Module or week breakdown</li>
              <li>Study materials & resources</li>
              <li>FAQs or instructions</li>
              <li>Course policies</li>
              <li>Interactive activities</li>
            </ol>
            <br />
            <h5>Vocab Cards</h5>
            <ol className="with-marker">
              <li>Glossary of terms or language translations</li>
              <li>Concept reviews and quiz prep</li>
              <li>Weekly updates and assignments</li>
              <li>Learning objectives and course goals</li>
            </ol>
              </div>
              </section>
              </div>
          </section>
          <section className="wd-content" id="toc-tip-4">
          <h3 id="tip-4" className="section-top anchor">Adding Custom Styles</h3>
          <p>There is always opportunity to introduce custom styles to your course theme. However, whenever possible, avoid adding inline styles directly to your html. Instead, communicate your custom style vision to the web design team, and they will implement it using a CSS stylesheet. This helps keep your code clean, maintainable, and scalable – ensuring a professional and polished appearance.</p>
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
