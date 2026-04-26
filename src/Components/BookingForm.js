import { useState } from "react";

function BookingForm({ availableTimes, dispatch }) {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  /* ---------- DATE CHANGE ---------- */
  function handleDateChange(e) {
    const selectedDate = e.target.value;

    setDate(selectedDate);

    // trigger reducer
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Reservation Submitted ✅");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="booking-form"
    >

      {/* DATE */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
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
        <option value="">Select time</option>

        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      {/* GUESTS */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      {/* OCCASION */}
      <label htmlFor="occasion">Occasion</label>
      <select
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