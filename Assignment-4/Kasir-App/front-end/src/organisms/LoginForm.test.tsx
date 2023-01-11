import { render } from "@testing-library/react";
import LoginForm from "./LoginForm";

it("should have form tag", () => {
  let { container } = render(<LoginForm />);
  let form = container.querySelector("form");

  expect(form).toBeInTheDocument();
});
