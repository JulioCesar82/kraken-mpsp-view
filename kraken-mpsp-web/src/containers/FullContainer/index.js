import React, { Fragment } from "react";

import { Navbar, Nav } from "react-bootstrap";
import "./styles.css";

const FullContainer = ({ content }) => {
  return (
    <Fragment>
      <Navbar expand="md" className="custom-navbar-light">
        <div className="container">
          <Navbar.Brand href="/showcase">
            <h1 className="logoIcon">Kraken</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-options">
            <span className="fa fa-bars"></span> Menu
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-options" className="justify-content-end">
            {/* FALTA A PAGINA SEARCH E OPTIONS QUE SERA LINK NA PAGINA*/}
            <Nav>
              {/* TEM QUE FAZER O IF DE LOGADO OU NAO */}
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/signin">SignIn</Nav.Link>
              <Nav.Link href="/profile-register">ProfileRegister</Nav.Link>

              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {content}

      <footer className="">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md"></div>

            <div className="col-md">
              {/*<Nav className="m-auto">*/}
              {/* TEM QUE FAZER O IF DE LOGADO OU NAO */}
              {/*<Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/signin">SignIn</Nav.Link>
                <Nav.Link href="/profile-register">ProfileRegister</Nav.Link>

                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/terms">Terms</Nav.Link>
                </Nav>*/}
            </div>

            <div className="col-md"></div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <p>Copyright &copy; 2019 Todos os direitos reservados</p>
              <p>
                Este sistema foi feito pela equipe
                <a href="#" target="_blank">
                  Kraken Team
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default FullContainer;
