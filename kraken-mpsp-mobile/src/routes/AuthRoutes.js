import { createStackNavigator } from "react-navigation";

import SignInScreen from "./Screens/SignInScreen";
import ProfileRegisterScreen from "./Screens/ProfileRegisterScreen";

import ContactScreen from "./Screens/ContactScreen";
import TermsScreen from "./Screens/TermsScreen";

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
