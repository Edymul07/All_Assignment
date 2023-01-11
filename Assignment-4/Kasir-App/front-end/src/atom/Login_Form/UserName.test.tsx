import { render, screen } from "@testing-library/react";
import UserName from "./UserName";

it("should contain user name", () => {
  render(<UserName />);

  const input = screen.getByPlaceholderText("User_Name");

  expect(input).toBeInTheDocument();
});
