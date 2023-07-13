import themeArray from "../components/themeData";
import styles from "../styles/themes.module.css"
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState, useLayoutEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Head from 'next/head'

export default function Themes() {

  const [theme, setTheme] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const handleThemeClick = (selectedTheme, selectedName, selectedDescription) => {
    setTheme(selectedTheme);
    setName(selectedName);
    setDescription(selectedDescription);
  };

  useLayoutEffect(() => {
          // Remove any existing theme link
          const existingLink = document.querySelector('link[data-theme-link]');
          if (existingLink) {
            document.head.removeChild(existingLink);
          }
  })

  return (
    <>
    <Head>
    <title>Theme Gallery</title>
        <meta name="description" content="Pima Online Webdocs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
            <header>
        <Navbar />
      </header>
      <div className="wd-grid">
    <aside>
      <Sidebar />
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
                  onClick={() => handleThemeClick(item.theme, item.name, item.description)}
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
