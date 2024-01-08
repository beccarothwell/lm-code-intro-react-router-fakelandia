import { render, screen } from "@testing-library/react";
import { TextInput, TextInputProps } from "./TextInput";
import userEvent from "@testing-library/user-event";

test("Given the required props, When the component is rendered, Then there should be an input element", () => {
  const props: TextInputProps = {
    label: "",
    name: "",
    type: "text",
    id: "",
    value: "",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: [],
  };

  render(<TextInput {...props} />);

  const someTextInput = screen.getByRole("textbox");

  expect(someTextInput).toBeInTheDocument();
  expect(someTextInput.tagName).toBe("INPUT");
  expect(someTextInput.getAttribute("type")).toBe(props.type);
});

test("Given the required props, When the component is rendered, Then there should be a label element", () => {
  const props: TextInputProps = {
    label: "",
    name: "",
    type: "text",
    id: "",
    value: "",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: [],
  };

  const { container } = render(<TextInput {...props} />);

  expect(container.firstChild?.firstChild?.nodeName === "LABEL").toBe(true);
});

test("Given the required props, When the component is rendered, Then the input element should be within a label element", () => {
  const props: TextInputProps = {
    label: "",
    name: "",
    type: "text",
    id: "",
    value: "",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: [],
  };

  const { container } = render(<TextInput {...props} />);

  const label = container.firstChild?.firstChild;
  const someTextInput = screen.getByRole("textbox");
  const containsInput = label?.contains(someTextInput);

  expect(containsInput).toBeTruthy();
});

test("Given the required props, When the component is rendered, Then the label text should be present", () => {
  const props: TextInputProps = {
    label: "Some label",
    name: "",
    type: "text",
    id: "",
    value: "",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: [],
  };

  render(<TextInput {...props} />);

  const someLabelText = screen.getByLabelText(props.label);
  expect(someLabelText).toBeInTheDocument();
});

test("Given an isHiddenLabel prop of true and Label prop text, When the component is rendered, Then the text element should have the correct className", () => {
  const props: TextInputProps = {
    label: "Some label",
    isHiddenLabel: true,
    name: "",
    type: "text",
    id: "",
    value: "",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: [],
  };

  render(<TextInput {...props} />);

  const someText = screen.getByText(props.label);
  expect(someText).toBeInTheDocument();
  expect(someText).toHaveClass("visually-hidden");
});

test("Given the required props, When the component is rendered, Then the input value should be present", () => {
  const props: TextInputProps = {
    label: "",
    name: "",
    type: "text",
    id: "",
    value: "test",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: [],
  };

  render(<TextInput {...props} />);

  const someTextInput = screen.getByRole("textbox");
  expect(someTextInput).toHaveValue(props.value);
});

test("Given the component is rendered, When the user types in the input, Then the onChange function is called", async () => {
  const user = userEvent.setup();

  const mockOnChange = vi.fn();

  const props: TextInputProps = {
    label: "",
    name: "",
    type: "text",
    id: "",
    value: "",
    onChange: mockOnChange,
    onBlur: () => {},
    validationErrors: [],
  };

  render(<TextInput {...props} />);

  const someTextInput = screen.getByRole("textbox");

  await user.type(someTextInput, "test");

  expect(mockOnChange).toBeCalled();
  expect(mockOnChange).toBeCalledTimes(4);
});

test("Given a className prop, When the component renders, Then className should be present", () => {
  const props: TextInputProps = {
    className: "test-classname",
    label: "",
    name: "",
    type: "text",
    id: "",
    value: "test",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: [],
  };

  const { container } = render(<TextInput {...props} />);

  expect(container.firstChild).toHaveClass("test-classname");
});

test("Given the required props, When the component is rendered and there is an error, Then the error message should be present", async () => {
  const props: TextInputProps = {
    label: "",
    name: "",
    type: "text",
    id: "",
    value: "test",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: ["Error message"],
  };

  render(<TextInput {...props} />);

  const errorMessage = screen.getByText(props.validationErrors[0]);

  expect(errorMessage).toBeInTheDocument();
});

test("Given the required props, When the component is rendered and there are multiple errors, Then all the error messages should be present", async () => {
  const props: TextInputProps = {
    label: "",
    name: "",
    type: "text",
    id: "",
    value: "",
    onChange: () => {},
    onBlur: () => {},
    validationErrors: ["Error message 1", "Error message 2"],
  };

  render(<TextInput {...props} />);

  const errorMessage1 = screen.getByText(props.validationErrors[0]);
  const errorMessage2 = screen.getByText(props.validationErrors[1]);
  expect(errorMessage1).toBeInTheDocument();
  expect(errorMessage2).toBeInTheDocument();
});

test("Given the component is rendered, When the user tabs to the input then tabs to the next element, Then the onBlur function is called", async () => {
  const user = userEvent.setup();

  const mockOnBlur = vi.fn();

  const props: TextInputProps = {
    label: "",
    name: "",
    type: "text",
    id: "",
    value: "",
    onChange: () => {},
    onBlur: mockOnBlur,
    validationErrors: [],
  };

  render(<TextInput {...props} />);

  const someTextInput = screen.getByRole("textbox");

  await user.tab();

  expect(someTextInput).toHaveFocus();

  await user.tab();

  expect(someTextInput).not.toHaveFocus();

  expect(mockOnBlur).toBeCalled();
});

test("Given the component is rendered, When the user clicks on the input then clicks on another element, Then the onBlur function is called", async () => {
  const user = userEvent.setup();

  const mockOnBlur = vi.fn();

  const props: TextInputProps = {
    label: "",
    name: "",
    type: "text",
    id: "",
    value: "",
    onChange: () => {},
    onBlur: mockOnBlur,
    validationErrors: [],
  };

  render(<TextInput {...props} />);

  const someTextInput = screen.getByRole("textbox");

  await user.click(someTextInput);

  expect(someTextInput).toHaveFocus();

  await user.click(document.body);

  expect(someTextInput).not.toHaveFocus();

  expect(mockOnBlur).toBeCalled();
});
