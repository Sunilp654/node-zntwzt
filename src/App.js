import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Comp/Navigation';
import CarouselSlider from './Comp/CarouselSlider';
import ProductCard from './Comp/ProductCard';
// import Login from './Comp/Login';
import Footer from './Comp/Footer';
import './Comp/Style.css';

function App() {
  return (
    <>
      <Navigation />
      <CarouselSlider />
      <ProductCard />
      {/* <Login /> */}
      <Footer />
    </>
  );
}

export default App;
