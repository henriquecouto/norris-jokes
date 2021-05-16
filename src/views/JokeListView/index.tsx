import JokeList from "../../components/JokeList";
import { useJokes } from "../../stores/jokes";

const JokeListView = () => {
  const { jokeList, remove } = useJokes();

  return <JokeList jokes={jokeList} onRemoveJoke={remove} />;
};

export default JokeListView;
