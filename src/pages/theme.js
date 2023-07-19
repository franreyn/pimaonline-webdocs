import  { useEffect } from 'react';
import LayoutOneColumn from '@/components/LayoutOneColumn';
import LayoutTwoColumn from '@/components/LayoutTwoColumn';
import LayoutThreeColumn from '@/components/LayoutThreeColumn';
import { useRouter } from "next/router";
import styles from "../styles/theme.module.css"
import Navbar from '@/components/Navbar';
import Script from "next/script";
import Head from 'next/head'
import ThemeSidebar from '@/components/themeSidebar';

export default function Theme() {

  const router = useRouter();
  const { theme, name, description, buttonColor, hoverColor } = router.query;


  useEffect(() => {

    // Remove the :before pseudo-element by setting its content to an empty string for top level menu
    const navigationLinks = document.querySelectorAll(".nav-links>li::before");
    navigationLinks.forEach((link) => {
      link.style.content = "";
    });

    // Change the background of the body to dark blue 
    const docBody = document.querySelector("body");
    docBody.style.backgroundColor = "#1e2238";

    // Set color for elements with class .btn
    const btnElements = document.querySelectorAll("a.btn");

    btnElements.forEach((btnElement) => {
      const color = buttonColor ? buttonColor : "white";
      const hover = hoverColor ? hoverColor : "white";

      btnElement.style.setProperty("color", color, "important");    
    
     // Set hover style
    btnElement.addEventListener("mouseover", () => {
    btnElement.style.setProperty("color", hover, "important");
  });
    btnElement.addEventListener("mouseout", () => {
    btnElement.style.setProperty("color", color, "important");
  });
    });
  }, [buttonColor]);

  return (  
    <>
    <div className={styles.pageWrapper}>
    <Head>
    <title>{`${name} Theme`}</title>
    </Head>
    <div style={{backgroundColor: "rgba(29, 34, 56, 1)"}} >
      <header className={styles.header}>
        <Navbar />
      </header>
      <div className={`${styles.layoutArea} wd-grid`}>
        <aside>
          <ThemeSidebar/>
        </aside>
      <main>
      <h1 className={styles.mainH1}>{name}</h1>
        <p className={styles.description}>{description}</p>
      <h2 className={styles.h2}>1 Column Layout</h2>
      <a href=''></a>
      <LayoutOneColumn theme={theme} />
      <h2 className={styles.h2}>2 Column Layout</h2>
      <LayoutTwoColumn theme={theme}  />
      <h2 className={styles.h2}>3 Column Layout</h2>
      <LayoutThreeColumn theme={theme}  />
      </main>
      </div>
      </div>
      <Script src="/scripts.js" />
      </div>
      </>
      )}