import React from "react";
import { AppBar, Toolbar, MenuItem, Typography, Link } from "@material-ui/core";

import logo from "../../assets/logo.png";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { CartState } from "../../atoms";

const Navbar = () => {
  const [cart] = useRecoilState(CartState);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/cart`;
    navigate(path);
  };
  const routeChange2 = () => {
    let path2 = `/products`;
    navigate(path2);
  };
  const routeChange3 = () => {
    let path3 = `/`;
    navigate(path3);
  };
  const routeChange4 = () => {
    let path4 = `/login`;
    navigate(path4);
  };
  const routeChange5 = () => {
    let path5 = `/admin`;
    navigate(path5);
  };
  const classes = useStyles();

  return (
    <div>
      <AppBar psoition="fixed" className={classes.AppBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="K3" height="25px" className={classes.image} />
            K3 / K4 BY ALEXANDER NYMAN
          </Typography>
          <MenuItem divider={true}>
            <Typography variant="h6">
              <Link
                onClick={routeChange3}
                className={classes.link}
                color="inherit"
              >
                Home
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem divider={true}>
            <Typography variant="h6">
              <Link
                onClick={routeChange2}
                className={classes.link}
                color="inherit"
              >
                Products
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem divider={true}>
            <Typography variant="h6">
              <Link
                onClick={routeChange}
                className={classes.link}
                color="inherit"
              >
                Cart ({cart.length})
              </Link>
            </Typography>
          </MenuItem>
          <div className={classes.grow} />

          <MenuItem divider={true}>
            <Typography variant="h6">
              <Link
                onClick={routeChange4}
                className={classes.link}
                color="inherit"
              >
                Login
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="h6">
              <Link
                onClick={routeChange5}
                className={classes.link}
                color="inherit"
              >
                Admin
              </Link>
            </Typography>
          </MenuItem>

          <div className={classes.button}></div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
