import React from "react";
import flight_details from "../data/flight_details";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { store } from "./store.js";
import { updateFlightDetails } from "./action";
import "../styles/selectFlight.scss";

export default class SelectFlight extends React.Component {
  submitHandler = fields => {
    let flightDetailsObj = {
      name: fields["flightName"].split(",")[0],
      availableSeats: fields["flightName"].split(",")[1],
      totalSeats: fields["flightName"].split(",")[2]
    };
    store.dispatch(updateFlightDetails(flightDetailsObj));
    this.props.history.push("/passengerRegistration");
  };
  render() {
    const flight_details_data = flight_details.map(flight => (
      <option
        value={
          flight.name + "," + flight.availableSeats + "," + flight.totalSeats
        }
      >
        {flight.name}
      </option>
    ));
    return (
      <div className="select-flight-container">
        <h1>Welcome to Airlines</h1>
        <Formik
          initialValues={{
            flightName: ""
          }}
          validationSchema={Yup.object().shape({
            flightName: Yup.string().required("Flight Name is required")
          })}
          onSubmit={fields => this.submitHandler(fields)}
          render={({ errors, status, touched, submitHandler }) => (
            <Form className="select-form-container">
              <div className="form-group">
                <label htmlFor="flightName" className="flight-select-label">
                  Select Flight
                </label>
                <Field name="flightName" component="select">
                  <option value="" selected>
                    Select a category
                  </option>
                  {flight_details_data}
                </Field>
                <ErrorMessage
                  name="flightName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-2">
                  Submit
                </button>
                <button type="reset" className="btn btn-secondary">
                  Reset
                </button>
              </div>
            </Form>
          )}
        />
      </div>
    );
  }
}
