import { render, screen } from "@testing-library/react";
import App from "./App";

test("ensure render app", () => {
  render(<App />);
  const app = screen.getByTestId("app");
  expect(app).toBeInTheDocument();
});
