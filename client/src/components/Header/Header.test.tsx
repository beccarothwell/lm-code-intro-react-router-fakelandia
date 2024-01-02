import { screen } from "@testing-library/react";
import Header from "./Header";
import { renderWithRouter } from "../../test_helpers/render_with_router";

test("Given the required props, When the component renders, Then the header should be present", () => {
  renderWithRouter(<Header />);

  const someHeader = screen.getByRole("banner");

  expect(someHeader).toHaveClass("page__header");
  expect(someHeader).toBeInTheDocument();
});
