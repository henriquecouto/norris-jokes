import { JokesProvider } from "./stores/jokes";
import JokeListView from "./views/JokeListView";

const App = () => {
  return (
    <div data-testid="app">
      <JokesProvider>
        <JokeListView />
      </JokesProvider>
    </div>
  );
};

export default App;
