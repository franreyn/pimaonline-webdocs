import themeArray from "../components/themeData";
import styles from "../styles/themes.module.css"
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Head from 'next/head'
import GallerySidebar from "@/components/GallerySidebar";
import Footer from "@/components/Footer";

export default function Themes({ onThemeSelect }) {

  const [theme, setTheme] = useState();

  const handleThemeClick = (index) => {
    const selectedTheme = themeArray[index]; 
    setTheme(selectedTheme);
  };

  return (
    <>
    <Head>
    <title>Theme Gallery</title>
    </Head>
      <header className="wd-header">
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Themes</h1>
      <p className='wd-break'>Streamlined and responsive course themes for any subject matter. Ready to use with any combination of layout, widgets, and utilities. </p>
      </div>
      <div className={`${styles.themesGallery} wd-grid`}>
    <aside>
      <GallerySidebar onThemeSelect={handleThemeClick} />
    </aside>
      <main>
      <div className={styles.galleryGrid}>
      {themeArray.map((item) => (
            <div className={styles.galleryItem} key={item.theme}>
              <div className={styles.overlay}>
                <img src={item.image2} />
              </div>
              <div key={item.theme}>
              <div className={styles.galleryInfo}>
                <p>{item.name}</p>
              <Link href={{
                pathname: "/theme",
                query: {...item },
              }}
              onClick={() => onThemeSelect(activeIndex)}
              >
                View Theme
              </Link>
                </div>
              </div>
            </div>
          ))}
           </div>
      </main>
      </div>
      <footer>x
        <Footer />
      </footer>
    </>
  )
}
