import React, { useEffect, useState } from 'react';

import { Container, Row } from 'react-bootstrap';
import Cards from './Cards';
import CatButton from '../Comp/CatButton';
const ProductCard = () => {
  const url = 'https://fakestoreapi.com/products';
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filtered2, setFiltered2] = useState([]);
  const [activeGenre, setActiveGenre] = useState();
  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async () => {
    const data = await fetch(url);
    const dataget = await data.json();
    //console.log(dataget);
    setPopular(dataget);
    setFiltered(dataget);
    setFiltered2(dataget);
  };
  return (
    <>
      <div className="App">
        <h1 className="my-3">All Products</h1>
        <CatButton
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
          filtered2={filtered2}
        />
      </div>

      <Container className="mt-4 appclass">
        <Row>
          {filtered.map((datafind) => {
            return <Cards datafind={datafind} />;
          })}
        </Row>
      </Container>
    </>
  );
};
export default ProductCard;
