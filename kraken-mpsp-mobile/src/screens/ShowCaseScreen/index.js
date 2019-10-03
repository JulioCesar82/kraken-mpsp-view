import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import {TabView, SceneMap} from 'react-native-tab-view';

import styles from './styles';

import FullContainer from '../../containers/FullContainer';

import FormLegalPerson from './FormLegalPerson';
import FormPhysicalPerson from './FormPhysicalPerson';
import ListResources from './ListResources';

export default class ShowCaseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiEndPoint: 'http://localhost:8784/api',
      listResources: [],
      index: 0,
      routes: [
        {key: 'physicalPerson', title: 'Procurar pesssoa'},
        {key: 'legalPerson', title: 'Procurar empresa'},
      ],
    };
  }

  addResource = resource => {
    console.log('[ShowCaseScreen][addResource] resource', resource);
    const {listResources} = this.state;
    if (Array.isArray(resource)) {
      resource.forEach(item => {
        listResources.push(item);
      });
    } else {
      listResources.push(resource);
    }
    this.setState({listResources: listResources});
  };

  render() {
    const { listResources } = this.state;
    return (
      <FullContainer
        content={
          <View style={styles.body}>
            <SvgUri
              style={styles.ilustrationContainer}
              width="200"
              height="200"
              source={require('../../public/images/looking_profile.svg')}
            />

            <View style={styles.infoContainer}>
              <Text style={styles.titleInfoContainer}>
                A plataforma de busca pública do Brasil
              </Text>
              <Text style={styles.descInfoContainer}>
                Centralizando informações em um só lugar, assim agilizando o
                tempo de resolução dos processos!
              </Text>
            </View>

            <TabView
              style={styles.formsSearch}
              navigationState={this.state}
              renderScene={SceneMap({
                physicalPerson: () => <FormPhysicalPerson addResource={this.addResource} />,
                legalPerson: () => <FormLegalPerson addResource={this.addResource} />,
              })}
              onIndexChange={index => this.setState({index})}
              initialLayout={{width: Dimensions.get('window').width}}
            />

            <ListResources
              listResources={listResources}
              addResource={this.addResource}
            />
          </View>
        }
      />
    );
  }
}
