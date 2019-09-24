import React, { Component } from "react";

import { Nav, Tabs, Tab, Form, Button, Navbar } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

import "./styles.css";

const legalSchema = yup.object().shape({
  cnpj: yup
    .string()
    .required("Informe o CNPJ")
    .min(4, "Preencha o CNPJ correto")
});

export default class ShowCaseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formSelected: "buscaPessoa"
    };
  }

  onSubmitLegalPerson = values => {
    console.log("JULIO onSubmitLegalPerson", values);
    const apiEndPoint = "http://localhost:8784/api";

    fetch(`${apiEndPoint}/LegalPerson`,  {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(async (response) => {
      if(response.ok) {
        var data = await response.blob();
        console.log("JULIO RETORNO API", data);
      } else {
        console.log('Network response was not ok.');
      }
    })
    .catch(error => {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  };

  render() {
    const { formSelected } = this.state;
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
              <div>asdsada</div>
            </Tab>
            <Tab eventKey="buscaEmpresa" title="buscar Empresa">
            <Formik
                initialValues={{
                  CNPJ: "",
                  NomeFantasia: "BANCO SAFRAAA",
                  CNPJ: "12312312312312",
                  CPFDoFundador: "333333333",
                  Contador: "11111111"
                }}
                enableReinitialize={true}
                onSubmit={values => this.onSubmitLegalPerson(values)}
                validationSchema={legalSchema}
              >
                {props => {
                  const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                    isValid,
                    submitForm
                  } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <input
                        name="cnpj"
                        onChange={handleChange("cnpj")}
                        onBlur={handleBlur("cnpj")}
                        value={values.cnpj}
                        className={
                          errors.cnpj && touched.cnpj ? 'text-input error' : 'text-input'
                        }
                      />
                      {errors.cnpj && touched.cnpj && (
                        <div className="input-feedback">{errors.cnpj}</div>
                      )}


                      <Button
                        variant="primary"
                        type="button"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                      >
                        Limpar campos
                      </Button>

                      <Button
                        variant="primary"
                        type="submit"
                        disabled={!isValid || isSubmitting}
                      >
                        Iniciar procura
                      </Button>
                    </form>
                  );
                }}
              </Formik>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}
