import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {Home, Employees, Sales, Customer} from "./components";

function Routes(props) {
  return (
    <Router>
      <Suspense fallback={<>Loading...</>}>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/sales" component={Sales} />
          <Route exact path="/employees" component={Employees} />
          <Route exact path="/Customer" component={Customer} />
          <Redirect to={`/Home`} />

        </Switch>
      </Suspense>
    </Router>
  );
}


export default Routes;
