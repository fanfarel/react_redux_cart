import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img
        alt="www"
        className={styles.logo}
        src="https://logofirmy.net/wp-content/uploads/2020/04/Huawei-Logo-2018%E2%80%93.....jpg"
      ></img>

      <div className={styles.login}>
        <span>{props.totalPrice} </span>
        <NavLink to={"/cart"}>
          <button>Go to cart</button>
        </NavLink>
        <NavLink to={"/product"}>
          <button>Go to product</button>
        </NavLink>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    totalPrice: state.cartReducer.totalPrice
  };
};
let HeaderContainer = connect(mapStateToProps, null)(Header);
export default HeaderContainer;
