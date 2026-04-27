import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockDispatch = jest.fn();
const mockSubmit = jest.fn();

const availableTimes = ["17:00", "18:00", "19:00"];

function renderForm() {
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmit}
    />
  );
}

describe("BookingForm HTML5 Validation", () => {

  test("date input has required attribute", () => {
    renderForm();
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeRequired();
  });

  test("time select has required attribute", () => {
    renderForm();
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeRequired();
  });

  test("guests input has min and max attributes", () => {
    renderForm();
    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

});

describe("BookingForm React Validation", () => {

  test("submit button disabled when form is invalid", () => {
    renderForm();

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    expect(submitButton).toBeDisabled();
  });

  test("submit button enabled when form is valid", () => {
    renderForm();

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-05-01" },
    });

    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "17:00" },
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "2" },
    });

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    expect(submitButton).toBeEnabled();
  });

});