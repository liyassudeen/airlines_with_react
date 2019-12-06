import React from "react";
import { connect } from "react-redux";
import SeatAllocation from "./seatAllocation";
import PassengerRegistration from "./passengerRegistration";
import "../styles/displayFlightDetails.scss";

class FlightDetails extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className="flight-details-container">
        <h1>{name}</h1>
        <SeatAllocation />
        <PassengerRegistration />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.seatDetails.name
  };
};

export default connect(mapStateToProps)(FlightDetails);
