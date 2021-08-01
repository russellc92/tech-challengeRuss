import React from "react";
import { render } from "@testing-library/react";
import MultiTextInput from "./MultiTextInput";

it("should render correctly", () => {
  const { getByTestId } = render(<MultiTextInput />);

  expect(getByTestId("multitextinput-view")).toBeInTheDocument();
});
