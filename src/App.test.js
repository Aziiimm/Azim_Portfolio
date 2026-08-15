import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders name in the hero section", () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Azim Rahat/i);
  expect(nameElements.length).toBeGreaterThan(0);
});

test("renders navigation links", () => {
  render(<App />);
  expect(screen.getByRole("navigation")).toBeInTheDocument();
});
