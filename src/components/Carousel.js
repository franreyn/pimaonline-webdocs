import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-container">
        <button className="previous-button" onClick={handlePrevious}>
          <Image src="/images/chevron-left-solid.png" alt="Left arrow" width={36} height={36} />
        </button>
        <Image src={images[activeIndex].src} alt={images[activeIndex].alt} width={1390} height={855} />
        <button className="next-button" onClick={handleNext}>
          <Image src="/images/chevron-right-solid.png" alt="Right arrow" width={36} height={36} />
        </button>
      </div>
    </div>
  );
};

const images = [
  {
    src: "/images/theme-2.png",
    alt: "Snapshot of dental theme",
  },
  {
    src: "/images/theme-1.png",
    alt: "Snapshot of HR theme",
  },
  {
    src: "/images/theme-3.png",
    alt: "Snapshot of fitness theme",
  },
];