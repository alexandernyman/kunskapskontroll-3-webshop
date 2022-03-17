import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    padding: "40px",
  },
  media: {
    height: 0,
    paddingTop: "100px",
    
    backgroundColor: "Black",
  },
  content: {
    width: "33%",

    backgroundColor: theme.palette.background.default,
    
  },
  list:{
    listStyle: "none",
  },
  button: {
    padding: "10px 25px",
  }
}));
