import React, { Component, Fragment } from "react";

import { } from "react-bootstrap";

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

  render() {
    const { listResources } = this.props;
    return (
      <Fragment>
        <div className="row no-gutters">
          <h2 className="title mt-5 mb-5 ml-auto mr-auto">Investigações</h2>
        </div>

        <div className="row no-gutters">
          <div>
            <div className="input-group input-group-round">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-filter"></span>
                </span>
              </div>
              <input
                type="search"
                className="form-control filter-list-input"
                placeholder="Filter tasks"
                aria-label="Filter Tasks"
              />
            </div>
          </div>
        </div>

        <div className="row no-gutters listResources">
          <div className="card-list">


            <div className="card-list-body">
              {listResources.map(item => {

                return (
                  <Fragment>

                    <div className="progress">
                      <div className="progress-bar bg-danger" role="progressbar" style="width: 75%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <div className="card card-task">
                      {item.type === 1 ? "CPF:" : "CNPJ:"} {item.type === 1 ? item.cpf : item.cnpj}
                    </div>

                  </Fragment>

                );

              })
              }
            </div>

          </div>
        </div>
      </Fragment>
    );
  }
}

export default ListResources;
