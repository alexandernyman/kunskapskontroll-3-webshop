import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  container: {
  },
  root: {
    textAlign: "center",
  },
  login: {
    backgroundColor: "coral",
    padding: "50px",
  },
  reg: {
    backgroundColor: "lightGray",
    padding: "50px",
  },
  formContainer: {
    display: "grid",
    width: "100%",
    justifyContent: "center",
    margin: "20px 0 20px 0",
  },
  input: {
    padding: "10px",
  },
  title: {
    display: "flex",
    justifyContent: "center",
  }
}));
