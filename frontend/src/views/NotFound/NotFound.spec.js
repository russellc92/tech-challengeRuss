import React from "react";
import { render } from "@testing-library/react";
import NotFound from "./NotFound";

it("should render correctly", () => {
  const { getByTestId } = render(<NotFound />);

  expect(getByTestId("not-found-view")).toBeInTheDocument();
});
