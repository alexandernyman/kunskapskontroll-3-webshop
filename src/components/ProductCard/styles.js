import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        maxWidth: "100%",
        fontFamily: "Arial",
        display: "grid",
        fontSize: "15px",
    },
    body: {
        width: "33%",
    },
    view: {
        fontSize: "25px",
        textDecoration: "none",
        color: "blue"

    },
    titleName: {
        color: "inherit",
        textDecoration: "none",
    },
    image: {
        width: "300px",
        height: "200px",
        backgroundSize: "cover",
    }
}));