import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Wizard from "./components/Wizard";
import Cards from "./components/Cards";
import Signup from "./components/Signup";
import Stats from "./components/Stats";
import Blocks from "./components/Blocks";
import Payments from "./components/Payments";
import ScrollToTop from "./components/ScrollTop";

export default (props) => (
  <HashRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Cards} />
        <Route exact path="/stats" component={Stats} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/blocks" component={Blocks} />
        <Route exact path="/payments" component={Payments} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/wizard" component={Wizard} />
        <Route exact path="/cards" component={Cards} />
      </Switch>
    </ScrollToTop>
  </HashRouter>
);
