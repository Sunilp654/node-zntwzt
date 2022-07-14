import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function ProductCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const postsData = await response.json();
      setData(postsData);
    };
    fetchdata();
  }, []);

  return (
    <Container className="mt-3 card-section">
      <h3 className="text-center my-5">
        <span className="top-heading">All PRODUCTS</span>
      </h3>
      {/* <Row>
        <ul>
          <li>
            <Button>Electronics</Button>
          </li>
          <li>
            <Button>Men's Clothing</Button>
          </li>
          <li>
            <Button>Women's Clothing</Button>
          </li>
          <li>
            <Button>Wg</Button>
          </li>
        </ul>
      </Row> */}
      <Row>
        {data.map((post, index) => {
          return (
            <>
              <Col md={4} className="mb-2" id={post.id}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={post.image} />
                  <Card.Body>
                    <Card.Title>
                      {`${post.title.substring(0, 15)}...`}
                      <span style={{ paddingLeft: '25px', color: 'blue' }}>
                        {post.price}
                        {' $'}
                      </span>
                    </Card.Title>
                    <Card.Text>{`${post.description.substring(
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
            </>
          );
        })}
      </Row>
    </Container>
  );
}

export default ProductCard;
