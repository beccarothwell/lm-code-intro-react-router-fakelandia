import MisdemeanourPage from "./MisdemeanourPage";
import { render } from "@testing-library/react";

test("Given the required props, When the component renders, Then  should be present", () => {
  render(<MisdemeanourPage />);
});
