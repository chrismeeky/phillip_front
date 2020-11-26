import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AdminDashboard from "./components/Admin/index";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/dashboard" component={AdminDashboard}></Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
