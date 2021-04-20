import React from "react";
import { Route, Redirect } from "react-router-dom";

const GuardedRouteBefore = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
export default GuardedRouteBefore;
