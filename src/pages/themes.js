import themeArray from "../components/themeData";
import styles from "../styles/themes.module.css"
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState, useLayoutEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Head from 'next/head'
import GallerySidebar from "@/components/GallerySidebar";
export default function Themes() {

  const [theme, setTheme] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [buttonColor, setButtonColor] = useState();
  const [hoverColor, setHoverColor] = useState();

  const handleThemeClick = (selectedTheme, selectedName, selectedDescription, selectedButtonColor, selectedHoverColor) => {
    setTheme(selectedTheme);
    setName(selectedName);
    setDescription(selectedDescription);
    setButtonColor(selectedButtonColor);
    setHoverColor(selectedHoverColor);
  };

  // Remove any existing theme link (required to keep theme styles just on the theme page)
  useLayoutEffect(() => {
          const existingLink = document.querySelector('link[data-theme-link]');
          if (existingLink) {
            document.head.removeChild(existingLink);
          }
  })

  return (
    <>
    <Head>
    <title>Theme Gallery</title>
    </Head>
            <header className="wd-header">
        <Navbar />
      </header>
      <div className={`${styles.themesGallery} wd-grid`}>
    <aside>
      <GallerySidebar />
    </aside>
      <main>
      <div className={styles.galleryGrid}>
      {themeArray.map((item) => (
            <div className={styles.galleryItem} key={item.theme}>
              <div className={styles.overlay}>
                <img src={item.image} />
              </div>
              <div className={styles.galleryInfo}>
                <p>{item.name}</p>
                <Link
                  href={{
                      pathname: "/theme",
                  query: { ...item },
                  }}
                  onClick={() => handleThemeClick(item.theme, item.name, item.description, item.buttonColor, item.hoverColor)}
               >
                  View Theme
                </Link>
              </div>
            </div>
          ))}     
           </div>
      </main>
      </div>
    </>
  )
}
