import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "/images/themes/ajs-02.jpg",
      alt: "Snapshot of Administration of Justice theme",
    },
    {
      src: "/images/themes/bct-03.jpg",
      alt: "Snapshot of Building & Contstruction theme",
    },
    {
      src: "/images/themes/lang-01.jpg",
      alt: "Snapshot of Language theme",
    },
    {
      src: "/images/themes/minimalist-03.jpg",
      alt: "Snapshot of Minimalist theme",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-container">
        <button className="previous-button" onClick={handlePrevious}>
          <Image src="/images/arrow-left-solid.png" alt="Left arrow" width={30} height={30} />
        </button>
        <Image src={images[activeIndex].src} alt={images[activeIndex].alt} width={400} height={200} priority/>
        <button className="next-button" onClick={handleNext}>
          <Image src="/images/arrow-right-solid.png" alt="Right arrow" width={30} height={30} />
        </button>
      </div>
    </div>
  );
};