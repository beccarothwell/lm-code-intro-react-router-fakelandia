import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import App from "./App";

const successResponse = http.get(
  "http://localhost:8080/api/misdemeanours/4",
  () => {
    return HttpResponse.json({});
  }
);

const server = setupServer(successResponse);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  it("renders headline", () => {
    render(<App />);

    screen.debug();
  });
});
