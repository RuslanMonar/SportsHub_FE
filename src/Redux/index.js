import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { SwitchViewReducer } from "./SwitchViewReducer";

export default combineReducers({
  AuthReducer, SwitchViewReducer
});
