import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLayout from './NavLayout';
import Bodypart from './Bodypart';
import About from './About';
import Electronics from './Electronics';
import ProductDetail from './ProductDetail';

// import { NavDropdown } from 'react-bootstrap';

function Navigation() {
  return (
    <>
      <BrowserRouter>
        <NavLayout />
        <Routes>
          <Route path="/" element={<Bodypart />} />
          <Route path="/About" element={<About />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navigation;
