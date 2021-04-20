import React from "react";
import { Route, Redirect } from "react-router-dom";

const GuardedRouteAfter = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth === false ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
export default GuardedRouteAfter;
