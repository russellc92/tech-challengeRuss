import React from "react";
import { render } from "@testing-library/react";
import ClassificationItem from "./ClassificationItem";

it("should render correctly", () => {
  const { getByTestId } = render(<ClassificationItem />);

  expect(getByTestId("classificationitem-view")).toBeInTheDocument();
});
