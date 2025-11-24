import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

test("renders button with correct text", () => {
  render(<Button variant="primary">Click Me</Button>);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});

test("button calls onClick handler", () => {
  const mockFn = jest.fn();

  render(
    <Button variant="primary" onClick={mockFn}>
      Click
    </Button>,
  );

  fireEvent.click(screen.getByText("Click"));

  expect(mockFn).toHaveBeenCalledTimes(1);
});
