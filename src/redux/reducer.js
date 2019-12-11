const initialState = {
  seatDetails: {
    name: "Indian Airlines",
    totalSeats: 10,
    availableSeats: 10,
    passengerDetails: [],
    bookedSeats: []
  }
};

export default function reducer(state = initialState, action) {
  if (action.type === "PASSENGER-CHECKIN") {
    const {
      firstName,
      lastName,
      email,
      category,
      seatnumber
    } = action.passengerDetails;
    return {
      ...state,
      seatDetails: {
        ...state.seatDetails,
        passengerDetails: [
          ...state.seatDetails.passengerDetails,
          {
            firstName: firstName,
            lastName: lastName,
            email: email,
            category: category,
            seatnumber: seatnumber
          }
        ],
        bookedSeats: [...state.seatDetails.bookedSeats, action.bookedSeat],
        availableSeats: state.seatDetails.availableSeats - 1
      }
    };
  }
  /* if (action.type === "AVAILABLE-SEAT-NUMBERS") {
    const { availableSeatNumbers } = action
    return {...state, availableSeatNumbers: [...state.availableSeatNumbers, ...availableSeatNumbers]}
  } */

  if (action.type === "UPDATE_FLIGHT_DETAILS") {
    console.log(action.flightDetails);
    const { name, totalSeats, availableSeats } = action.flightDetails;
    return {
      ...state,
      seatDetails: {
        ...state.seatDetails,
        name: name,
        totalSeats: totalSeats,
        availableSeats: availableSeats
      }
    };
  }
  return state;
}
