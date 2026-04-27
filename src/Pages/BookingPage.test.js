import { initializeTimes, updateTimes } from "./BookingPage";
import { fetchAPI } from "../api";

/* ---------- MOCK API ---------- */
jest.mock("../api");

/* ---------- TEST 1: initializeTimes ---------- */
test("initializeTimes returns available times", () => {

  fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);

  const result = initializeTimes();

  expect(result.length).toBeGreaterThan(0);
});


/* ---------- TEST 2: updateTimes ---------- */
test("updateTimes returns updated times", () => {

  fetchAPI.mockReturnValue(["20:00", "21:00"]);

  const state = ["17:00"];

  const action = {
    type: "UPDATE_TIMES",
    date: "2026-04-27",
  };

  const result = updateTimes(state, action);

  expect(result).toEqual(["20:00", "21:00"]);
});