import './carouselImage.css';
const CarouselImage = ({ src, text }) => {
    return (
        <img
            src={src}
            alt={text}
            className="carousel-image"
        />
    );
}

export default CarouselImage;
