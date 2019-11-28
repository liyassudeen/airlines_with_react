import React from "react";
import "../styles/seatAllocation.css";

export default class SeatAllocation extends React.Component {
  clickHandler = e => {
    if (
      e.target.className.includes("check-in") ||
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
      const { passengerDetails } = this.props;
      let className = "seat";
      passengerDetails.forEach(passenger => {
        className += passenger.id == i ? " " + passenger.category : "";
      });
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
