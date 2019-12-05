import React from "react";
import { connect } from "react-redux";
import SeatAllocation from "./seatAllocation";
import "../styles/displayFlightDetails.css";

class FlightDetails extends React.Component {
  render() {
    console.log(this.props);
    const { name } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <SeatAllocation {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.seatDetails.name,
    totalSeats: state.seatDetails.totalSeats,
    availableSeats: state.seatDetails.availableSeats,
    passengerDetails: state.seatDetails.passengerDetails
  };
};

export default connect(mapStateToProps)(FlightDetails);
