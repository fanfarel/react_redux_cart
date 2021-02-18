const ADD_PRODUCT = "ADD_PRODUCT";
const TOTAL_PRICE = "TOTAL_PRICE";
const ADD_QUANTITY = "ADD_QUANTITY";
const DELETE_PRODUCT = "DELETE_PRODUCT";

const initialState = {
  cartProduct: [],
  totalPrice: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      let newProduct = {
        id: action.id,
        imgUrl: action.imgUrl,
        nameOfProduct: action.nameOfProduct,
        price: action.price,
        quantity: 1
      };

      return {
        ...state,
        cartProduct: [...state.cartProduct, newProduct]
      };

    case ADD_QUANTITY:
      return {
        ...state,
        cartProduct: state.cartProduct.map((p) => {
          if (p.id === action.id) {
            return { ...p, quantity: action.quantity };
          }
          return p;
        }),
        totalPrice: state.totalPrice + action.price
      };

    case DELETE_PRODUCT:
      console.info(action);
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

export const addProductToCart = (
  id,
  imgUrl,
  nameOfProduct,
  price,
  quantity
) => ({
  type: ADD_PRODUCT,
  id,
  imgUrl,
  nameOfProduct,
  price,
  quantity
});

export const addQuantityInCart = (id, quantity, price) => ({
  type: ADD_QUANTITY,
  id,
  quantity,
  price
});

export const totalPrice = (totalPrice) => ({
  type: TOTAL_PRICE,
  totalPrice
});

export const deleteProduct = () => ({
  type: DELETE_PRODUCT
});

export default cartReducer;
