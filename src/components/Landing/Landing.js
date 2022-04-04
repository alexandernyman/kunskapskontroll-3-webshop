import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Landing = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
      <div className={classes.toolbar} />
        <CardMedia
          className={classes.media}
          image={"https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h6">Welcome to K3 / K4</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Landing;
