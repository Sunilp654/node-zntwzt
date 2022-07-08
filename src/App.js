import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Comp/Navigation';
import CarouselSlider from './Comp/CarouselSlider';
import ProductCard from './Comp/ProductCard';
import Footer from './Comp/Footer';
import './Comp/Style.css';

function App() {
  return (
    <>
      <Navigation />
      <CarouselSlider />
      <ProductCard />
      <Footer />
    </>
  );
}

export default App;
