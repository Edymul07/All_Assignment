import { render } from "@testing-library/react";
import FieldPassword from "./FieldPassword";

it("should have p tag", () => {
  let { container } = render(<FieldPassword />);
  let field = container.querySelector("p");

  expect(field).toBeInTheDocument();
});
