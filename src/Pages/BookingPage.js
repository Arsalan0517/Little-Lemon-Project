import { useReducer } from "react";
import { useNavigate } from "react-router-dom";   // ✅ ADD
import BookingForm from "../Components/BookingForm";
import { fetchAPI, submitAPI } from "../api";     // ✅ ADD submitAPI

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

  const navigate = useNavigate();   // ✅ ADD

  const [availableTimes, dispatch] =
    useReducer(updateTimes, [], initializeTimes);

  /* ✅ SUBMIT FORM FUNCTION */
  function submitForm(formData) {
    const success = submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    }
  }

  return (
    <main>
      <h2>Reserve a Table</h2>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default BookingPage;