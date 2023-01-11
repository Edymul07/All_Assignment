import { render, screen } from "@testing-library/react";
import Title from "./Title";

it("should contain title content", () => {
  render(<Title content="This is Title" />);

  const title = screen.getByText("This is Title");

  expect(title).toBeInTheDocument();
});
