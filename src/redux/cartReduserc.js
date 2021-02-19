const ADD_PRODUCT = "ADD_PRODUCT";
const TOTAL_PRICE = "TOTAL_PRICE";
const CHANGE_QUANTITY = "CHANGE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";
const DELETE_PRODUCT = "DELETE_PRODUCT";

const initialState = {
  cartProduct: [],
  totalPrice: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      let newProduct = {
        ...action.product,
        quantity: 1
      };

      return {
        ...state,
        cartProduct: [...state.cartProduct, newProduct]
      };

    case CHANGE_QUANTITY:
      return {
        ...state,
        cartProduct: state.cartProduct.map((p) => {
          if (p.id === action.id) {
            return { ...p, quantity: p.quantity + 1 };
          }
          return p;
        }),
        totalPrice: state.totalPrice + action.price
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cartProduct: state.cartProduct.map((p) => {
          if (p.id === action.id) {
            return { ...p, quantity: p.quantity - 1 };
          }
          return p;
        }),
        totalPrice: state.totalPrice - action.price
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        cartProduct: state.cartProduct.filter((p) => {
          return p.quantity > 0;
        })
      };

    case TOTAL_PRICE:
      return {
        ...state,
        totalPrice: state.totalPrice + action.totalPrice
      };

    default:
      return state;
  }
};

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT,
  product
});

export const changeQuantityInCart = (id, price) => ({
  type: CHANGE_QUANTITY,
  id,
  price
});
export const dekreaseQuantityInCart = (id, price) => ({
  type: DECREASE_QUANTITY,
  id,
  price
});

export const totalPrice = (totalPrice) => ({
  type: TOTAL_PRICE,
  totalPrice
});

export const deleteProduct = () => ({
  type: DELETE_PRODUCT
});

export const addProduct = (product, cartProducts, productPrice) => (
  dispatch
) => {
  if (cartProducts.length === 0) {
    dispatch(addProductToCart(product));
    dispatch(totalPrice(productPrice));
  } else if (
    cartProducts.every((p) => {
      return p.id !== product.id;
    })
  ) {
    dispatch(addProductToCart(product));
    dispatch(totalPrice(productPrice));
  } else {
    dispatch(changeQuantityInCart(product.id, product.price));
  }
};

export const changeAmount = (items, event) => {
  return (dispatch) => {
    items.map((i) => {
      if (i.id === event.target.id * 1 && event.target.name === "decrease") {
        dispatch(dekreaseQuantityInCart(i.id, i.price));
        if (i.quantity - 1 === 0) {
          dispatch(deleteProduct());
        }
      }
      if (i.id === event.target.id * 1 && event.target.name === "increase") {
        dispatch(changeQuantityInCart(i.id, i.price));
      }
      return 0;
    });
  };
};

export default cartReducer;
