import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../Components/BookingForm";
import { fetchAPI, submitAPI } from "../api";

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

  const navigate = useNavigate();

  const [availableTimes, dispatch] =
    useReducer(updateTimes, [], initializeTimes);

  /* ---------- SUBMIT FORM ---------- */
  function submitForm(formData) {
    const success = submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    }
  }

  return (
    <main aria-label="Booking Page">
      <h2 tabIndex="0">Reserve a Table</h2>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default BookingPage;