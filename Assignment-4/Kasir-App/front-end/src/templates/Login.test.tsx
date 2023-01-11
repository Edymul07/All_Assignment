import { render, screen } from "@testing-library/react";
import Login from "./Login";

it("should have content", () => {
  render(<Login content="This is the content." />);

  const template = screen.getByText("This is the content.");

  expect(template).toBeInTheDocument();
});
