import { useState } from 'react';
import './Carousel.css';

export function Carousel({ images, ...props }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div className="carousel" {...props}></div>;
  }

  function handlePrev() {
    setIndex(prev => Math.max(prev - 1, 0));
  }

  function handleNext() {
    setIndex(prev => Math.min(prev + 1, images.length - 1));
  }

  return (
    <div className="carousel" {...props}>
      <img src={images[index].src} alt={images[index].alt} />
      <div className="carousel-controls">
        <button onClick={handlePrev} disabled={index === 0}>
          Previous
        </button>
        <span>{index + 1} / {images.length}</span>
        <button onClick={handleNext} disabled={index === images.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}