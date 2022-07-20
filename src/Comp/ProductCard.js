import { Container, Row, Col } from 'react-bootstrap';
import CatButton from './CatButton';
import { useState, useEffect } from 'react';
import Cards from './Cards';

function ProductCard() {
  const url = 'https://fakestoreapi.com/products';
  const [data2, setData2] = useState([]);
  const [datafilter, setdataFilter] = useState([]);
  //const datafind = data2;
  const [filterdataI, setfilterDataI] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(url);
      const postsData = await response.json();
      setData2(postsData);
      setfilterDataI(postsData);
      setdataFilter(postsData);
    };
    fetchdata();
  }, []);

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
          <CatButton
            data2={data2}
            setData2={setData2}
            datafilter={datafilter}
            filterdataI={filterdataI}
            setdataFilter={setdataFilter}
            setfilterDataI={setfilterDataI}
          />
        </Col>
      </Row>

      <Row>
        <Cards dataprop={data2} />
      </Row>
    </Container>
  );
}

export default ProductCard;
