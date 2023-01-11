import { render } from "@testing-library/react";
import FieldLogin from "./FieldLogin";

it("should have p tag", () => {
  let { container } = render(<FieldLogin />);
  let field = container.querySelector("p");

  expect(field).toBeInTheDocument();
});
