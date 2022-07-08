import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function ProductCard() {
  return (
    <Container className="mt-3 card-section">
      <Row>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/09/product-photography-types-water-bottle.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Row>
                <Button variant="primary">Add To Cart</Button>
                <Button variant="dark">Add To WishList</Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductCard;
