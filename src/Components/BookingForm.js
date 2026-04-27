import { useState } from "react";
import { submitAPI } from "../api";

function BookingForm({ availableTimes, dispatch }) {

  /* ---------- FORM STATE ---------- */
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  /* ---------- DATE CHANGE (Reducer Trigger) ---------- */
  function handleDateChange(e) {
    const selectedDate = e.target.value;

    setDate(selectedDate);

    // Update available times using reducer
    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate,
    });
  }

  /* ---------- SUBMIT FORM ---------- */
  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    const success = submitAPI(formData);

    if (success) {
      alert("Reservation Submitted ✅");
    } else {
      alert("Submission Failed ❌");
    }
  }

  /* ---------- JSX ---------- */
  return (
    <form onSubmit={handleSubmit} className="booking-form">

      {/* DATE */}
      <label htmlFor="res-date">Choose date</label>
      <input
        id="res-date"
        type="date"
        value={date}
        onChange={handleDateChange}
        required
      />

      {/* TIME */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      {/* GUESTS */}
      <label htmlFor="guests">Number of guests</label>
      <input
        id="guests"
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      {/* OCCASION */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">
        Make Your Reservation
      </button>

    </form>
  );
}

export default BookingForm;