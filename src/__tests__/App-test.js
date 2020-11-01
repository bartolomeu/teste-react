import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import App from "../App";

afterEach(cleanup);

it("App should show 10 PersonagemComp", () => {
  const { queryByLabelText, getByLabelText } = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});
