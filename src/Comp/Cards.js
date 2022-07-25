import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import { Card } from 'react-bootstrap';
const Cards = ({ datafind }) => {
  //const datafind5 = dataprop;
  //console.log(datafind5, 'datafind');
  //const [datafind2] = useState(datafind5);
  //console.log(datafind2, 'datafind');
  //const productDetail = (id) => {}
  return (
    <>
      <Link to={`/products/${datafind.id}`}>
        <Col
          md={4}
          className="mb-2 producthover"
          id={datafind.id}
          //onClick={() => productDetail(datafind.id)}
        >
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={datafind.image} />
            <Card.Body>
              <Card.Title className="d-flex justify-content-between">
                {`${datafind.title.substring(0, 15)}...`}
                <span style={{ paddingLeft: '25px', color: 'blue' }}>
                  {datafind.price}
                  {' $'}
                </span>
              </Card.Title>
              <Card.Text>{`${datafind.description.substring(
                0,
                50
              )}...`}</Card.Text>
              <Row className="d-flex flex-row">
                <Col md={6} xs={6}>
                  <Button variant="primary">Add To Cart</Button>
                </Col>
                <Col md={6} xs={6}>
                  <Button variant="dark">Add To WishList</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Link>
    </>
  );
};
export default Cards;
