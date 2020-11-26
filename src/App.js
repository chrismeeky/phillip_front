import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AdminDashboard from "./components/Admin/index";
import Home from "./components/Home/index";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/dashboard" component={AdminDashboard}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
