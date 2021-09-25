import { render, screen } from "@testing-library/react";
import { HorseDetail } from "./HorseDetail";

describe("given horse detail", () => {
  describe("when horse detail has name", () => {
    test("renders name", () => {
      const horse = { id: "1", name: "horse1" };

      render(<HorseDetail horse={horse} />);

      const horseDetail = screen.getByRole("heading");
      expect(horseDetail).toBeInTheDocument();
      expect(horseDetail.textContent).toBe("Name: horse1");
    });
  });

  // TODO Could refactor with .each
  describe("when horse detail has profile", () => {
    describe("and horse detail has favourite food", () => {
      test("then renders favourite food", () => {
        const horse = {
          id: "1",
          name: "horse1",
          profile: { favouriteFood: "kfc" },
        };

        render(<HorseDetail horse={horse} />);

        const horseDetail = screen.getByText(/Favourite Food:/i);
        expect(horseDetail).toBeInTheDocument();
        expect(horseDetail.textContent).toBe("Favourite Food: kfc");
      });
    });

    describe("and horse detail has no favourite food", () => {
      test("then doesn't render favourite food", () => {
        const horse = { id: "1", name: "horse1", profile: {} };

        render(<HorseDetail horse={horse} />);

        const horseDetail = screen.getByText(/Favourite Food:/i);
        expect(horseDetail.textContent).toBe("Favourite Food: ");
      });
    });
  });
});
