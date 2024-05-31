import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="wd-content-wrapper">
      <div className="wd-hero">
        <div className="wd-text-container">
          <h1>Build courses efficiently, <br />without coding from scratch.</h1>
          <p>Create online courses easily using our pre-coded templates. With access to over 20 widgets and utility classes, you have the freedom to customize your courses with ease.</p>
          <Link className="wd-btn" href="/getting-started">Get Started</Link>
        </div>
      </div>
      <main>
      <section className="wd-side-by-side">
        <div className="wd-side-by-side-item">
          <h2>Developing <br />online courses <br />just got easier</h2>
          <Link className="wd-btn" href="/getting-started">Explore Themes</Link>
        </div>
        <div className="wd-side-by-side-item">
        <Carousel />
        </div>
      </section>
      <br />
      <br />
      <section className="wd-tricolumn">
        <div className="wd-tricolumn-item">
          <Image src="/images/improving-icon.png" alt="" width={100} height={100} />
          <h3>Continuously <br /> Improving</h3>
          <p>Our code is stored in the cloud, trickling down to all courses. So when we make updates to our code, all courses are updated too.</p>
        </div>
        <div className="wd-tricolumn-item">
        <Image src="/images/time-icon.png" alt="" width={100} height={100} />
          <h3>Saving Time <br /> and Energy</h3>
          <p>With premade themes, widgets, and layouts, you can spend less time coding and more time on your course content.</p>
        </div>
        <div className="wd-tricolumn-item">
        <Image src="/images/code-icon.png" alt="" width={100} height={100} />
          <h3>Customizable <br /> Coding</h3>
          <p>With our variety of pre-coded widgets, you can set up your course however you see fit. Pick and choose what works for you.</p>
        </div>
      </section>
      </main>
    </div>
  )
}

export default Home