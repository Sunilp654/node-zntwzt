import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
//import './CompII/Style.css';
// import NavBar from './CompII/NavBar';
// import Home from './CompII/Home';
// import Products from './CompII/Products';
// import Product from './CompII/Product';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Apidata from './CompII/Apidata';
import Accordion from 'react-bootstrap/Accordion';

const AppII = () => {
  const [data] = useState(Apidata);
  const [checkedM, setCheckedM] = useState(true);
  const [checkedT, setCheckedT] = useState(true);
  const [checkedW, setCheckedW] = useState(true);
  const [checkedTH, setCheckedTH] = useState(true);
  const [checkedF, setCheckedF] = useState(false);
  const [checkedSA, setCheckedSA] = useState(true);
  const [checkedSU, setCheckedSU] = useState(true);
  //const dys = data.applicableOn;
  //const [daysname] = useState(dys);
  return (
    <>
      <Accordion>
        {data.map((dataget) => {
          //const dys = dataget.applicableOn;
          var pieces = dataget.applicableOn.split(',');
          {
            pieces.map((daysname) => {
              //console.log(daysname, 'days');
              //switch (daysname) {
              // case 'Sunday':
              // return setCheckedSU(true);
              //       case 'Monday':
              //         return setCheckedM(true);
              //       case 'Tuesday':
              //         return setCheckedT(true);
              //       case 'Wednesday':
              //         return setCheckedW(true);
              //       case 'Thursday':
              //         return setCheckedTH(true);
              //       case 'Friday':
              //         return setCheckedF(true);
              //       case 'Saturday':
              //         return setCheckedSA(true);
              //default:
              //return null;
              // }
            });
          }
          //console.log(pieces);
          //console.log(pieces);
          //console.log(dysname);
          return (
            <>
              <Accordion.Item eventKey={dataget.ID}>
                <Accordion.Header>{dataget.DiscountName}</Accordion.Header>
                <Accordion.Body>
                  <p>{dataget.StartDate}</p>

                  <div className="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        value="Sunday"
                        checked={checkedSU ? true : false}
                        disabled={checkedSU ? false : true}
                      />
                      Sunday
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="Monday"
                        checked={checkedM ? true : false}
                        disabled={checkedM ? false : true}
                      />
                      Monday
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="Tuesday"
                        checked={checkedT ? true : false}
                        disabled={checkedT ? false : true}
                      />
                      Tuesday
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="Wednesday"
                        checked={checkedW ? true : false}
                        disabled={checkedW ? false : true}
                      />
                      Wednesday
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="Thursday"
                        checked={checkedTH ? true : false}
                        disabled={checkedTH ? false : true}
                      />
                      Thursday
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="Friday"
                        checked={checkedF ? true : false}
                        disabled={checkedF ? false : true}
                      />
                      Friday
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        value="Saturday"
                        checked={checkedSA ? true : false}
                        disabled={checkedSA ? false : true}
                      />
                      Saturday
                    </label>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </>
          );
        })}
      </Accordion>
      {/* <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
};

export default AppII;
