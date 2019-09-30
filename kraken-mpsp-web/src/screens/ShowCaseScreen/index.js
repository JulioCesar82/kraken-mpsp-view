import React, { Component } from "react";

import { Tabs, Tab } from "react-bootstrap";

import "./styles.css";

import FullContainer from "../../containers/FullContainer";
import FormPhysicalPerson from "./FormPhysicalPerson";
import FormLegalPerson from "./FormLegalPerson";
import ListResources from "./ListResources";

export default class ShowCaseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiEndPoint: "http://localhost:8784/api",
      listResources: []
    };
  }

  addResource = resource => {
    console.log("[ShowCaseScreen][addResource] resource", resource);
    const { listResources } = this.state;
    if (Array.isArray(resource)) {
      resource.forEach(item => {
        listResources.push(item);
      });
    } else {
      listResources.push(resource);
    }
    this.setState({ listResources: listResources });
  };

  render() {
    const { listResources } = this.state;
    return (
      <FullContainer
        content={
          <div className="container main-content">
            <img
              className="ilustrationContainer"
              src="images/looking_profile.svg"
              alt="Kraken MPSP"
            />
            <div className="row no-gutters infoContainer">
              <div className="col col-md-8 mt-5 mb-5">
                <h2 className="titleInfoContainer">
                  A plataforma de busca pública do Brasil
                </h2>
                <p className="descInfoContainer">
                  <small className="text-muted">
                    Centralizando informações em um só
                    lugar, assim agilizando o tempo de resolução dos processos!
                  </small>
                </p>
              </div>
            </div>

            <div className="row no-gutters formsSearch">
              <div className="col col-md-8">
                <Tabs
                  id="search-forms"
                  variant="pills"
                  defaultActiveKey="buscaPessoa"
                >
                  <Tab eventKey="buscaPessoa" title="Procurar pessoa">
                    <FormPhysicalPerson />
                  </Tab>
                  <Tab eventKey="buscaEmpresa" title="Procurar empresa">
                    <FormLegalPerson />
                  </Tab>
                </Tabs>
              </div>
            </div>

            <ListResources
              listResources={listResources}
              addResource={this.addResource}
            />
          </div>
        }
      />
    );
  }
}
