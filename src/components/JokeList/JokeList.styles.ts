import { makeStyles, Theme } from "@material-ui/core/styles";

const useJokeListStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "inherit",
    overflowY: "scroll",
    boxShadow: theme.shadows[1],
    position: "fixed",
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
