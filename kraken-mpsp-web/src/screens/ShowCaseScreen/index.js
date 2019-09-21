import React, { Component } from "react";

import { Nav, Tabs, Tab, Form, Button, Navbar } from "react-bootstrap";

import "./styles.css";

export default class ShowCaseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formSelected: "buscaPessoa",
      validated: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    //if (form.checkValidity() === false) {
    //}
    console.log("JULIO handleSubmit", form);
    fetch('flowers.jpg').then(response => {
      if(response.ok) {
        var data = response.blob();
        console.log("JULIO RETORNO API", data);
        return data;
      } else {
        console.log('Network response was not ok.');
      }
    })
    .catch(error => {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  };


  render() {
    const { formSelected, validated } = this.state;
    return (
      <div className="body">
        <img
          className="ilustrationContainer"
          src="images/looking_profile.svg"
          alt="Kraken MPSP"
        />

        <Navbar>
          <Navbar.Brand href="/showcase" className="logoIcon">
            Kraken
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/options">Options</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/terms">Terms</Nav.Link>
            <Nav.Link href="/signin">SignIn</Nav.Link>
            <Nav.Link href="/profile-register">ProfileRegister</Nav.Link>
          </Nav>
        </Navbar>

        <div className="infoContainer">
          <h1 className="titleInfoContainer">
            A plataforma de busca pública do Brasil
          </h1>
          <p className="descInfoContainer">
            <small className="text-muted">
              Centralizando os dados obtidos em diversos portais em um só lugar,
              assim agilizando o tempo de resolução dos processos!
            </small>
          </p>
        </div>

        <div className="formContainer">
        
        <Tabs
          id="search-forms"
          activeKey={formSelected}
          onSelect={selected => this.setState({ formSelected: selected })}          
        >
          <Tab eventKey="buscaPessoa" title="Buscar pessoa">
            <Form  noValidate validated={validated} onSubmit={this.handleSubmit}>
              <Form.Control type="nome" placeholder="Informe o nome completo" />
              <Form.Control type="cpf" placeholder="Informe o CPF" />
              <Form.Control type="rg" placeholder="Informe o RG" />
              <Form.Control
                type="dataNascimento"
                placeholder="Informe a data de nascimento"
              />
              <Form.Control
                type="nomeMae"
                placeholder="Informe o nome da mãe"
              />

              <Button variant="primary" type="submit">
                Iniciar procura
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="buscaEmpresa" title="buscar Empresa">
            <Form  noValidate validated={validated} onSubmit={this.handleSubmit}>
              <Form.Control type="cnpj" placeholder="Informe o CNPJ" />
              <Button variant="primary" type="submit">
                Iniciar procura
              </Button>
            </Form>
          </Tab>
        </Tabs>

        </div>
        
      </div>
    );
  }
}
