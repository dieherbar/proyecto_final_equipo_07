import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import MyButton from "./MyButton";
import MyIcon from "./MyIcon";

export default function MyHeader(props) {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light" fixed="top">
        <Container>
          <Navbar.Brand>
            <img className="logo" src="/PedidosYa.png"></img>
          </Navbar.Brand>
          <Navbar.Brand className="barra">
            
            <MyButton
              className="btnNav"
              icon = <MyIcon/>
              text= "Registrá tu negocio"
              variant="outline-dark"
              color="black"/>

            <img className="logoP" src="/LogoP.png"></img>
            <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ayuda en línea</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Iniciar sesión/ Registrarse
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
} /*En principio lo creo como un componente funcional y no de clase. Revisar*/
