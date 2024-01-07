import { screen, render } from "@testing-library/react";
import NotFound from "./NotFound";

test("Given the required props, When the component renders, Then the text should be present", () => {
  render(<NotFound />);

  const someText = screen.getByText("Not Found!");

  expect(someText).toBeInTheDocument();
});
