import { render, screen } from "@testing-library/react";
import ConfessionForm from "./ConfessionForm";
//import userEvent from "@testing-library/user-event";

test("Given the required props, When the component renders, Then the form should be present", () => {
  render(<ConfessionForm submitData={() => {}} />);

  const someForm = screen.getByRole("form");

  expect(someForm).toBeInTheDocument();
});
