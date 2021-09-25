import { render, screen } from "@testing-library/react";
import { HorseList } from "./HorseList";

describe("given horse list", () => {
  describe("when horses has data", () => {
    test("then renders horse data", () => {
      const data = [
        { id: "1", name: "horse1" },
        { id: "2", name: "horse2" },
        { id: "3", name: "horse3" },
      ];

      render(<HorseList horses={data} />);
      const list = screen.getAllByRole("listitem");
      expect(list.length).toBe(3);
    });
  });
});
