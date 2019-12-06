import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import SelectFlight from "./component/selectFlight";
import FlightDetails from "./component/displayFlightDetails";
import { store } from "./component/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <FlightDetails />
  </Provider>,
  rootElement
);
