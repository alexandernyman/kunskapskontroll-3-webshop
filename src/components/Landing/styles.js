import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    maxWidth: "50%",
  },
  media: {
    height: 0,
    paddingTop: "55%",
    backgroundSize: "cover",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
