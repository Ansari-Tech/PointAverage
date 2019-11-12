import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

import login from "./login";
export default combineReducers({
  firebase: firebaseReducer,
  login
});
