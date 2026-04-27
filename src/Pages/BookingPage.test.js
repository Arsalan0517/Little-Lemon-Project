import { initializeTimes, updateTimes } from "./BookingPage";


// ✅ Test 1 — initializeTimes
test("initializeTimes returns available times", () => {
  const result = initializeTimes();

  expect(result.length).toBeGreaterThan(0);
});


// ✅ Test 2 — updateTimes 
test("updateTimes returns updated times", () => {
  const state = ["17:00"];
  const action = { date: "2026-04-27" };

  const result = updateTimes(state, action);

  expect(result.length).toBeGreaterThan(0);
});