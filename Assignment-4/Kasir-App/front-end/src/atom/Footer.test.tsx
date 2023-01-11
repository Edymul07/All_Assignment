import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

it("should contain title content", () => {
  render(<Footer />);

  const footer = screen.getByText("Footer");

  expect(footer).toBeInTheDocument();
});
