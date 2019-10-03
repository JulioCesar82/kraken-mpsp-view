import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";

import styles from "./styles";

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
      <View style={styles.card} key={index}>
        <View style={styles.progress} />

        <View style={styles.cardBody}>
          <Text>Details</Text>
        </View>
      </View>
    );
  };

  renderResults = resources => {
    if (!resources) {
      return null;
    }
    return (
      <Fragment>
        {/* TODO: BOTAO DE PESQUISA AQUI */}

        <View style={styles.cardList}>
            {resources.map((item, index) => this.renderCard(item, index))}
        </View>
      </Fragment>
    );
  };

  render() {
    const { listResources } = this.props;
    const { listFilter } = this.state;
    return (
      <View style={styles.body}>
        <Text style={styles.title}>
        Investigações
        </Text>

        {!listResources.length ? (
          <Text>Nenhum resultado encontrado</Text>
        ) : (
          this.renderResults(listFilter.length > 0 ? listFilter : listResources)
        )}

      </View>
    );
  }
}

export default ListResources;
