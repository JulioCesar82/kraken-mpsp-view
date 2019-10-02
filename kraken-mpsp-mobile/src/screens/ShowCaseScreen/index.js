import React, {Component} from 'react';
import {View, Text, Image, Dimensions } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { TabView, SceneMap } from 'react-native-tab-view';

import styles from './styles';

import FullContainer from '../../containers/FullContainer';

import FormLegalPerson from './FormLegalPerson';
import FormPhysicalPerson from './FormPhysicalPerson';
import ListResources from './ListResources';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

export default class ShowCaseScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  render() {
    return (
      <FullContainer
        content={
          <View style={styles.body}>

            <SvgUri 
              style={styles.ilustrationContainer}
              width="200"
              height="200"
              source={require("../../public/images/looking_profile.svg")}
            />

            <View style={styles.infoContainer}>
              <Text style={styles.titleInfoContainer}>
                A plataforma de busca pública do Brasil
              </Text>
              <Text style={styles.descInfoContainer}>
                  Centralizando informações em um só
                  lugar, assim agilizando o tempo de resolução dos processos!
              </Text>
            </View>


             <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />

            <FormLegalPerson />
            <FormPhysicalPerson />
            <ListResources />
          </View>
        }
      />
    );
  }
}
