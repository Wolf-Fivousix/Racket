import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, Protected } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import LoginFormContainer from "./authentication/login_form_container";
import SignupFormContainer from "./authentication/signup_form_container";
import ServerIndexContainer from "./server/server_index_container";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
      <Protected path ="/servers" component={ServerIndexContainer}/>
      
    </Switch>
  </div>
);

export default App;