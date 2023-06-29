import Head from "next/head";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Layouts() {
  return (
    <>
      <Head>
        <title>Layouts</title>
        <meta name="description" content="Pima Online Webdocs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <div className="wd-grid">
      <main>
        <div>
          <h1>Layouts</h1>
          <p>You may choose between three layout types.</p>
          <div className="layout-section">
          <h2>One Column Layout</h2>
          <p>The <b>One Column Layout</b> is ideal for inner pages, meaning the pages that come after the module overview and contain the majority of the learning content. Its simple single-column design allows content to flow from top to bottom keeping the learner's focus on one item at a time. This layout is great for text heavy and information heavy sections.</p>
          <div>
            <p>image</p>
            <p>code</p>
          </div>
          </div>

          <div className="layout-section">
          <h2>Two Column Layout</h2>
          <p>The <b>Two Column Layout</b> is ideal for module overviews. In the larger left-column you can place primary content such as learning objectives, required readings, or homework. In the smaller right-column you can place supplementary content such as an assignments list, image gallery, or vocabulary list.</p>
          <div>
            <p>image</p>
            <p>code</p>
          </div>
          </div>

          <div className="layout-section">
          <h2>Three Section Layout</h2>
          <p>The <b>Three Section Layout</b> displays two columns with a full-width column underneath. This layout is a combination of both previous layouts and is ideal for overview modules when the overview content is more involved.</p>
          <div>
            <p>image</p>
            <p>code</p>
          </div>
          </div>
        </div>
      </main>
      <aside>
          <Sidebar />
        </aside>
        </div>
    </>
  )
}
