import { screen } from "@testing-library/react";
import NavBrand from "./NavBrand";
import { renderWithRouter } from "../../../test_helpers/render_with_router";

test("Given the required props, When the component renders, Then a link with class nav__brand should be present", () => {
  renderWithRouter(
    <NavBrand text={"Fakelandia Justice Deptartment"} slug={""} />
  );

  const someLink = screen.getByRole("link");

  expect(someLink).toHaveClass("nav__brand");
  expect(someLink).toBeInTheDocument();
});

test("Given the required props, When the component renders, Then the split text should be present", () => {
  renderWithRouter(
    <NavBrand text={"Fakelandia Justice Deptartment"} slug={""} />
  );

  const someSplitTextWordOne = screen.getByText("Fakelandia");
  const someSplitTextWordTwo = screen.getByText("Justice");
  const someSplitTextWordThree = screen.getByText("Deptartment");
  const someUnsplitText = screen.queryByText("Fakelandia Justice Deptartment");

  expect(someSplitTextWordOne).toBeInTheDocument();
  expect(someSplitTextWordTwo).toBeInTheDocument();
  expect(someSplitTextWordThree).toBeInTheDocument();
  expect(someUnsplitText).not.toBeInTheDocument();
});

test("Given the required props, When the component renders, Then a link element with class nav__brand and the correct href should be present", () => {
  renderWithRouter(
    <NavBrand text={"Fakelandia Justice Deptartment"} slug={""} />
  );

  const someLink = screen.getByRole("link");

  expect(someLink).toHaveClass("nav__brand");
  expect(someLink).toHaveAttribute("href", "/");
});

test("Given no slug prop, When the component renders, Then the element with class nav__brand should not be a link", () => {
  const { container } = renderWithRouter(<NavBrand text={"Fakelandia"} />);

  const someLink = screen.queryByRole("link");
  const someText = screen.getByText("Fakelandia");

  expect(someLink).not.toBeInTheDocument();
  expect(someText).toBeInTheDocument();
  expect(container.firstChild).not.toHaveAttribute("href", "/");
  expect(container.firstChild).toHaveClass("nav__brand");
});
