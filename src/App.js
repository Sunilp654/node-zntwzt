import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Comp/Navigation';
import CarouselSlider from './Comp/CarouselSlider';
import ProductCard from './Comp/ProductCard';
import './Comp/Style.css';

function App() {
  return (
    <>
      <Navigation />
      <CarouselSlider />
      <ProductCard />
    </>
  );
}

export default App;
