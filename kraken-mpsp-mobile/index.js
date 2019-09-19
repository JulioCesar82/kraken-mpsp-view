import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import Routes from "./src/Routes";

AppRegistry.registerComponent(appName, () => Routes);
