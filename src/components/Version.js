import React, { useState, useEffect } from "react";
import styles from "../styles/version.module.css";
import Image from "next/image";

export const currentVersion = "5.0.29";

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
      <p className="pub-version">Latest v{currentVersion}</p>
      <a href="https://github.com/franreyn/pimaonline-themepack" target="_blank" rel="noopener noreferrer">
      <Image src="/images/github-icon.svg" alt="GitHub logo" width={20} height={20}/></a>
    </div>
  )
}