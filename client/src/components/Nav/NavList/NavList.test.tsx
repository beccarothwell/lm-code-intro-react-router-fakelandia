import { screen } from "@testing-library/react";
import NavList from "./NavList";
import { renderWithRouter } from "../../../test_helpers/render_with_router";

test("Given the required props, When the component renders, Then the nav should be present", () => {
  const MAIN_NAV_LINKS = [
    { text: "Home", slug: "" },
    { text: "Misdemeanour", slug: "misdemeanour" },
    { text: "Confess To Us", slug: "confession" },
  ];
  renderWithRouter(<NavList navList={MAIN_NAV_LINKS} />);

  const someList = screen.getByRole("list");

  expect(someList).toHaveClass("nav__list");
  expect(someList).toBeInTheDocument();
});
