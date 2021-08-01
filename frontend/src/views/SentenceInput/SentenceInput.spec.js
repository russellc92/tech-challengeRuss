import React from "react";
import { render } from "@testing-library/react";
import SentenceInput from "./SentenceInput";

it("should render correctly", () => {
  const { getByTestId } = render(<SentenceInput />);
  expect(getByTestId("SentenceInput-view")).toBeInTheDocument();
});
