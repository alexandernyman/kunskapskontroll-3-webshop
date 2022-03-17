import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useAxiosGet } from "../Hooks/Requests";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";


function Products() {
  const classes = useStyles();

  const url = `https://fakestoreapi.com/products/?limit=12`;
  let products = useAxiosGet(url);

  let content = null;

  if (products.data) {
    content = products.data.map((product) => (
      <Grid item xs={4}>
      <div key={product.id}>
        <ProductCard product={product}/>
      </div>
      </Grid>
    ));
  }


  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />
      <div>
      <Typography variant='h3' className={classes.titleText}>ALL ITEMS</Typography>
      <Grid container spacing={4} rowspacing={1} columnspacing={{ xs: 1, sm: 2, md: 3 }}>
          {content}
      </Grid>
      </div>
    </div>
  );
}

export default Products;

