import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#E">Electronics</Nav.Link>
            <Nav.Link href="#jewelry">jewelry</Nav.Link>
            <Nav.Link href="#Men">Men's clothing</Nav.Link>
            <Nav.Link href="#Women">Women's clothing</Nav.Link>
          </Nav>
          <NavDropdown
            title="User Name"
            id="basic-nav-dropdown"
            class="float-right"
          >
            <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              WishList{' '}
              <a href="#login" className="itemQuntity">
                2
              </a>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
          <Navbar.Text>
            Cart
            <a href="#login" className="itemQuntity">
              5
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
