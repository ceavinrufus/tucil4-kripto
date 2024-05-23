// src/components/Navbar.jsx
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar variant="transparent" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          TranScript
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link as={Link} to="/input-data">
              Input Data
            </Nav.Link>
            <Nav.Link as={Link} to="/transcripts">
              Database
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
