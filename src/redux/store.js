import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import signinReducer from "../redux/signin/signinReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; // Import composeWithDevTools
import cartReducer from "./cart/cartReducer";
import addressReducer from "./address/addressReducer";
const joinedReducer = combineReducers({
  signinDetails: signinReducer,
  cartDetails: cartReducer,
  addressDetails: addressReducer,
});

export const store = createStore(
  joinedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
