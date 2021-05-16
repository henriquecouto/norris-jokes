import { makeStyles, Theme } from "@material-ui/core/styles";

const useJokeListStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    boxShadow: theme.shadows[1],
  },
  paper: {
    padding: theme.spacing(2),
    background: theme.palette.background.default,
  },
  disableAnimation: {
    transitionDuration: "0.001s",
  },
}));

export default useJokeListStyles;
