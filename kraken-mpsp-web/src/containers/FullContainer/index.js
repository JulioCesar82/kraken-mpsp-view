import React from "react";

import { Container, Row, Navbar, Nav } from "react-bootstrap";

import "./styles.css";

const FullContainer = ({ content }) => {
    return (
        <Container>
            <Navbar>
                <Navbar.Brand href="/showcase" className="logoIcon">
                    Kraken
                </Navbar.Brand>
                {/* FALTA A PAGINA SEARCH E OPTIONS QUE SERA LINK NA PAGINA*/}
                <Nav className="ml-auto">
                    {/* TEM QUE FAZER O IF DE LOGADO OU NAO */}
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/signin">SignIn</Nav.Link>
                    <Nav.Link href="/profile-register">ProfileRegister</Nav.Link>

                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar>

            {content}

            <Navbar>
                <Nav className="m-auto">
                    {/* TEM QUE FAZER O IF DE LOGADO OU NAO */}
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/signin">SignIn</Nav.Link>
                    <Nav.Link href="/profile-register">ProfileRegister</Nav.Link>

                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/terms">Terms</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    );
}

export default FullContainer;