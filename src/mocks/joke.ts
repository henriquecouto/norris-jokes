import Joke from "../entities/Joke";

export const mockJoke = new Joke({
  id: 1,
  categories: ["any category 1", "any category 2"],
  joke: "any joke text",
});

export const mockJokesArray = Array.from(Array(10).keys()).map(
  (id) =>
    new Joke({ id, joke: mockJoke.joke + id, categories: mockJoke.categories })
);
