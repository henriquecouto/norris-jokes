import Joke from "../entities/Joke";

export const jokeMock = new Joke({
  id: 1,
  categories: ["any category 1", "any category 2"],
  joke: "any joke text",
});

export const jokesMockArray = Array.from(Array(10).keys()).map(
  (id) =>
    new Joke({ id, joke: jokeMock.joke + id, categories: jokeMock.categories })
);
