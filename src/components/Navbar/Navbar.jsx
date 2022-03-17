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
  const classes = useStyles();
  return (
    <div>
      <AppBar psoition="fixed" className={classes.AppBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="K3" height="25px" className={classes.image} />
            K3 BY ALEXANDER NYMAN
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
          <div className={classes.button}>
            {/* <IconButton aria-label="Show items" color="inherit" >
            <Link href="/cart" color="inherit">
              <Badge color="secondary">
                <ShoppingCart />
              </Badge>
              </Link>
            </IconButton> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
