import { useReducer } from "react";
import BookingForm from "../Components/BookingForm";
import { fetchAPI } from "../api";
/* ---------- INITIAL STATE ---------- */
export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

/* ---------- REDUCER ---------- */
export function updateTimes(state, action) {
  return fetchAPI(new Date(action.date));
}

function BookingPage() {

  const [availableTimes, dispatch] =
    useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <h2>Reserve a Table</h2>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </main>
  );
}

export default BookingPage;