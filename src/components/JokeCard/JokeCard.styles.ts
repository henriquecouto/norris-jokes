import { makeStyles, Theme } from "@material-ui/core/styles";

const useJokeCardStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4),
    minWidth: 250,
  },
  title: {
    color: theme.palette.primary.main,
  },
}));

export default useJokeCardStyles;
