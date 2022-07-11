import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function ProductCard() {
  return (
    <Container className="mt-3 card-section">
      <h3 className="text-center my-5">
        <span className="top-heading">All PRODUCTS</span>
      </h3>
      <Row>
        <Col md={4} className="mb-2">
          <Card style={{ width: '100%' }}>
            <Card.Img
              variant="top"
              src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/09/product-photography-types-water-bottle.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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
      </Row>
    </Container>
  );
}

export default ProductCard;
