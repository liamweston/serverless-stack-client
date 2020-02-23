import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      { /* Finally, catch all unmatched routes. This must be the last route in this block */ }
      <Route component={NotFound} />
    </Switch>
  );
}