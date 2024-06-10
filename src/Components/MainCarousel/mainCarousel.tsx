import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../CarouselImage/carouselImage';
import './mainCarousel.css';

function MainCarousel() {
  return (
    <Carousel fade={true} interval={5000} pause={false} style={{
      width: '100%'
    }}>
      <Carousel.Item>
        <CarouselImage src='/images/1.jpeg' text="First slide" />
        <Carousel.Caption >
          <h1 style={{ fontFamily: 'Dancing Script' }}>Discover India </h1>
          <p>Unforgettable Tours, Timeless Memories Contact US</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src='/images/2.jpeg' text="Second slide" />
        <Carousel.Caption>
          <h1 style={{ fontFamily: 'Dancing Script' }}>Experience Dubai</h1>
          <p>Unparalleled Adventures in the City of Wonders</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src='/images/3.jpeg' text="Third slide" />
        <Carousel.Caption>
          <h1 style={{ fontFamily: 'Dancing Script' }}>Need Vitamin Sea ?</h1>
          <p>We can make it possible. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src='/images/4.jpeg' text="Fourth slide" />
        <Carousel.Caption>
          <h1 style={{ fontFamily: 'Dancing Script' }}>Embark on a Desert Adventure</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src='/images/5.jpeg' text="Fifth slide" />
        <Carousel.Caption>
          <h1 style={{ fontFamily: 'Dancing Script' }}>Singapore Awaits</h1>
          <p>Dive into a World of Modern Marvels and Timeless Charm</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
