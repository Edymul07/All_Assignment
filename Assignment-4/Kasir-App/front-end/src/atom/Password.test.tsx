import { render, screen } from "@testing-library/react";
import Password from "./Password";

it("should contain submit message", () => {
  render(<Password />);

  const input = screen.getByPlaceholderText("Password");

  expect(input).toBeInTheDocument();
});
