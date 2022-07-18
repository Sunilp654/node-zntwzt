import { Container, Row, Col } from 'react-bootstrap';
import CatButton from './CatButton';
import { useState, useEffect } from 'react';
import Cards from './Cards';

function ProductCard() {
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const postsData = await response.json();
      setData2(postsData);
      setfilterDataI(postsData);
    };
    fetchdata();
  }, []);
  const [data2, setData2] = useState([]);
  const datafind = data2;
  //const [datafind2d] = useState(data2);
  //console.log(datafind2d, 'datadd');
  //const [data, setData] = useState(datafind);
  const [filterdataI, setfilterDataI] = useState([]);

  // console.log(data, 'data');
  // console.log(filterdataI, 'data2');

  const filterdata = (curcat) => {
    const newItem = data2.filter((newVal) => {
      return newVal.category === curcat;
      // comparing category for displaying data
    });
    setData2(newItem);

    if (curcat === 'All') {
      setData2(data2);
    }
  };
  return (
    <Container className="mt-3 card-section">
      <h3 className="text-center my-5">
        <span className="top-heading">All PRODUCTS</span>
      </h3>
      <Row>
        <Col
          md={8}
          className="mx-auto pb-4 catogery-link d-flex justify-content-center"
        >
          <CatButton filterdata={filterdata} NavItem={filterdataI} />
        </Col>
      </Row>

      <Row>
        <Cards dataprop={datafind} />
      </Row>
    </Container>
  );
}

export default ProductCard;
