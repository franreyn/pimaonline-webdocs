import Image from "next/image";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ display: isVisible ? 'block' : 'none' }}>
      <button onClick={handleClick} className="to-top-btn" aria-label="Scroll back to top">
        <Image 
          src="/images/top-icon.svg" 
          alt="Scroll to top icon" 
          width={20} 
          height={20} 
          className="to-top-icon"
        />
        <span className="to-top-text">Back to Top</span>
      </button>
    </div>
  );
}
