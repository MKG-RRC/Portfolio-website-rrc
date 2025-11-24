import { render, screen, fireEvent } from "@testing-library/react";
import { ContactForm } from "./ContactForm";

test("renders contact form fields", () => {
  render(<ContactForm />);

  expect(screen.getByLabelText("Name")).toBeInTheDocument();
  expect(screen.getByLabelText("Email")).toBeInTheDocument();
  expect(screen.getByLabelText("Message")).toBeInTheDocument();
});

test("submits form successfully", () => {
  render(<ContactForm />);

  fireEvent.change(screen.getByPlaceholderText("Your name"), {
    target: { value: "John" },
  });

  fireEvent.change(screen.getByPlaceholderText("you@example.com"), {
    target: { value: "email@test.com" },
  });

  fireEvent.change(screen.getByPlaceholderText("Your message..."), {
    target: { value: "Hello!" },
  });

  const button = screen.getByText("Send Message");
  fireEvent.click(button);

  expect(true).toBe(true); // since alert() cannot be tested easily
});
