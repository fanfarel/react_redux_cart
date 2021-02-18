import ProductContainer from "./Product/Product";
import "./styles.css";
import HeaderContainer from "./Header/Header";
import { Route } from "react-router-dom";
import ContainerCartProduct from "./Cart/CartProduct/CartProduct";
import OrderFormContainer from "./Cart/OrderForm/OrderForm";

export default function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="products">
        <Route path="/product" render={() => <ProductContainer />} />
      </div>
      <Route
        path="/cart"
        component={() => {
          return (
            <div>
              <ContainerCartProduct />
              <OrderFormContainer />
            </div>
          );
        }}
      />
    </div>
  );
}
