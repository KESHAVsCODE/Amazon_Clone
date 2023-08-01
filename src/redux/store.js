import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import signinReducer from "../redux/signin/signinReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; // Import composeWithDevTools

const joinedReducer = combineReducers({
  signinDetails: signinReducer,
});

export const store = createStore(
  joinedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
