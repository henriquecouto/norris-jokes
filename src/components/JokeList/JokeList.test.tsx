import { render, screen } from "@testing-library/react";
import JokeList from ".";
import { mockJokesArray } from "../../mocks/joke";

const removeFn = jest.fn();

describe("Joke List component", () => {
  beforeEach(() => {
    render(
      <div data-testid="app" style={{ width: "1000px", height: "1000px" }}>
        <JokeList jokes={mockJokesArray} onRemoveJoke={removeFn} />
      </div>
    );
  });

  test("should render all jokes", () => {
    const jokeList = screen.getByTestId("joke-list");
    expect(jokeList.children.length).toEqual(mockJokesArray.length);
  });
});
