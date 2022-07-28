import 'bootstrap/dist/css/bootstrap.min.css';
import './CompII/Style.css';
import NavBar from './CompII/NavBar';
import Home from './CompII/Home';
import Products from './CompII/Products';
import Product from './CompII/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppII = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppII;
