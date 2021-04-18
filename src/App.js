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
        <Route path="/profile/:id">
          <UserProfile />
        </Route>
        <Route path="/cart/:id">
          <ShoppingCart />
        </Route>
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
