import { screen } from "@testing-library/react";
import MainLayout from "./MainLayout";
import { renderWithRouter } from "../../test_helpers/render_with_router";

test("Given the required props, When the component renders, Then the main content element should be present", () => {
  renderWithRouter(<MainLayout />);

  const someMainContent = screen.getByRole("main");

  expect(someMainContent).toHaveClass("page__content");
  expect(someMainContent).toBeInTheDocument();
});
