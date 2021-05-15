import { FC } from "react";
import { Grid, Paper } from "@material-ui/core";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import Joke from "../../entities/Joke";
import JokeCard from "../JokeCard";
import useJokeListStyles from "./JokeList.styles";

interface JokeListProps {
  jokes: Array<Joke>;
  onRemoveJoke: (id: number) => void;
  children?: null;
}

const JokeList: FC<JokeListProps> = ({ jokes, onRemoveJoke }) => {
  const classes = useJokeListStyles();

  const handleRemoveJoke = (result: DropResult) => {
    if (!result.destination) {
      onRemoveJoke(Number(result.draggableId));
    }
  };

  return (
    <DragDropContext onDragEnd={handleRemoveJoke}>
      <Droppable droppableId="joke-list">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={classes.root}
          >
            <Paper className={classes.paper}>
              <Grid
                container
                direction="column"
                spacing={2}
                data-testid="joke-list"
              >
                {jokes.map((joke, index) => (
                  <Grid item key={joke.id}>
                    <Draggable draggableId={joke.id.toString()} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={
                            snapshot.isDropAnimating
                              ? {
                                  ...provided.draggableProps.style,
                                  transitionDuration: "0.001s",
                                }
                              : provided.draggableProps.style
                          }
                          data-testid="draggable-joke"
                        >
                          <JokeCard joke={joke} />
                        </div>
                      )}
                    </Draggable>
                  </Grid>
                ))}
              </Grid>
            </Paper>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default JokeList;
