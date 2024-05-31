import { useState } from 'react';
import Image from 'next/image';
import themeArray from './themeData';

export default function LayoutCarousel({ activeIndex }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((currentIndex) => currentIndex < 2? currentIndex + 1 : 0);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((currentIndex) => currentIndex > 0? currentIndex - 1 : 2);
  };

  const getImageSrc = () => {
    switch (currentImageIndex) {
      case 0:
        return themeArray[activeIndex].image1;
      case 1:
        return themeArray[activeIndex].image2;
      case 2:
        return themeArray[activeIndex].image3;
      default:
        return '';
    }
  };

  const getHeading = () => {
    switch (currentImageIndex) {
      case 0:
        return "One Column";
      case 1:
        return "Two Column";
      case 2:
        return "Three Section";
      default:
        return '';
    }
  };

  return (
    <div className="layoutCarousel">
      <h4 className="layout-type">{getHeading()}</h4>
      <div className="carousel-container">
        <button className="previous-button layoutCarousel" onClick={handlePrevious}>
          <Image src="/images/arrow-left-solid.png" alt="Left arrow" width={20} height={20} />
        </button>
        <Image src={getImageSrc()} alt={themeArray[activeIndex].name} width={1390} height={855} />
        <button className="next-button layoutCarousel" onClick={handleNext}>
          <Image src="/images/arrow-right-solid.png" alt="Right arrow" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};