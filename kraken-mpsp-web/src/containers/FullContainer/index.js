import React, { Fragment } from "react";

import { Navbar, Nav } from "react-bootstrap";
import "./styles.css";

const FullContainer = ({ content }) => {
  return (
    <Fragment>
      <main className="main-content">
       
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
      </main>

      <footer className="custom-footer">
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-md">
              <div className="footer-widget mb-4">
                <h2 className="footer-title">Sobre</h2>
                <p>Sistema desenvolvido para melhorar os processos do MPSP.</p>
                <div className="row footer-social">
                  <div className="col text-center">
                    <a href="#">
                      <i className="socicon-github" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div className="col text-center">
                    <a href="#">
                      <i className="socicon-facebook" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div className="col text-center">
                    <a href="#">
                      <i className="socicon-instagram" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="footer-widget mb-4">
                <h2 className="footer-title">Menu</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="d-block">
                      Sobre-nós
                    </a>
                  </li>
                  {/*<Nav className="m-auto">*/}
                  {/* TEM QUE FAZER O IF DE LOGADO OU NAO */}
                  {/*<Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/signin">SignIn</Nav.Link>
                <Nav.Link href="/profile-register">ProfileRegister</Nav.Link>

                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/terms">Terms</Nav.Link>
                </Nav>*/}
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="footer-widget mb-4">
                <h2 className="footer-title">Tem uma pergunta?</h2>
                <div className="block-23 mb-3">
                  <p>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span className="text ml-1">
                      Av. Lins de Vasconcelos, 1264 - Aclimação, São Paulo - SP
                    </span>
                  </p>
                  <p>
                    <a href="#">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <span className="text ml-1">contato@krakenmpsp.com</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>Copyright © 2019 Todos os direitos reservados</p>
              <p>
                Este sistema foi feito com{" "}
                <i className="fa fa-heart" aria-hidden="true"></i> por{" "}
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
