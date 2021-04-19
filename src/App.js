import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Home,
  Register,
  Login,
  Success,
  Error,
  ShoppingCart,
  UserProfile,
  ProductPage,
} from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/product/:id">
          <ProductPage />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/cart">
          <ShoppingCart />
        </Route>
        <Route path="/success">
          <Success />
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
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
