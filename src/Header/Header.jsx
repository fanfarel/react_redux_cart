import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Header = (props) => {
  const [selected, setSelected] = React.useState(false);

  const toggleButtonLogic = (props) => {
    return props.totalPrice === 0 ? (
      <ShoppingCartIcon></ShoppingCartIcon>
    ) : (
      props.totalPrice + " $"
    );
  };

  return (
    <header className={styles.header}>
      <div className={styles.btn}>
        <ToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          {selected ? (
            <NavLink className={styles.link} to={"/cart"}>
              <span>{toggleButtonLogic(props)}</span>
            </NavLink>
          ) : (
            <NavLink className={styles.link} to={"/product"}>
              <span>{toggleButtonLogic(props)}</span>
            </NavLink>
          )}
        </ToggleButton>
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
