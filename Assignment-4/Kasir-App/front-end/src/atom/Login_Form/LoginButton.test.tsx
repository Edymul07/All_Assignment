import { render, screen } from "@testing-library/react";
import LoginButton from "./LoginButton";

it("should contain submit message", () => {
  render(<LoginButton />);

  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();
});
