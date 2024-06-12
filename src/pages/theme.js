import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/theme.module.css"
import Navbar from '@/components/Navbar';
import Head from 'next/head'
import GallerySidebar from '@/components/GallerySidebar';
import Footer from '@/components/Footer';
import LayoutCarousel from '@/components/LayoutCarousel';

export default function Theme() {

  const router = useRouter();
  const { name, description, code } = router.query;
  const [activeThemeIndex, setActiveThemeIndex] = useState(0);

  return (  
    <>
    <div className={styles.pageWrapper}>
    <Head>
    <title>{`${name} Theme`}</title>
    </Head>
    <div>
      <header className={`${styles.header} wd-header`}>
        <Navbar />
      </header>
      <div className="wd-intro">
    <h1>Browse Course Themes</h1>
      <p className='wd-break'>Streamlined and responsive course themes for any subject matter. Ready to use with any combination of layout, widgets, and utilities. </p>
      </div>
      <div className={`${styles.themesGallery} wd-grid`}>
        <aside>
         <GallerySidebar onThemeSelect={setActiveThemeIndex} />
        </aside>
      <main>
        <h2>{name}<span className={styles.badge}>{code}</span></h2>
        <p className={styles.description}>{description}</p>
      <a href=''></a>
      <LayoutCarousel activeIndex={activeThemeIndex} />
      </main>
      </div>
      </div>
      <footer>
        <Footer />
      </footer>
      </div>
      </>
      )}