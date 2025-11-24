import { render, screen } from "@testing-library/react";
import { Typography } from "./Typography";

test("renders typography text", () => {
  render(<Typography variant="h2">Hello World</Typography>);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
