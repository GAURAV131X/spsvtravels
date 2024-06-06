import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="light" data-bs-theme="light" >
            <Container>
                <Navbar.Brand href="/home" style={{ marginLeft :'4rem'}}>
                    <img
                        src="/images/logo.svg"
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/home" style={{ marginLeft :'2rem'}}>Home</Nav.Link>
                    <Nav.Link href="/destinations" style={{ marginLeft :'2rem'}}>Destinations</Nav.Link>
                    <Nav.Link href="/contact" style={{ marginLeft :'2rem'}}>Contact</Nav.Link>
                    <Nav.Link href="/blog" style={{ marginLeft :'2rem'}}>Blog</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
            </Container>
        </Navbar>

    )
}
export default Header;