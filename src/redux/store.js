import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import registrationReducer from "./registration/registrationReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; // Import composeWithDevTools

const joinedReducer = combineReducers({
  registerInfo: registrationReducer,
});

export const store = createStore(
  joinedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
