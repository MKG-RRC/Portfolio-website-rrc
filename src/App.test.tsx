import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

test("renders navbar brand text", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  const brandText = screen.getByText(/MKG Portfolio/i);
  expect(brandText).toBeInTheDocument();
});
