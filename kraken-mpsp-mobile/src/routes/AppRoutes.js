import { createStackNavigator } from "react-navigation-stack";

import ShowCaseScreen from "../screens/ShowCaseScreen";
import SearchScreen from "../screens/SearchScreen";

import OptionsScreen from "../screens/OptionsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ContactScreen from "../screens/ContactScreen";
import TermsScreen from "../screens/TermsScreen";

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
      //header: null
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
/*
OptionsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};
*/