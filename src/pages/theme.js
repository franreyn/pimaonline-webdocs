import  { useLayoutEffect } from 'react';
import LayoutOneColumn from '@/components/LayoutOneColumn';
import LayoutTwoColumn from '@/components/LayoutTwoColumn';
import LayoutThreeColumn from '@/components/LayoutThreeColumn';
import { useRouter } from "next/router";
import styles from "../styles/theme.module.css"
import Navbar from '@/components/Navbar';
import Script from "next/script";
import Sidebar from '@/components/Sidebar';
import Head from 'next/head'

export default function Theme() {

  const router = useRouter();
  const { theme, name, description } = router.query;

  useLayoutEffect(() => {
    const navigationLinks = document.querySelectorAll(".nav-links>li::before");

    navigationLinks.forEach((link) => {
      // Remove the :before pseudo-element by setting its content to an empty string
      link.style.content = "";
    });
  }, []);

  return (   
    <>
    <Head>
    <title>{`${theme} Theme`}</title>
        <meta name="description" content="Pima Online Webdocs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div  style={{backgroundColor: "rgba(29, 34, 56, 1)"}} >
      <header className={styles.header}>
        <Navbar />
      </header>
      <div className={`${styles.layoutArea} wd-grid`}>
        <aside>
          <Sidebar/>
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
      </>
      )}