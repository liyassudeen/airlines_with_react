import React from "react";
import SeatAllocation from "./seatAllocation";
import "../styles/displayFlightDetails.css";

export default class FlightDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seatDetails: this.props.details };
  }
  static defaultProps = {
    seatDetails: {
      name: "Indian Airlines",
      totalSeats: 10,
      availableSeats: 10,
      passengerDetails: [
        {
          id: 1,
          category: "infant"
        },
        {
          id: 3,
          category: "disabledPerson"
        },
        {
          id: 8,
          category: "check-in"
        }
      ]
    }
  };

  render() {
    const { name } = this.props.seatDetails;
    return (
      <div>
        <h1>{name}</h1>
        <SeatAllocation {...this.props.seatDetails} />
      </div>
    );
  }
}
