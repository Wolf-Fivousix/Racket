import React from "react";
import { Route, Link } from "react-router-dom";
import LoginFormContainer from "./authentication/login_form_container";
import SignupFormContainer from "./authentication/signup_form_container";

const App = () => (
  <div>
    <h1>Welcome to RACKETPLOSIOOOOOOOONNNNNSSSssss !!!</h1>
    <Link to="/">Racket Home</Link>
    <br/>
    <Link to="/login">Login</Link>
    <br />
    <Link to="/signup">Sign Up</Link>
    <Route exact path="/login" component={LoginFormContainer}/>
    <Route exact path="/signup" component={SignupFormContainer}/>
    <h2>Home paaaaaage! Yes, you're here =D</h2>
  </div>
);

export default App;