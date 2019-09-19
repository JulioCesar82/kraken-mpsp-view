import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

// AppRoutes
import ShowCaseScreen from "../screens/ShowCaseScreen";
import SearchScreen from "../screens/SearchScreen";

import OptionsScreen from "../screens/OptionsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ContactScreen from "../screens/ContactScreen";
import TermsScreen from "../screens/TermsScreen";

// AuthRoutes
import SignInScreen from "../screens/SignInScreen";
import ProfileRegisterScreen from "../screens/ProfileRegisterScreen";

// extra
import LoadingScreen from "../screens/LoadingScreen";
import NotFoundScreen from "../screens/NotFoundScreen";

function Routes() {
  return (
     <Router>
      <Switch>
        <Route path="/" exact={true} component={LoadingScreen} />

        <Route path="/showcase" component={ShowCaseScreen} />
        <Route path="/search" component={SearchScreen} />
        <Route path="/options" component={OptionsScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/contact" component={ContactScreen} />
        <Route path="/terms" component={TermsScreen} />

        <Route path="/signin" component={SignInScreen} />
        <Route path="/profile-register" component={ProfileRegisterScreen} />

        <Route path="*" component={NotFoundScreen} />
      </Switch>
    </Router>
  );
}

export default Routes;