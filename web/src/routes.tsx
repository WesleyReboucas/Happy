import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import OrphanegesMap from "./Pages/OrphanegesMap";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanegesMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
