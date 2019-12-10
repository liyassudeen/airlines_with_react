import React from "react";
import { connect } from "react-redux";
import "../styles/seatAllocation.scss";

class SeatAllocation extends React.Component {
  clickHandler = (e, i) => {
    console.log(e, i);
    /* if (e.target.className !== "seat") {
      ReactDOM.render(<PassengerRegistration {...this.props.passengerDetails[0]} />);
    } */
  };
  renderSeats(seatsCount) {
    const seats = [];
    for (let i = 1; i <= seatsCount; i++) {
      const { passengerDetails } = this.props;
      let className = "seat";
      passengerDetails.forEach(passenger => {
        className += passenger.seatnumber == i ? " " + passenger.category : "";
      });
      seats.push(
        <div
          className={className}
          onClick={e => this.clickHandler(e, i)}
          id={i}
        >
          Seat {i}
        </div>
      );
    }
    return seats;
  }
  renderSeatCodes() {
    return (
      <div className="seat-code-container">
        <div>
          <div className="seat-code">
            <div className="yellow-code" />
            <span>{" - "}</span>
            <div>Disabled Person</div>
          </div>
          <div className="seat-code">
            <div className="blue-code" />
            <span>{" - "}</span>
            <div>Infant</div>
          </div>
        </div>
        <div>
          <div className="seat-code">
            <div className="green-code" />
            <span>{" - "}</span>
            <div>Check-In</div>
          </div>
          <div className="seat-code">
            <div className="white-code" />
            <span>{" - "}</span>
            <div>Available</div>
          </div>
        </div>
      </div>
    );
  }

  renderAvailableSeatsCount() {
    return (
      <div class="seats-count-container">
        Available Seats :
        <span className="available-seats">{this.props.availableSeats}</span>
        <span className="space">of</span>
        <span className="total-seats"> {this.props.totalSeats}</span>
      </div>
    );
  }
  render() {
    const { totalSeats } = this.props;
    return (
      <div className="seatContainer">
        {this.renderSeats(totalSeats)}
        {this.renderSeatCodes()}
        {this.renderAvailableSeatsCount()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalSeats: state.seatDetails.totalSeats,
    availableSeats: state.seatDetails.availableSeats,
    passengerDetails: state.seatDetails.passengerDetails,
    availableSeatNumbers: state.seatDetails.availableSeatNumbers,
    bookedSeats: state.seatDetails.bookedSeats
  };
};

export default connect(mapStateToProps)(SeatAllocation);
