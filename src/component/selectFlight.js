import React from "react";
import flight_details from "../data/flight_details";
import { FormControl, FormGroup, FormLabel, Button } from "react-bootstrap";

export default class SelectFlight extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e);
    console.log(data);
  };
  render() {
    const flight_details_data = flight_details.map(flight => (
      <div>
        <FormControl type="radio" name="flightname" value={flight.name} />
        <FormLabel>
          {flight.name} - {flight.time}
        </FormLabel>
      </div>
    ));
    return (
      <div>
        <h1>Welcome to Airlines</h1>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>{flight_details_data}</FormGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
