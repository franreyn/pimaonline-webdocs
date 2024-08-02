import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import themeArray from "../components/themeData";
import styles from "../styles/gallery-sidebar.module.css";

export default function GallerySidebar({ onThemeSelect }) {
  const [tocOpen, setTocOpen] = useState(false);
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    // When the query changes, select the appropriate theme
    if (query.theme) {
      const selectedThemeIndex = themeArray.findIndex((item) => item.theme === query.theme);
      if (selectedThemeIndex !== -1) {
        onThemeSelect(selectedThemeIndex);
      }
    }
  }, [query]);

  const toggleTOC = () => {
    setTocOpen(!tocOpen);
  };

  const closeSidebar = () => {
    setTocOpen(false);
  };

  return (
    <div className={styles.themeSidebarBody} style={{ fontSize: "16px" }}>
      <button className="toc-btn" onClick={toggleTOC}>
        <Image className="toc-icon" src="/images/toc.svg" alt="table of content open button" width={20} height={16} />
      </button>
      <button className={`${styles.closeBtn} close-btn ${tocOpen ? `${styles.showCloseBtn} show-close-btn` : "hide-close-btn"}`} onClick={closeSidebar}>
        <span className={styles.firstSpan}></span>
        <span className={styles.secondSpan}></span>
      </button>
      <ul className={`wd-sidebar ${styles.themeSidebar} ${tocOpen ? `${styles.showToc} show-toc` : `${styles.hideToc} hide-toc`}`}>
        <li className={styles.themesListTitle}>
          <Link className="theme-sidebar-title" href="/themes">Themes</Link>
          <ul className={styles.themeList}>
            {themeArray.map((item, index) => (
              <li className={styles.innerLink} key={item.theme}>
                <Link
                  href={{
                    pathname: "/theme",
                    query: { ...item },
                  }}
                  onClick={() => onThemeSelect(index)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
