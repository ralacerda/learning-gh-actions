import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("counter increses after user clicks the button", async () => {
  const app = render(<App />);

  const button = app.getByTestId("counter");

  await button.click();

  expect(button.innerHTML).toBe("count is 1");
  app.unmount();
});
