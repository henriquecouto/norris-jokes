import Joke from "../../entities/Joke";

export interface JokeResponse<T> {
  type: "success" | string;
  value: T;
}

export interface JokeStore {
  jokeList: Array<Joke>;
  remove: (id: number) => void;
}
