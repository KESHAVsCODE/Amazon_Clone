import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import signinReducer from "../redux/signin/signinReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; // Import composeWithDevTools
import cartReducer from "./cart/cartReducer";
import addressReducer from "./address/addressReducer";
import orderReducer from "./order/orderReducer";
const joinedReducer = combineReducers({
  signinDetails: signinReducer,
  cartDetails: cartReducer,
  addressDetails: addressReducer,
  orderDetails: orderReducer,
});

export const store = createStore(
  joinedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
