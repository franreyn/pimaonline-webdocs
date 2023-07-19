import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import themeArray from "./themeData";
import styles from "../styles/theme-sidebar.module.css"

export default function ThemeSidebar() {
  const [tocOpen, setTocOpen] = useState(false);

  const toggleTOC = () => {
    setTocOpen(!tocOpen);
  };

  const closeSidebar = () => {
    setTocOpen(false);
  };

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

  return (
    <div className={styles.themeSidebarBody} style={{ fontSize: '16px' }} >
      <button className="toc-btn" onClick={toggleTOC}>
        <Image className="toc-icon" src="/images/toc.svg" alt="table of content open button" width={20} height={16} />
        <p className={styles.themeSidebarText}>Themes</p>
      </button>
      <button className={`${styles.closeBtn} close-btn ${tocOpen ? `${styles.showCloseBtn} show-close-btn` : 'hide-close-btn'}`} onClick={closeSidebar}>
        <span className={styles.firstSpan}></span>
        <span className={styles.secondSpan}></span>
      </button>
      <ul className={`wd-sidebar ${styles.themeSidebar} ${tocOpen ? `${styles.showToc} show-toc` : `${styles.hideToc} hide-toc`}`}>
        <li className={styles.themesListTitle}> Themes
      <ul className={styles.themeList}>
      {themeArray.map((item) => (
        <li className={styles.innerLink} key={item.theme}> <Link href={{
          pathname: "/theme",
        query: { ...item },
      }}
      onClick={() => handleThemeClick(item.theme, item.name, item.description, item.buttonColor, item.hoverColor)}
      >{item.name}</Link></li>
      ))
}
      </ul>
</li>
      </ul>
    </div>
  )
}