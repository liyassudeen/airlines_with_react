export function submitForm(passengerDetails) {
  return { type: "PASSENGER-CHECKIN", passengerDetails: passengerDetails };
}
