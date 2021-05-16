import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Joke from "../../entities/Joke";
import { mockJokesArray } from "../../mocks/joke";
import * as f from "../../utils/dataFetcher";
import { JokesProvider } from "./index";
import { JokeResponse } from "./JokesStore.types";

const spySuccess = () =>
  jest.spyOn(f, "dataFetcher").mockImplementation(
    async (): Promise<JokeResponse<Array<Joke>>> => ({
      type: "success",
      value: mockJokesArray,
    })
  );

describe("Jokes Store", () => {
  beforeEach(async () => {
    act(() => {
      render(
        <JokesProvider>
          <div data-testid="child" />
        </JokesProvider>
      );
    });
  });

  test("should render loading", () => {
    spySuccess();
    const loading = screen.getByText(/loading/i);
    expect(loading).toBeInTheDocument();
  });

  test("should render children", async () => {
    spySuccess();
    const child = await screen.findByTestId("child");
    expect(child).toBeInTheDocument();
  });
});
