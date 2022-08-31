import 'bootstrap/dist/css/bootstrap.min.css';
//import { useState } from 'react';
import './CompII/Style.css';
// import Todo from './CompII/Todo';
import NavBar from './CompII/NavBar';
import Home from './CompII/Home';
import Products from './CompII/Products';
import Product from './CompII/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Apidata from './CompII/Apidata';
// import Daysname from './CompII/Daysname';
// import Accordion from 'react-bootstrap/Accordion';

const AppII = () => {
  //const [data] = useState(Apidata);

  //const [days] = useState(daysn);
  //const dys = data.applicableOn;
  //const [daysname] = useState(dys);

  return (
    <>
      {/* <Todo /> */}
      {/* <Accordion>
        {data.map((dataget) => {
          var daysn = dataget.applicableOn.split(',');
          return (
            <>
              <Accordion.Item eventKey={dataget.ID}>
                <Accordion.Header>{dataget.DiscountName}</Accordion.Header>
                <Accordion.Body>
                  <p>{dataget.StartDate}</p>
                  <Daysname daysname={daysn} />
                </Accordion.Body>
              </Accordion.Item>
            </>
          );
        })}
      </Accordion> */}
      <div></div>

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
