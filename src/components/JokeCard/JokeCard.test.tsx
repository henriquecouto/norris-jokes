import { render, screen } from "@testing-library/react";
import JokeCard from ".";
import Joke from "../../entities/Joke";

const jokeMock = new Joke({
  id: 1,
  categories: ["any category 1", "any category 2"],
  joke: "any joke text",
});

describe("Joke Card Component", () => {
  beforeEach(() => {
    render(<JokeCard joke={jokeMock} />);
  });

  test("should render the paper card correctly", () => {
    const jokeCardPaper = screen.getByTestId("joke-card-paper");
    expect(jokeCardPaper).toBeInTheDocument();
    expect(jokeCardPaper).toHaveStyle("min-width: 250px");
    expect(jokeCardPaper.children).toHaveLength(1);
  });

  test("should render the joke text", () => {
    const jokeText = screen.queryByText(jokeMock.joke);
    expect(jokeText).toBeTruthy();
  });

  test("should render the joke categories name", () => {
    let finded = 0;
    jokeMock.categories.forEach((category) => {
      const categoryName = screen.queryByText(category);
      if (categoryName) finded += 1;
    });
    expect(finded).toEqual(jokeMock.categories.length);
  });
});
