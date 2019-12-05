const initialState = {
  seatDetails: {
    name: "Indian Airlines",
    totalSeats: 10,
    availableSeats: 7,
    passengerDetails: []
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
    return Object.assign({}, state, {
      passengerDetails: state.seatDetails.passengerDetails.push({
        firstName: firstName,
        lastName: lastName,
        email: email,
        category: category,
        seatnumber: seatnumber
      })
    });
  }
  return state;
}
