import { connect } from "react-redux";
import styles from "./Product.module.css";
import { addProductToCart, totalPrice } from "../redux/cartReduserc";

const Product = (props) => {
  const add = (value) => {
    const product = props.products[value.target.id];
    props.addProduct(
      product.id,
      product.imgUrl,
      product.nameOfProduct,
      product.price
    );
    props.addPrice(product.price);
  };

  return props.products.map((products) => (
    <div key={products.id} className={styles.product}>
      <form>
        <img src={products.imgUrl} alt="sd" />
        <h2 className={styles.name}>{products.nameOfProduct}</h2>
        <div>{products.discribeOfProduct}</div>
        <div>Price: {products.price}</div>
        <button type="button" id={products.id} onClick={add}>
          Add to card
        </button>
      </form>
    </div>
  ));
};

let mapStateToProps = (state) => {
  return {
    products: state.productReducer.productData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (id, imgUrl, nameOfProduct, price, quantity) => {
      dispatch(addProductToCart(id, imgUrl, nameOfProduct, price, quantity));
    },
    addPrice: (price) => {
      dispatch(totalPrice(price));
    }
  };
};

let ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product);
export default ProductContainer;
