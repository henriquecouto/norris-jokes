import { render, screen } from "@testing-library/react";
import JokeCard from ".";
import { mockJoke } from "../../mocks/joke";

describe("Joke Card Component", () => {
  beforeEach(() => {
    render(<JokeCard joke={mockJoke} />);
  });

  test("should render the paper card correctly", () => {
    const jokeCardPaper = screen.getByTestId("joke-card-paper");
    expect(jokeCardPaper).toBeInTheDocument();
    expect(jokeCardPaper).toHaveStyle("min-width: 250px");
    expect(jokeCardPaper.children).toHaveLength(1);
  });

  test("should render the joke text", () => {
    const jokeText = screen.queryByText(mockJoke.joke);
    expect(jokeText).toBeTruthy();
  });

  test("should render the joke categories name", () => {
    let finded = 0;
    mockJoke.categories.forEach((category) => {
      const categoryName = screen.queryByText(category);
      if (categoryName) finded += 1;
    });
    expect(finded).toEqual(mockJoke.categories.length);
  });
});
