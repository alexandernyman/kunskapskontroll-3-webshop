import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  user: {
    display: "grid",
    justifyContent: "center",
  },
  title:{
    textAlign: "center",
  },
  container: {
    display: "grid",
  }
  
}));
