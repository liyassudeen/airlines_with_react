import React from "react";
import "../styles/seatAllocation.css";

export default class SeatAllocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedSeatStatus: false, idx: 0 };
  }
  clickHandler = e => {
    if (e.target.className === "seat active") {
      e.target.className = "seat";
    } else {
      e.target.className = "seat active";
    }
  };
  renderSeats(seatsCount) {
    const seats = [];
    for (let i = 1; i <= seatsCount; i++) {
      seats.push(
        <div className="seat" onClick={this.clickHandler} id={i}>
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
