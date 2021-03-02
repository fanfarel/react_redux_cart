import { connect } from "react-redux";
import styles from "./Product.module.css";
import { addProduct } from "../redux/cartReduserc";
import Button from "@material-ui/core/Button";

const Product = (props) => {
  const add = (value) => {
    const product = props.products[value.id];
    const cartProduct = props.cartProdtucts;
    props.addProduct(product, cartProduct, product.price);
  };

  return props.products.map((products) => (
    <div key={products.id} className={styles.product}>
      <section>
        <img src={products.imgUrl} alt="sd" />
        <h2 className={styles.name}>{products.nameOfProduct}</h2>
        <div>{products.discribeOfProduct}</div>
        <div>Price: {products.price} $</div>

        <Button
          variant="contained"
          type="button"
          id={products.id}
          onClick={(e) => {
            add(e.currentTarget);
          }}
        >
          Add to card
        </Button>
      </section>
    </div>
  ));
};

let mapStateToProps = (state) => {
  return {
    products: state.productReducer.productData,
    cartProdtucts: state.cartReducer.cartProduct
  };
};

let ProductContainer = connect(mapStateToProps, { addProduct })(Product);
export default ProductContainer;
