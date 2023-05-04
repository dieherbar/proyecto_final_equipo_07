import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import MyIcon from "./MyIcon";


export default function MyHeader() {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light" fixed="top">
        <Container>
          <Navbar.Brand>
            <img className="logo" src="/PedidosYa.png"></img>
          </Navbar.Brand>
          <Navbar.Brand className="barra">
            <Button variant="outline-dark" className="btnNav"><MyIcon className="icon"/> Registrá tu negocio</Button>
            <img className="logoP" src="/LogoP.png"></img>
            <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </>
  );
} /*En principio lo creo como un componente funcional y no de clase. Revisar*/
