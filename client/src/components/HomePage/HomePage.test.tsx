import { screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { renderWithRouter } from "../../test_helpers/render_with_router";

test("Given the required props, When the component renders, Then a level 1 heading with the class page__title should be present", () => {
  renderWithRouter(<HomePage />);

  const someHeading = screen.getByRole("heading");

  expect(someHeading).toHaveClass("page__title");
  expect(someHeading).toBeInTheDocument();
  expect(someHeading.tagName).toBe("H1");
});

test("Given the required props, When the component renders, Then the welcome text should be present", () => {
  renderWithRouter(<HomePage />);

  const someHeadingText = screen.getByText(
    "Welcome to the home of the Justice Department of Fakelandia."
  );

  expect(someHeadingText).toBeInTheDocument();
});

test("Given the required props, When the component renders, Then a p tag with the appropriate text and class page__text should be present", () => {
  renderWithRouter(<HomePage />);

  const someParagraphText = screen.getByText(
    "Here you can browse a list of recent misdemeanours committed by our citizens, or you can confess to your own misdemeanour."
  );

  expect(someParagraphText).toBeInTheDocument();
  expect(someParagraphText).toHaveClass("page__text");
});
