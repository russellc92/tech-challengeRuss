import React from "react";
import { render } from "@testing-library/react";
import Classification from "./Classification";

it("should render correctly", () => {
  const { getByTestId } = render(<Classification />);
  expect(getByTestId("Classification-view")).toBeInTheDocument();
});
