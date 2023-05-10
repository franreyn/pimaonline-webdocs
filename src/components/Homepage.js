import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="wd-content-wrapper">
      <div class="wd-header">
        <div className="wd-text-container">
          <h1>Build courses efficiently without coding from scratch</h1>
          <p>Create online courses easily using our pre-coded templates. With access to over 20 widgets and utility classes, you have the freedom to customize your courses.</p>
          <Link className="wd-btn" href="getting-started.html">Get Started</Link>
        </div>
      </div>
      <section>
        <h2 className="wd-text-center mb-12">Online course development just got easier</h2>
        <div class="wd-img-wrap mb-12">
          <Image className="wd-preview-img" src="/images/theme-2.png" alt="Snapshot of dental theme" width={250} height={150} />
          <Image className="wd-preview-img" src="/images/theme-1.png" alt="Snapshot of HR theme" width={400} height={250} />
          <Image className="wd-preview-img" src="/images/theme-3.png" alt="Snapshot of fitness theme" width={250} height={150} />
        </div>
        <div class="wd-btn-center">
          <Link className="wd-btn" href="getting-started.html">Explore Themes</Link>
        </div>
      </section>
      <section className="wd-grid">
        <div class="wd-text-container">
          <h2>Always the latest technology thanks to continuous improvement</h2>
          <p>We store our code in the cloud and that code trickles down to all courses. This means that when we update our code, all courses are updated too.</p>
        </div>
        <Image className="wd-preview-img" src="/images/code.png" alt="" width={400} height={250} />
      </section>
      <section className="wd-reverse-grid">
        <div class="wd-text-container">
          <h2>Easily customizable and project specific</h2>
          <p>We offer a selection of themes, these themes are program specific and customizable. Non program specific customizable themes are also available.</p>
        </div>
        <Image className="wd-preview-img" src="/images/widget-ex.png" alt="" width={400} height={250} />
      </section>
    </div>
  )
}

export default Home