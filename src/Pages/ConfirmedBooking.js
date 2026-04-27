function ConfirmedBooking() {
  return (
    <main className="confirmation-page">
      <div className="confirmation-box" aria-label="Booking Confirmation">

        <h1>Booking Confirmed 🎉</h1>

        <p>
          Your table reservation has been successfully submitted.
        </p>

        <p className="confirmation-note">
          We look forward to welcoming you at Little Lemon 🍋
        </p>

        <a href="/" className="confirmation-btn">
          Back to Home
        </a>

      </div>
    </main>
  );
}

export default ConfirmedBooking;