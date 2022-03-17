import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root:{
      justifyContent: "center",
    },
    image: {
        width: "300px",
        height: "300px",
        backgroundSize: "cover",
    },
    gridContainer: {
      backgroundColor: theme.palette.background.default,
      border: "thin solid black",
      display: "grid",
      alignItems: "center",
      padding: theme.spacing(3),
      justifyContent: "space-between",
    },
    button: {
      padding: "10px",
      margin: "10px 0px",
    }

}));