import React from "react";
import ReactDOM from "react-dom";
import SelectFlight from "./component/selectFlight";
import FlightDetails from "./component/displayFlightDetails";

const rootElement = document.getElementById("root");
ReactDOM.render(<FlightDetails />, rootElement);
