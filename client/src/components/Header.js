import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar expand="lg" className="bg-primary bg-secondary">
          <Container fluid>
            <Navbar.Brand href="/">MotorVibe</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-4 my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/perfil">Perfil</Nav.Link>
              </Nav>
              <Nav
                className="mx-4 my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/ruta">Ruta</Nav.Link>
              </Nav>
              <Nav
                className="mx-4 my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/nuevaruta">Crear Ruta</Nav.Link>
              </Nav>
              <Nav
                className="mx-4 my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/misrutas">Lista Rutas</Nav.Link>
              </Nav>
              <Form className="d-flex me-auto">
                <Form.Control
                  type="search"
                  placeholder="Buscar ruta.."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark text-dark">Buscar</Button>
              </Form>
              <Nav>
              <Nav.Link href="/signin">Iniciar Sesión</Nav.Link>
                <Nav.Link href="/signup">Registrarse</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default Header;