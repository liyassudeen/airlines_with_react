import React from "react";
import { connect } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { submitForm } from "./action";
import SeatAllocation from "./seatAllocation";
import "../styles/passengerRegistration.scss";

class PassengerRegistration extends React.Component {
  submitHandler = fields => {
    this.props.submitForm(fields);
  };

  renderSeatOptions = (seatsCount) => {
    const seatOptions = [];
    for (let i = 1; i <= seatsCount; i++) {
      seatOptions.push(
        <option value={i}>{i}</option>
      );
    } 
    return seatOptions;
  }

  render() {
    return (
      <div className="passenger-reg-container">
        <h2>Passenger Check-In</h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            category: "",
            seatnumber: ""
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required("Last Name is required"),
            email: Yup.string()
              .email("Email is invalid")
              .required("Email is required"),
            category: Yup.string()
            .required("Category is required"),
            seatnumber: Yup.string()
            .required("Seat Number is required")
          })}
          onSubmit={fields => this.submitHandler(fields)}
          render={({ errors, status, touched, submitHandler }) => (
            <Form className="form-container">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Field
                  name="firstName"
                  type="text"
                  className={
                    "form-control" +
                    (errors.firstName && touched.firstName ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  name="lastName"
                  type="text"
                  className={
                    "form-control" +
                    (errors.lastName && touched.lastName ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-control" +
                    (errors.email && touched.email ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group"> 
                <label htmlFor="category">Category</label>
                <Field name="category" component="select">
                  <option value="" selected> 
                    Select a category
                  </option>
                  <option value="checkin">checkin</option>
                  <option value="infant">infant</option>
                  <option value="disabledPerson">disabledPerson</option>
                </Field>
              </div>
              <div className="form-group">
                <label htmlFor="seatnumber">Seat Number</label>
                <Field name="seatnumber" component="select">
                  <option value="" selected> 
                    Select a seat number
                  </option>
                  {this.renderSeatOptions(this.props.totalSeats)}
                </Field>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-2">
                  Register
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

const mapStateToProps = state => {
  return {
    totalSeats: state.seatDetails.totalSeats,
    passengerDetails: state.seatDetails.passengerDetails,
    availableSeatNumbers: state.seatDetails.availableSeatNumbers
  };
};


const mapDispatchToProps = dispatch => {
  return {
    submitForm: fields => dispatch(submitForm(fields))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PassengerRegistration);
