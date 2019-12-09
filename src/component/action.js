export function submitForm(passengerDetails) {
  return { type: "PASSENGER-CHECKIN", passengerDetails: passengerDetails };
}
export function availableSeatNumbers(availableSeatNumbers) {
  return {
    type: "AVAILABLE-SEAT-NUMBERS",
    availableSeatNumbers: availableSeatNumbers
  };
}
export function updateFlightDetails(flightDetails) {
  return { type: "UPDATE_FLIGHT_DETAILS", flightDetails: flightDetails };
}
