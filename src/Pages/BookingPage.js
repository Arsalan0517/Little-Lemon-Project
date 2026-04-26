import { useReducer } from "react";
import BookingForm from "../Components/BookingForm";

/* ---------- INITIAL TIMES ---------- */
export function initializeTimes() {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00"
  ];
}

/* ---------- REDUCER ---------- */
export function updateTimes(state, action) {

  // later this will depend on API + selected date
  console.log("Selected date:", action.date);

  return initializeTimes();
}

function BookingPage() {

  const [availableTimes, dispatch] =
    useReducer(updateTimes, [], initializeTimes);

  return (
    <main className="container">

      <h1>Reserve a Table</h1>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />

    </main>
  );
}

export default BookingPage;