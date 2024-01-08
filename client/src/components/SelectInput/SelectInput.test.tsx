import { render, screen } from "@testing-library/react";
import SelectInput from "./SelectInput";
import userEvent from "@testing-library/user-event";

test("Given the required props, When the component is rendered, Then there should be a select element", () => {
  const props = {
    label: "",
    name: "",
    id: "",
    options: [],
    value: "",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: [],
  };
  render(<SelectInput {...props} />);

  const someSelectElement = screen.getByRole("combobox");

  expect(someSelectElement).toBeInTheDocument();
  expect(someSelectElement.tagName).toBe("SELECT");
});

test("Given the required props, When the component is rendered, Then there should be a label element", () => {
  const props = {
    label: "",
    name: "",
    id: "",
    options: [],
    value: "",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: [],
  };
  const { container } = render(<SelectInput {...props} />);

  expect(container.firstChild?.firstChild?.nodeName === "LABEL").toBeTruthy();
});

test("Given the required props, When the component is rendered, Then the input element should be within a label element", () => {
  const props = {
    label: "",
    name: "",
    id: "",
    options: [],
    value: "",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: [],
  };
  const { container } = render(<SelectInput {...props} />);

  const label = container.firstChild;
  const someSelectElement = screen.getByRole("combobox");
  const containsInput = label?.contains(someSelectElement);

  expect(containsInput).toBeTruthy();
});

test("Given the required props, When the component is rendered, Then the label text should be present", () => {
  const props = {
    label: "Label",
    name: "",
    id: "",
    options: [],
    value: "",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: [],
  };
  render(<SelectInput {...props} />);

  const someLabelText = screen.getByLabelText(props.label);
  expect(someLabelText).toBeInTheDocument();
});

test("Given the required props, When the component is rendered, Then the provided options should be present", () => {
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
    onChange: () => {},
    onBlur: () => {},
    validationErrors: [],
  };
  render(<SelectInput {...props} />);

  const someOptionA = screen.getByRole("option", { name: "A" });
  const someOptionB = screen.getByRole("option", { name: "B" });

  expect(someOptionA).toBeInTheDocument();
  expect(someOptionB).toBeInTheDocument();
});

test("Given the required props, When the component is rendered, Then the provided options should be present", () => {
  const props = {
    label: "",
    name: "",
    id: "",
    options: [],
    value: "",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: [],
  };
  render(<SelectInput {...props} />);

  const someHiddenOption = screen.getByText("--Please choose an option--");

  expect(someHiddenOption).toBeInTheDocument();
  expect(someHiddenOption).toBeDisabled();
  expect(someHiddenOption).not.toBeVisible();
});

test("Given the required props, When the component is rendered, Then the provided options should be present", () => {
  const props = {
    label: "",
    name: "",
    id: "",
    options: [],
    placeholder: "Some placeholder",
    value: "",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: [],
  };
  render(<SelectInput {...props} />);

  const someDefaultPlaceholderOption = screen.queryByText(
    "--Please choose an option--"
  );
  const somePlaceholderOption = screen.getByText("Some placeholder");

  expect(someDefaultPlaceholderOption).not.toBeInTheDocument();
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
    onBlur: () => {},
    validationErrors: [],
  };

  render(<SelectInput {...props} />);

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

test("Given the required props, When the component is rendered and there are no errors, Then no error messages should be present", async () => {
  const props = {
    label: "",
    name: "",
    id: "",
    options: [],
    value: "",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: [],
  };

  render(<SelectInput {...props} />);

  const errorMessage1 = screen.queryByText(
    "Please provide a reason for contact"
  );

  expect(errorMessage1).not.toBeInTheDocument();
});

test("Given the required props, When the component is rendered and there is one error, Then the error message should be present", async () => {
  const props = {
    label: "",
    name: "",
    id: "",
    options: [],
    value: "",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: ["Error message"],
  };

  render(<SelectInput {...props} />);

  const errorMessage = screen.getByText(props.validationErrors[0]);

  expect(errorMessage).toBeInTheDocument();
});

test("Given the required props, When the component is rendered and there is more than one error, all the error message should be present", async () => {
  const props = {
    label: "",
    name: "",
    id: "",
    options: [],
    value: "",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: ["Error message 1", "Error message 2"],
  };

  render(<SelectInput {...props} />);

  const errorMessage1 = screen.getByText(props.validationErrors[0]);
  const errorMessage2 = screen.getByText(props.validationErrors[1]);

  expect(errorMessage1).toBeInTheDocument();
  expect(errorMessage2).toBeInTheDocument();
});

test("Given the component is rendered, When the user tabs to the input then tabs to the next element, Then the onBlur function is called", async () => {
  const user = userEvent.setup();

  const mockOnBlur = vi.fn();

  const props = {
    label: "",
    name: "",
    id: "",
    options: [],
    value: "",
    onChange: () => {},
    onBlur: mockOnBlur,
    validationErrors: [],
  };

  render(<SelectInput {...props} />);

  const someTextInput = screen.getByRole("combobox");

  await user.tab();

  expect(someTextInput).toHaveFocus();

  await user.tab();

  expect(someTextInput).not.toHaveFocus();

  expect(mockOnBlur).toBeCalled();
});

test("Given the component is rendered, When the user clicks on the input then clicks on another element, Then the onBlur function is called", async () => {
  const user = userEvent.setup();

  const mockOnBlur = vi.fn();

  const props = {
    label: "",
    name: "",
    id: "",
    options: [],
    value: "",
    onChange: () => {},
    onBlur: mockOnBlur,
    validationErrors: [],
  };

  render(<SelectInput {...props} />);

  const someTextInput = screen.getByRole("combobox");

  await user.click(someTextInput);

  expect(someTextInput).toHaveFocus();

  await user.click(document.body);

  expect(someTextInput).not.toHaveFocus();

  expect(mockOnBlur).toBeCalled();
});
