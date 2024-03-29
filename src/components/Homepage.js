import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="wd-content-wrapper">
      <div className="wd-hero">
        <div className="wd-text-container">
          <h1>Build courses efficiently without coding from scratch</h1>
          <p>Create online courses easily using our pre-coded templates. With access to over 20 widgets and utility classes, you have the freedom to customize your courses.</p>
          <Link className="wd-btn" href="/getting-started">Get Started</Link>
        </div>
      </div>
      <section className="wd-horizontal-display">
        <h2 className="wd-text-center">Online course development just got easier</h2>
        <Carousel />
        <Link className="wd-btn" href="/getting-started">Explore Themes</Link>
      </section>
      <section className="wd-side-by-side">
        <div className="wd-side-by-side-item">
          <h2>Always the latest technology thanks to continuous improvement</h2>
          <p>We store our code in the cloud and that code trickles down to all courses. This means that when we update our code, all courses are updated too.</p>
        </div>
        <div className="wd-side-by-side-item">
          <Image src="/images/code.png" alt="" width={400} height={250} />
        </div>
      </section>
      <section className="wd-side-by-side reverse">
        <div className="wd-side-by-side-item">
          <h2>Easily customizable and project specific</h2>
          <p>We offer a selection of themes, these themes are program specific and customizable. Non program specific customizable themes are also available.</p>
        </div>
        <div className="wd-side-by-side-item">
          <Image src="/images/widget-ex.png" alt="" width={400} height={250} />
        </div>
      </section>
    </div>
  )
}

export default Home