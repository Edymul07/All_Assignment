import { render, screen } from "@testing-library/react";
import Login from "./Login";

it("should have content", () => {
  render(<Login />);

  const page = screen.getByText("Login");

  expect(page).toBeInTheDocument();
});
