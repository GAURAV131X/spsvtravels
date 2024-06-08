// Carousel.tsx
import React, { useRef, useEffect } from 'react';
import './horizontalCarousel.css';

interface Item {
  title: string;
  description: string;
}

interface CarouselProps {
  items: Item[];
}

const HorizontalCarousel: React.FC<CarouselProps> = ({ items }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="carousel-container" ref={carouselRef}>
      <div className="carousel">
        {items.concat(items).map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCarousel;
