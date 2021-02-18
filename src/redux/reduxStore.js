import { combineReducers, createStore } from "redux";
import cartReducer from "./cartReduserc";
import { loadState, saveState } from "./localStorage";
import productReducer from "./productReducer";

const persistedState = loadState();

let reducers = combineReducers({
  productReducer: productReducer,
  cartReducer: cartReducer
});

const store = createStore(reducers, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

window.store = store;

export default store;
