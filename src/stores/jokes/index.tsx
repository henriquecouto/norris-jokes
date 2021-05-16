import { Typography } from "@material-ui/core";
import { createContext, FC, useContext, useEffect, useState } from "react";
import useSWR from "swr";
import Joke from "../../entities/Joke";
import urls from "../../utils/constants/urls";
import { dataFetcher } from "../../utils/dataFetcher";
import { JokeResponse, JokeStore } from "./JokesStore.types";

const JokesStoreContext = createContext<JokeStore>({} as JokeStore);

export const useJokes = () => useContext(JokesStoreContext);

export const JokesProvider: FC = ({ children }) => {
  const { data, error } = useSWR<JokeResponse<Array<Joke>>>(
    urls.randomJokes(10),
    dataFetcher
  );

  const [jokes, setJokes] = useState<Array<Joke>>([]);

  const loadMoreOne = async () => {
    const joke = await dataFetcher<JokeResponse<Joke>>(urls.randomJoke());
    return joke;
  };

  const remove = async (id: number) => {
    setJokes((old) => old.filter((joke) => joke.id !== id));
    const newJoke = await loadMoreOne();
    setJokes((old) => [...old, newJoke.value]);
  };

  useEffect(() => {
    if (data) setJokes(data.value);
  }, [data]);

  if (error) {
    return <Typography variant="h2">An error has ocurred...</Typography>;
  }

  if (!data || !jokes) {
    return <Typography variant="h2">Loading...</Typography>;
  }

  return (
    <JokesStoreContext.Provider value={{ jokeList: jokes, remove }}>
      {children}
    </JokesStoreContext.Provider>
  );
};
