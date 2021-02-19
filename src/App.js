import ProductContainer from "./Product/Product";
import "./styles.css";
import HeaderContainer from "./Header/Header";
import { Route } from "react-router-dom";
import ContainerCartProduct from "./Cart/CartProduct/CartProduct";
import OrderFormContainer from "./Cart/OrderForm/OrderForm";

export default function App() {
  return (
    <div className="App">
      <HeaderContainer className="header" />
      <div className="content">
        <div className="products">
          <Route
            className="product"
            path="/product"
            render={() => <ProductContainer />}
          />
        </div>
        <Route
          className="cart"
          path="/cart"
          component={() => {
            return (
              <div className="cart">
                <ContainerCartProduct />
                <OrderFormContainer />
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
