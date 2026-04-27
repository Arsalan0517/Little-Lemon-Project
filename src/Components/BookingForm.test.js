import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders Booking Form heading", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);

  const label = screen.getByText("Choose date");

  expect(label).toBeInTheDocument();
});