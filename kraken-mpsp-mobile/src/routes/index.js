import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoadingScreen from "../screens/LoadingScreen";
import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutesIcon";

const Routes = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    //Intro: OnboardingIntro,
    App: AppRoutes,
    Auth: AuthRoutes
  },
  {
    initialRouteName: "Loading"
  }
);

const App = createAppContainer(Routes);

export default App;
