import React, { Component, Fragment } from "react";

import { Modal } from "react-bootstrap";

import "./styles.css";

class ListResources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      apiEndPoint: "http://localhost:8784/api",
      listFilter: [],
      modalShow: false,
      cardSelected: null
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

  setModalShow = (status, card = null) => {
    this.setState({ modalShow: status, cardSelected: card });
  };

  filterList = text => {
    if (!text) {
      this.setState({ listFilter: [] });
      return null;
    }

    const { listResources } = this.props;

    var listFilter = listResources.filter(item => {
      console.log("JULIO TESTE `${item.cpf}`.indexOf(text)", item.cpf);
      if (
        item.cpf != null && `${item.cpf}`.indexOf(text) != -1 ||
        item.cnpj != null && `${item.cnpj}`.indexOf(text) != -1
      ) {
        return true;
      } else {
        return false;
      }
    });

    console.log("JULIO TESTE listResources", listResources);
    console.log("JULIO TESTE listFilter", listFilter);
    this.setState({ listFilter: listFilter });
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

  renderProperties = object => {
    if (object != null) {
      var values = [];
      for (let prop in object) {
        if (Array.isArray(object[prop])) {
          var listValues = [<h3>{prop}</h3>];
          object[prop].forEach(element => {
            listValues.push(this.renderProperties(element));
          });
          return listValues;
        }

        var valorDaProperty = `${object[prop]}`;
        if (valorDaProperty.indexOf(".png") != -1) {
          valorDaProperty = (<a target="_blank" href={valorDaProperty}>abrir arquivo</a>);
        }
        values.push(
          <div className="row">
            <div className="col-4">{`${prop}`}</div>
            <div className="col-8">{valorDaProperty}</div>
          </div>
        );
      }
      return values;
    } else {
      return null;
    }
  };

  centeredModal = () => {
    const { modalShow, cardSelected } = this.state;
    return (
      <Modal
        show={modalShow}
        onHide={() => this.setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            MPSP KRAKEN - Relatório da busca
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className="containerShow">Informações gerais (Arpensp)</h3>
          {cardSelected != null && cardSelected.arpensp != null
            ? this.renderProperties(cardSelected.arpensp)
            : "Não há informações neste portal"}

          <h3 className="containerShow">Informações trabalhistas (Caged)</h3>
          {cardSelected != null && cardSelected.caged != null
            ? this.renderProperties(cardSelected.caged)
            : "Não há informações neste portal"}

          <h3 className="containerShow">Procurações (Censec)</h3>
          {cardSelected != null && cardSelected.censec != null
            ? this.renderProperties(cardSelected.censec)
            : "Não há informações neste portal"}

          <h3 className="containerShow">Informações eleitorais (Siel)</h3>
          {cardSelected != null && cardSelected.siel != null
            ? this.renderProperties(cardSelected.siel)
            : "Não há informações neste portal"}

          <h3 className="containerShow">Certidões (Sivec)</h3>
          {cardSelected != null && cardSelected.sivec != null
            ? this.renderProperties(cardSelected.sivec)
            : "Não há informações neste portal"}

          <h3 className="containerShow">Dados imobiliários (Arisp)</h3>
          {cardSelected != null && cardSelected.arisp != null
            ? this.renderProperties(cardSelected.arisp)
            : "Não há informações neste portal"}
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => this.setModalShow(false)}
          >
            Fechar visualização
          </button>
        </Modal.Footer>
      </Modal>
    );
  };

  renderCard = (card, index) => {
    if (!card) {
      return null;
    }

    var errosPortais = card.resultadoFinal
      ? card.resultadoFinal.totalErrors
      : 0;
    var totalPortais = card.resultadoFinal ? card.resultadoFinal.findTotal : 0;

    var portaisConcluidos = totalPortais - errosPortais;
    var porcentagemConcluido = (portaisConcluidos / totalPortais) * 100 || 0;

    var showColorBusca =
      porcentagemConcluido < 33
        ? "danger"
        : porcentagemConcluido < 66
        ? "warning"
        : porcentagemConcluido < 99
        ? "info"
        : "success";

    return (
      <div className="card card-task mt-2" key={index}>
        <div className="progress">
          <div
            className={`progress-bar bg-${showColorBusca}`}
            role="progressbar"
            style={{ width: `${porcentagemConcluido}%` }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <div className="card-body">
          <div className="row no-gutters">
            <div className="col-12 col-md-6 card-title">
              <p className="text">
                {card.type === 1 ? "CPF" : "CNPJ"}{" "}
                {card.type === 1 ? card.cpf : card.cnpj}
              </p>
              <span className="text-small">Hoje</span>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-end card-details">
              <div className="card-result">
                <i className="fa fa-tasks"></i>
                <span className="ml-1">
                  {portaisConcluidos ? portaisConcluidos : "-"} /{" "}
                  {totalPortais ? totalPortais : "-"}{" "}
                  {totalPortais > 0 ? "Buscas Concluídas" : "Busca Pendente"}
                </span>
              </div>
              <div className="ml-3 card-options">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  disabled={totalPortais === 0}
                  onClick={() => this.setModalShow(true, card)}
                >
                  Visualizar
                </button>
                <button
                  type="button"
                  className="btn btn-outline-info ml-2"
                  disabled={totalPortais === 0}
                  onClick={() => {}}
                >
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
                onChange={value => this.filterList(value)}
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
    const { listFilter } = this.state;

    return (
      <div className="mt-5 mb-5 ResultContent">
        {this.centeredModal()}

        <h2 className="title">Investigações</h2>

        {!listResources.length ? (
          <p>Nenhum resultado encontrado</p>
        ) : (
          this.renderResults(listFilter.length > 0 ? listFilter : listResources)
        )}
      </div>
    );
  }
}

export default ListResources;
