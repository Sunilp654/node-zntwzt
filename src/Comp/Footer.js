import { Container, Row, Col, Button } from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid className="footer-bg text-white p-4">
      <Container>
        <Row>
          <Col md={4}>
            <img src="https://www.pngmart.com/files/About-Us-PNG-Isolated-File.png" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </Col>
          <Col md={4} className="footer2nd-section">
            <h6>Links</h6>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </Col>
          <Col md="4">
            <h6>Contact US</h6>
            <div className="d-flex flex-column">
              <input type="text" placeholder="Email*" className="mb-2" />
              <textarea placeholder="Message*" className="mb-2"></textarea>
              <Button className="btn mb-2">Submit</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
