import { createStackNavigator } from "react-navigation";

import ShowCaseScreen from "./Screens/ShowCaseScreen";
import SearchScreen from "./Screens/SearchScreen";

import OptionsScreen from "./Screens/OptionsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ContactScreen from "./Screens/ContactScreen";
import TermsScreen from "./Screens/TermsScreen";

/**
navigationOptions: {
  title: "Example",
  header: null
  headerLeft: null,
  headerTitle: <CustomHeaderTitle screen='family' />
}
*/

export const ShowCaseStack = createStackNavigator({
  Home: {
    screen: ShowCaseScreen,
    navigationOptions: {
      title: "Início",
      header: null
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      title: "Pesquisa"
    }
  }
});

export const OptionsStack = createStackNavigator({
  Options: {
    screen: OptionsScreen,
    navigationOptions: {
      title: "Opções"
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: "Dados pessoais"
    }
  },
  Contact: {
    screen: ContactScreen,
    navigationOptions: {
      title: "Fale conosco"
    }
  },
  Terms: {
    screen: TermsScreen,
    navigationOptions: {
      title: "Termos"
    }
  }
});

OptionsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};
