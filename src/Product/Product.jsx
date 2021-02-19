import { connect } from "react-redux";
import styles from "./Product.module.css";
import { addProduct } from "../redux/cartReduserc";
import ToggleButton from "@material-ui/lab/ToggleButton";

const Product = (props) => {
  const add = (value) => {
    const product = props.products[value.target.id];
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

        <ToggleButton>
          <a type="button" id={products.id} onClick={add}>
            Add to card
          </a>
        </ToggleButton>
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
