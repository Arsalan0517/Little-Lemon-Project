import { useState } from "react";

function BookingForm() {

  /* ---------- FORM STATE ---------- */
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  /* ---------- AVAILABLE TIMES ---------- */
  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00"
  ]);

  /* ---------- SUBMIT HANDLER ---------- */
  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      date,
      time,
      guests,
      occasion
    });

    alert("Reservation Submitted ✅");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="booking-form"
    >
      {/* Date */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      {/* Time */}
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

      {/* Guests */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      {/* Occasion */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      {/* Submit */}
      <button type="submit">
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;