import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

test("renders initial and increments/decrements with floor at 0", () => {
  render(<Counter initial={1} />);
  const display = screen.getByTestId("count");
  const inc = screen.getByRole("button", { name: "+" });
  const dec = screen.getByRole("button", { name: "–" });

  expect(display.textContent).toBe("1");
  fireEvent.click(inc);
  expect(display.textContent).toBe("2");

  fireEvent.click(dec);
  fireEvent.click(dec);
  expect(display.textContent).toBe("0");
  expect(dec).toBeDisabled();
});
