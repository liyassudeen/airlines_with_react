import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import SelectFlight from "./component/selectFlight";
import FlightDetails from "./component/displayFlightDetails";
import { store } from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={SelectFlight} />
      <Route path="/passengerRegistration" component={FlightDetails} />
    </Router>
  </Provider>,
  rootElement
);
