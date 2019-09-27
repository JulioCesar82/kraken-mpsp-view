import React, { Component } from "react";

import { Tabs, Tab } from "react-bootstrap";

import "./styles.css";

import FullContainer from "../../containers/FullContainer";
import FormPhysicalPerson from "./FormPhysicalPerson";
import FormLegalPerson from "./FormLegalPerson";
import ListResources from "./ListResources";

const getResources = () => {
  console.log("JULIO getResources");
  const apiEndPoint = "http://localhost:8784/api";

  fetch(`${apiEndPoint}/ResourcesFound`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(async response => {
      if (response.ok) {
        var data = await response.blob();
        console.log("JULIO RETORNO API", data);
      } else {
        console.log("Network response was not ok.");
      }
    })
    .catch(error => {
      console.log(
        "There has been a problem with your fetch operation: " + error.message
      );
    });
};

export default class ShowCaseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formSelected: "buscaPessoa"
    };
  }

  render() {
    const { formSelected } = this.state;
    return (
      <FullContainer content={

        <div className="body">
          <img
            className="ilustrationContainer"
            src="images/looking_profile.svg"
            alt="Kraken MPSP"
          />

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
                <FormPhysicalPerson />
              </Tab>
              <Tab eventKey="buscaEmpresa" title="buscar Empresa">
                <FormLegalPerson />
              </Tab>
            </Tabs>
          </div>

          <div className="listResources">
            <ListResources listResources={{}} />
          </div>
        </div>

      } />
    );
  }
}
