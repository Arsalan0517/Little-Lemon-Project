import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  /* ---------- DATE CHANGE ---------- */
  function handleDateChange(e) {
    const selectedDate = e.target.value;

    setDate(selectedDate);

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate,
    });
  }

  /* ---------- SUBMIT ---------- */
  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    submitForm(formData);
  }

  const isFormValid =
    date !== "" &&
    time !== "" &&
    guests >= 1 &&
    guests <= 10;

  return (
    <form
      onSubmit={handleSubmit}
      className="booking-form"
      aria-label="Table Reservation Form"
    >

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

      <button
        type="submit"
        aria-label="Make Your Reservation"
        disabled={!isFormValid}
      >
        Make Your Reservation
      </button>

    </form>
  );
}

export default BookingForm;