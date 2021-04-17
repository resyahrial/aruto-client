import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Register, Login, Success, Error } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
