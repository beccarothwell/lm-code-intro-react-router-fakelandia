import { screen } from "@testing-library/react";
import { NavItem } from "./NavItem";
import { renderWithRouter } from "../../../test_helpers/render_with_router";

test("Given the required props, When the component renders, Then a list item with class nav__item should be present", () => {
  renderWithRouter(
    <NavItem text={"Fakelandia Justice Deptartment"} slug={""} />
  );

  const someListItem = screen.getByRole("listitem");

  expect(someListItem).toHaveClass("nav__item");
  expect(someListItem).toBeInTheDocument();
});

test("Given the required props, When the component renders, Then a link with class nav__link should be present", () => {
  renderWithRouter(
    <NavItem text={"Fakelandia Justice Deptartment"} slug={""} />
  );

  const someLink = screen.getByRole("link");

  expect(someLink).toHaveClass("nav__link");
  expect(someLink).toBeInTheDocument();
});

test("Given the required props, When the component renders, Then the text should be present", () => {
  renderWithRouter(<NavItem text={"Test"} slug={""} />);

  const someText = screen.queryByText("Test");

  expect(someText).toBeInTheDocument();
});

test("Given the required props, When the component renders, Then a link with the correct href should be present", () => {
  renderWithRouter(<NavItem text={"Test"} slug={"test"} />);

  const someLink = screen.getByRole("link");

  expect(someLink).toHaveAttribute("href", "/test");
});
