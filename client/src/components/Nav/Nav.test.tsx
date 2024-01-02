import { screen } from "@testing-library/react";
import Nav from "./Nav";
import { renderWithRouter } from "../../test_helpers/render_with_router";

test("Given the required props, When the component renders, Then the nav should be present", () => {
  renderWithRouter(<Nav />);

  const someNav = screen.getByRole("navigation");

  expect(someNav).toHaveClass("nav");
  expect(someNav).toBeInTheDocument();
});
