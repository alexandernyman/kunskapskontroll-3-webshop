import { Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { UsersState } from "../../atoms";
import { useAxiosGet } from "../Hooks/Requests";
import ProductCard from "../ProductCard/ProductCard";
import useStyles from "./styles";

const AdminUserCarts = () => {
  const classes = useStyles();

  const [users, setUsers] = useRecoilState(UsersState);

  const url = `https://k4backend.osuka.dev/products?limit=12`;
  let products = useAxiosGet(url);

  let content = null;

  if (products.data) {
    content = products.data.map((product) => (
      <Grid item xs={6}>
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      </Grid>
    ));
  }

  useEffect(() => {
    getData();
  });

  async function getData() {
    await axios.get("https://k4backend.osuka.dev/users").then((response) => {
      setUsers(response.data);
    });
  }

  return (
    <div>
      <div className={classes.toolbar} />
      <h2 className={classes.title}>HÄR LISTAS ALLA ANVÄNDARE</h2>
      <Grid container classes={classes.container}>
        <Grid item xs={6}>
          {users &&
            users.map(({ username }) => (
              <div className={classes.user}>
                <h4>Name: {username}</h4>
              </div>
            ))}
        </Grid>
        <Grid item xs={6}>
          {content}
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminUserCarts;
