import { CardMedia, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { useRecoilState} from "recoil";
import { CartState } from "../../atoms";

const ShoppingCart = () => {
  const classes = useStyles();
  const [cart, setCart] = useRecoilState(CartState);

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <div className={classes.root}>
      <CardMedia className={classes.media}>
        <Typography variant="h3">Your Cart</Typography>
        <div>
          {cart.map((product, idx) => (
            <div className={classes.content} key={idx}>
              <ul>
                <li className={classes.list}>
                  <h3>Product Name: {product.data.title}</h3>
                  <h3>Price: ${product.data.price} </h3>
                  <button className={classes.button} onClick={() => removeFromCart(product)}>
                    Remove
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </CardMedia>
    </div>
  );
};

export default ShoppingCart;
