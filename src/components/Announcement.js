import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../styles/announcements.module.css";

export default function Announcement() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const showAnnouncement = window.scrollY < 150;
      setIsHidden(!showAnnouncement);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles['wd-announcement']} ${isHidden ? styles['wd-announcement-hidden'] : ''}`}>
      <section className="announcement-side-by-side">
      <div className="announcement-side-by-side-item first">
      <p><span className="badge">New!</span> <span className="feature">View Options</span></p>
      </div>
      <div className="announcement-side-by-side-item second">
      <p className="navy">An optional plugin that can be easily added to any course page to allow all or any of these features: dark-mode, large-text, narrow-width, and focus-text. </p> 
      </div>
      <div className="announcement-side-by-side-item third">
      <Link className="announcement-btn" href="/plugins">Learn More</Link>
        </div>
      </section>
    </div>
  )
}