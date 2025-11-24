import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("renders card title", () => {
  render(<Card title="My Project" description="Test Desc" />);
  expect(screen.getByText("My Project")).toBeInTheDocument();
});
