import { createStackNavigator } from "react-navigation-stack";

import SignInScreen from "../screens/SignInScreen";
import ProfileRegisterScreen from "../screens/ProfileRegisterScreen";

import ContactScreen from "../screens/ContactScreen";
import TermsScreen from "../screens/TermsScreen";

const SignedOutRoutes = createStackNavigator({
  Login: {
    screen: SignInScreen,
    navigationOptions: {
      title: "Entrar",
      header: null
    }
  },
  ProfileRegister: {
    screen: ProfileRegisterScreen,
    navigationOptions: {
      title: "Cadastro de perfil"
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

export default SignedOutRoutes;
