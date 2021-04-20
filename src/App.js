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
import {
  Navbar,
  Footer,
  GuardedRouteBefore,
  GuardedRouteAfter,
} from "./components";
import { verificationLogin } from "./helpers/authVerification";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/product/:id">
          <ProductPage />
        </Route>
        <GuardedRouteBefore
          path="/profile"
          component={UserProfile}
          auth={verificationLogin()}
        />
        <GuardedRouteBefore
          path="/cart"
          component={ShoppingCart}
          auth={verificationLogin()}
        />
        <GuardedRouteBefore
          path="/success"
          component={Success}
          auth={verificationLogin()}
        />

        <GuardedRouteAfter
          path="/register"
          component={Register}
          auth={verificationLogin()}
        />
        <GuardedRouteAfter
          path="/login"
          component={Login}
          auth={verificationLogin()}
        />
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

//  {/* <Route path="/profile">
//     <UserProfile />
//   </Route> */}
//   {/* <Route path="/cart">
//     <ShoppingCart />
//   </Route> */}
//       {/* <Route path="/success">
//   <Success />
// </Route> */}
// {/* <Route path="/register">
//   <Register />
// </Route> */}
//       {/* <Route path="/login">
//   <Login />
// </Route> */}
