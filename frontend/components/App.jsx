import React from "react";
import { Route, Link } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "./authentication/login_form_container";
import SignupFormContainer from "./authentication/signup_form_container";


const App = () => (
  <div>
    <Link to="/">Racket Home</Link>
    <br/>
    <Link to="/login">Login</Link>
    <br />
    <Link to="/signup">Sign Up</Link>


    <AuthRoute exact path="/login" component={LoginFormContainer}/>
    <AuthRoute exact path="/signup" component={SignupFormContainer}/>
    <h1>Welcome to RACKETPLOSIOOOOOOOONNNNNSSSssss !!!</h1>

  </div>
);

export default App;