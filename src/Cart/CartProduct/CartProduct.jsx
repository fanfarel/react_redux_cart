import { connect } from "react-redux";
import styles from "./CartProduct.module.css";
import { changeAmount } from "../../redux/cartReduserc";

const CartProduct = (props) => {
  const chengeQuantity = (event) => {
    props.changeAmount(props.cartProduct, event);
  };

  return (
    <div className={styles.container}>
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
              -
            </button>
            <p>{product.quantity}</p>
            <button
              className={styles.pluBtn}
              id={product.id}
              type="button"
              name="increase"
              onClick={chengeQuantity}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className={styles.totalPrice}>Total price: {props.price} $</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartProduct: state.cartReducer.cartProduct,
    price: state.cartReducer.totalPrice
  };
};

let ContainerCartProduct = connect(mapStateToProps, { changeAmount })(
  CartProduct
);

export default ContainerCartProduct;
