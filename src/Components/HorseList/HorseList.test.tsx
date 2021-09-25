import { render, screen } from "@testing-library/react";
import { HorseList } from "./HorseList";

test("renders horse list", () => {
  render(<HorseList />);
  const linkElement = screen.getByText(/TODO Horses will show here/i);
  expect(linkElement).toBeInTheDocument();
});
