import { connect } from "react-redux";
import styles from "./CartProduct.module.css";
import {
  addProductToCart,
  addQuantityInCart,
  totalPrice,
  deleteProduct
} from "../../redux/cartReduserc";

const CartProduct = (props) => {
  // let [price, setPrice] = useState(0);

  const chengeQuantity = (event) => {
    props.cartProduct.map((i, index) => {
      if (i.id === event.target.id * 1 && event.target.name === "decrease") {
        props.addQuantity(i.id, i.quantity - 1, i.price * -1);
        if (i.quantity - 1 === 0) {
          console.log(i.price);
          props.deleteProduct();
        }
      }
      if (i.id === event.target.id * 1 && event.target.name === "increase") {
        props.addQuantity(i.id, i.quantity + 1, i.price);
      }
      return 0;
    });
  };

  return (
    <div>
      {props.cartProduct.map((product) => (
        <div key={product.id} className={styles.product}>
          <img src={product.imgUrl} alt="сап /б, я тян, пруфов не будет(" />
          <div className={styles.text}>
            <h2 className={styles.name}>{product.nameOfProduct}</h2>
            <p>Price: {product.price}</p>
          </div>
          <div className={styles.quantity}>
            <button
              className={styles.minuBtn}
              id={product.id}
              type="button"
              name="decrease"
              onClick={chengeQuantity}
            >
              {/* <img src="plus.svg" alt="" /> */}-
            </button>
            <p>{product.quantity}</p>
            {/* <input type="text" name="name" value="1" /> */}
            <button
              className={styles.pluBtn}
              id={product.id}
              type="button"
              name="increase"
              onClick={chengeQuantity}
            >
              {/* <img src="minus.svg" alt="" /> */}+
            </button>
          </div>
          {/* <p>{props.price}</p> */}
        </div>
      ))}
      <div>Total price: {props.price}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartProduct: state.cartReducer.cartProduct,
    price: state.cartReducer.totalPrice
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPrice: (price) => {
      dispatch(totalPrice(price));
    },
    addQuantity: (id, quantity, price) => {
      dispatch(addQuantityInCart(id, quantity, price));
    },
    addProduct: (id, imgUrl, nameOfProduct, price, quantity) => {
      dispatch(addProductToCart(id, imgUrl, nameOfProduct, price, quantity));
    },
    deleteProduct: () => {
      dispatch(deleteProduct());
    }
  };
};

let ContainerCartProduct = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartProduct);

export default ContainerCartProduct;
