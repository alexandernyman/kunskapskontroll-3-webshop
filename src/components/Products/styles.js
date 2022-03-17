import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.default",
    padding: theme.spacing(3),
    justifyContent: "space-between",
  },
  root: {
    flexGrow: 1,
  },
  titleText: {
    margin: "20px 0px",
  }
}));