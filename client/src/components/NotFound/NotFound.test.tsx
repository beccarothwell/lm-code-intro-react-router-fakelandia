import { screen } from "@testing-library/react";
import NotFound from "./NotFound";
import { renderWithRouter } from "../../test_helpers/render_with_router";

test("Given the required props, When the component renders, Then the text should be present", () => {
  renderWithRouter(<NotFound />);

  const someText = screen.getByText("Not Found!");

  expect(someText).toBeInTheDocument();
});
