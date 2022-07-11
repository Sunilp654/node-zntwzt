import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLayout from './Comp/NavLayout';
import Bodypart from './Bodypart.js';
// import { NavDropdown } from 'react-bootstrap';

function Navigation() {
  return (
    <>
      <BrowserRouter>
        <NavLayout />
        <Routes>
          <Route path="/" element={<Bodypart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navigation;
