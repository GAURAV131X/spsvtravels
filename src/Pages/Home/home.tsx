import Header from '../../Components/Header/header';
import CarouselFade from '../../Components/MainCarousel/mainCarousel';
import DestinationHeading from '../../Components/DestinationHeading/destinationHeading';
import './home.css';
import Footer from '../../Components/Footer/footer';
import DiscountBanner from '../../Components/DiscountBanner/discountBanner';
import DestinationGrid from '../../Components/DestinationGrid/destinationGrid';
import HorizontalCarousel from '../../Components/HorizontalCarousel/horizontalCarousel';


const items = [
    { title: 'Card 1', description: 'This is the first card' },
    { title: 'Card 2', description: 'This is the second card' },
    { title: 'Card 3', description: 'This is the third card' },
    { title: 'Card 4', description: 'This is the fourth card' },
    { title: 'Card 5', description: 'This is the fifth card' },
    { title: 'Card 1', description: 'This is the first card' },
    { title: 'Card 2', description: 'This is the second card' },
    { title: 'Card 3', description: 'This is the third card' },
    { title: 'Card 4', description: 'This is the fourth card' },
    { title: 'Card 5', description: 'This is the fifth card' }
];


function LandingPage() {
    return (
        <>
            <Header />
            <CarouselFade />
            <DestinationHeading />
            <DestinationGrid />
            <DiscountBanner />
            <HorizontalCarousel items={items} />
            <Footer />
        </>
    )
}
export default LandingPage;