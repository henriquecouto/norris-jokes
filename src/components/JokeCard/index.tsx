import { FC } from "react";
import { Grid, Paper, Typography, Chip } from "@material-ui/core";
import Joke from "../../entities/Joke";
import useJokeCardStyles from "./JokeCard.styles";

interface JokeCardProps {
  joke: Joke;
  children?: null;
}

const JokeCard: FC<JokeCardProps> = ({ joke }) => {
  const classes = useJokeCardStyles();
  return (
    <Paper data-testid="joke-card-paper" className={classes.root}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography className={classes.title} variant="h6">
            {joke.joke}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
            {joke.categories.map((category) => (
              <Grid item key={category}>
                <Chip label={category} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default JokeCard;
