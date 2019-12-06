import React from "react";
import { connect } from "react-redux";
import { store } from "./store";
import { availableSeatNumbers } from "./action";
import "../styles/seatAllocation.scss";

class SeatAllocation extends React.Component {
  clickHandler = e => {
    if (
      e.target.className.includes("checkin") ||
      e.target.className.includes("infant") ||
      e.target.className.includes("disabledPerson")
    ) {
      e.target.disabled = true;
    } else if (e.target.className === "seat active") {
      e.target.className = "seat";
    } else {
      e.target.className = "seat active";
    }
  };
  renderSeats(seatsCount) {
    const seats = [];
    for (let i = 1; i <= seatsCount; i++) {
      //store.dispatch(availableSeatNumbers(i));
      const { passengerDetails } = this.props;
      let className = "seat";
      passengerDetails.forEach(passenger => {
        className += passenger.seatnumber == i ? " " + passenger.category : "";
      });
     //store.dispatch(availableSeatNumbers(availableSeats));
      seats.push(
        <div className={className} onClick={this.clickHandler} id={i}>
          Seat {i}
        </div>
      );
    } 
    return seats;
  }
  render() {
    const { totalSeats } = this.props;
    return <div className="seatContainer">{this.renderSeats(totalSeats)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    totalSeats: state.seatDetails.totalSeats,
    passengerDetails: state.seatDetails.passengerDetails,
    availableSeatNumbers: state.seatDetails.availableSeatNumbers
  };
};

export default connect(mapStateToProps)(SeatAllocation);
