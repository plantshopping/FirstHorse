import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
  const app = screen.getByRole("main");
  expect(app).toBeTruthy();
});
