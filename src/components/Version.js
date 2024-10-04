import React, { useState, useEffect } from "react";
import styles from "../styles/version.module.css";

export default function Version() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const showVersion = window.scrollY < 150;
      setIsHidden(!showVersion);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles['wd-version']} ${isHidden ? styles['wd-version-hidden'] : ''}`}>
      <p className="pub-version">LATEST VERSION PUBLISHED v5.0</p>
    </div>
  )
}