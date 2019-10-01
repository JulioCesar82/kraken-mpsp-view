import React, { Component, Fragment } from "react";

import {} from "react-bootstrap";

import "./styles.css";

class ListResources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      apiEndPoint: "http://localhost:8784/api"
    };
  }
  componentDidMount() {
    this.getPhysical();
    this.getLegal();
  }

  setLoading = isLoading => {
    console.log("[ListResources][setFormLoading] isLoading", isLoading);
    this.setState({ loading: isLoading });
  };

  getPhysical = () => {
    console.log("[ListResources][getPhysical] started");
    const { apiEndPoint } = this.state;
    const { addResource } = this.props;

    this.setLoading(true);
    fetch(`${apiEndPoint}/PhysicalPerson`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(async response => {
        if (response.ok) {
          var data = await response.json();
          console.log("[ListResources][getPhysical] Response api", data);
          addResource(data);
        } else {
          console.log(
            "[ListResources][getPhysical] Network response was not ok."
          );
        }
        this.setLoading(false);
      })
      .catch(error => {
        console.log(
          "[ListResources][getPhysical] There has been a problem: " +
            error.message
        );
        this.setLoading(false);
      });
  };

  getLegal = () => {
    console.log("[ListResources][getLegal] started");
    const { apiEndPoint } = this.state;
    const { addResource } = this.props;

    this.setLoading(true);
    fetch(`${apiEndPoint}/LegalPerson`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(async response => {
        if (response.ok) {
          var data = await response.json();
          console.log("[ListResources][getLegal] Response api", data);
          addResource(data);
        } else {
          console.log("[ListResources][getLegal] Network response was not ok.");
        }
        this.setLoading(false);
      })
      .catch(error => {
        console.log(
          "[ListResources][getLegal] There has been a problem: " + error.message
        );
        this.setLoading(false);
      });
  };

  getResource = id => {
    console.log("[ListResources][getResource] started");
    const { apiEndPoint } = this.state;

    this.setLoading(true);
    fetch(`${apiEndPoint}/ResourcesFound/${id}`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(async response => {
        if (response.ok) {
          var data = await response.json();
          console.log("[ListResources][getResource] Response api", data);
          // abrir modal com as infos
        } else {
          console.log(
            "[ListResources][getResource] Network response was not ok."
          );
        }
        this.setLoading(false);
      })
      .catch(error => {
        console.log(
          "[ListResources][getResource] There has been a problem: " +
            error.message
        );
        this.setLoading(false);
      });
  };

  renderCard = (card, index) => {
    console.log("JULIO renderCard", card);
    if (!card) {
      return null;
    }
    
    return (
      <div className="card card-task mt-2" key={index}>
        <div className="progress">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: "75%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <div className="card-body">
          <div className="row no-gutters">
            <div className="col-12 col-md-6 card-title">
              <p className="text">
                {card.type === 1 ? "CPF:" : "CNPJ:"}{" "}
                {card.type === 1 ? card.cpf : card.cnpj}
              </p>
              <span className="text-small">Hoje</span>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-end card-details">
              <div className="card-result">
                <i className="fa fa-tasks"></i>
                <span className="ml-1">4/5 Buscas Concluídas</span>
              </div>
              <div className="ml-3 card-options">
                <button type="button" className="btn btn-outline-info">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderResults = resources => {
    if (!resources) {
      return null;
    }
    return (
      <Fragment>
        <div className="row no-gutters">
          <div className="col-12 col-md-4 ml-auto">
            <div className="input-group input-group-round">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-filter"></span>
                </span>
              </div>
              <input
                type="search"
                className="form-control filter-list-input"
                placeholder="Filtrar resultados"
                aria-label="Filtrar resultados"
              />
            </div>
          </div>
        </div>

        <div className="row no-gutters listResources">
          <div className="col-12">
            <div className="card-list">
              <div className="card-list-body">
                {resources.map((item, index) => this.renderCard(item, index))}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  render() {
    const { listResources } = this.props;
    return (
      <div className="mt-5 mb-5 ResultContent">
        <h2 className="title">Investigações</h2>

        {!listResources.length ? (
          <p>Nenhum resultado encontrado</p>
        ) : (
          this.renderResults(listResources)
        )}
      </div>
    );
  }
}

export default ListResources;
