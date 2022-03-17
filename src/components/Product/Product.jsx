import React from "react";
import { useParams } from "react-router-dom";
import { useAxiosGet } from "../Hooks/Requests";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import { useRecoilState } from "recoil";

import { CartState } from "../../atoms";

function Product() {
  const classes = useStyles();
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;

  let product = useAxiosGet(url);

  let content = null;

  const [cart, setCart] = useRecoilState(CartState);

  const addToCart = (product) => {
    setCart([...cart, {...product}]);
  };


  if (product.data) {
    content = (
      <div>
        <div className={classes.gridContainer}>
          <div className={classes.toolbar} />
          <div
            style={{ backgroundImage: `url("${product.data.image}")` }}
            className={classes.image}
          />
          <h1>{product.data.title}</h1>
          <div>$ {product.data.price}</div>
          <div>{product.data.description}</div>
          <button
            onClick={() => addToCart(product)}
            className={classes.button}
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.content}>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={8} md={8} lg={5}>
          {content}
        </Grid>
      </Grid>
    </div>
  );
}

export default Product;
