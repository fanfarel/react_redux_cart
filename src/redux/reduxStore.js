import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./cartReduserc";
import { loadState, saveState } from "./localStorage";
import productReducer from "./productReducer";

const persistedState = loadState();

let reducers = combineReducers({
  productReducer: productReducer,
  cartReducer: cartReducer
});

const store = createStore(reducers, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
