import { render } from "@testing-library/react";
import FieldUserName from "./FieldUserName";

it("should have p tag", () => {
  let { container } = render(<FieldUserName />);
  let field = container.querySelector("p");

  expect(field).toBeInTheDocument();
});
