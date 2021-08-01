import React from "react";
import { render } from "@testing-library/react";
import ClassificationList from "./ClassificationList";

it("should render correctly", () => {
  const { getByTestId } = render(<ClassificationList />);

  expect(getByTestId("classificationlist-view")).toBeInTheDocument();
});
