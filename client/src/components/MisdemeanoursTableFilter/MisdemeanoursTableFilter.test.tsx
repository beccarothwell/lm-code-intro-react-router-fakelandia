import { screen, render } from "@testing-library/react";
import MisdemeanoursTableFilter from "./MisdemeanoursTableFilter";
import userEvent from "@testing-library/user-event";

test("Given the required props, When the component renders, Then a select should be present inside a label", () => {
  const props = {
    label: "Label",
    name: "name",
    id: "id",
    placeholder: "placeholder",
    options: [],
    onChange: () => {},
  };

  const { container } = render(<MisdemeanoursTableFilter {...props} />);

  const label = container.firstChild;
  const someSelectElement = screen.getByRole("combobox");
  const containsInput = label?.contains(someSelectElement);

  expect(containsInput).toBe(true);
});

test("Given the required props, When the component is rendered, Then there should be a select element", () => {
  const props = {
    label: "Label",
    name: "name",
    id: "id",
    placeholder: "placeholder",
    options: [],
    onChange: () => {},
  };
  render(<MisdemeanoursTableFilter {...props} />);

  const someSelectElement = screen.getByRole("combobox");

  expect(someSelectElement).toBeInTheDocument();
  expect(someSelectElement.tagName).toBe("SELECT");
});

test("Given the required props, When the component is rendered, Then there should be a label element", () => {
  const props = {
    label: "Label",
    name: "name",
    id: "id",
    placeholder: "placeholder",
    options: [],
    onChange: () => {},
  };
  const { container } = render(<MisdemeanoursTableFilter {...props} />);

  expect(container.firstChild?.nodeName === "LABEL").toBe(true);
});

test("Given the required props, When the component is rendered, Then the label text should be present with the class visually-hidden", () => {
  const props = {
    label: "Label",
    name: "name",
    id: "id",
    placeholder: "placeholder",
    options: [],
    onChange: () => {},
  };
  render(<MisdemeanoursTableFilter {...props} />);

  const someLabelText = screen.getByText("Label:");
  expect(someLabelText).toBeInTheDocument();
  expect(someLabelText).toHaveClass("visually-hidden");
});

test("Given the required props, When the component is rendered, Then the provided options should be present", () => {
  const props = {
    label: "Label",
    name: "name",
    id: "id",
    placeholder: "placeholder",
    options: [
      {
        value: "a",
        text: "A",
      },
      {
        value: "b",
        text: "B",
      },
    ],
    onChange: () => {},
  };
  render(<MisdemeanoursTableFilter {...props} />);

  const someOptionAll = screen.getByRole("option", {
    name: "All Misdemeanours",
  });
  const someOptionA = screen.getByRole("option", { name: "A" });
  const someOptionB = screen.getByRole("option", { name: "B" });

  expect(someOptionAll).toBeInTheDocument();
  expect(someOptionA).toBeInTheDocument();
  expect(someOptionB).toBeInTheDocument();
});

test("Given the required props, When the component is rendered, Then the provided options should be present", () => {
  const props = {
    label: "Label",
    name: "name",
    id: "id",
    placeholder: "placeholder",
    options: [],
    onChange: () => {},
  };
  render(<MisdemeanoursTableFilter {...props} />);

  const someOption = screen.queryByRole("option", {
    name: "--Please choose an option--",
  });
  const somePlaceholderOption = screen.getByText("placeholder");

  expect(someOption).not.toBeInTheDocument();
  expect(somePlaceholderOption).toBeInTheDocument();
  expect(somePlaceholderOption).toBeDisabled();
  expect(somePlaceholderOption).not.toBeVisible();
});

test("Given the component is rendered, When the user selects an option, Then the onChange function is called", async () => {
  const user = userEvent.setup();

  const mockOnChange = vi.fn();

  const props = {
    label: "",
    name: "",
    id: "",
    options: [
      {
        value: "a",
        text: "A",
      },
      {
        value: "b",
        text: "B",
      },
    ],
    value: "",
    onChange: mockOnChange,
  };

  render(<MisdemeanoursTableFilter {...props} />);

  const someSelectElement = screen.getByRole("combobox");

  await user.selectOptions(someSelectElement, ["A"]);

  expect(mockOnChange).toBeCalled();
  expect(
    screen.getByRole("option", { name: "A", selected: true })
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("option", { name: "A", selected: false })
  ).not.toBeInTheDocument();
  expect(
    screen.getByRole("option", { name: "B", selected: false })
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("option", { name: "B", selected: true })
  ).not.toBeInTheDocument();
});
