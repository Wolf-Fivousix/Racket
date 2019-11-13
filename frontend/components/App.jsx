import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { AuthRoute, Protected } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import LoginFormContainer from "./authentication/login_form_container";
import SignupFormContainer from "./authentication/signup_form_container";
import ServerIndexContainer from "./server/server_index_container";

const App = () => (
  <div>
    {/* <Link to="/">Racket Home</Link>
    <br/>
    <Link to="/login">Login</Link>
    <br />
    <Link to="/signup">Sign Up</Link>
    <br />
    <Link to="/servers">Servers</Link>
    <br />
    <br /> */}

    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
      <Protected path ="/servers" component={ServerIndexContainer}/>
      
    </Switch>


  </div>
);

export default App;