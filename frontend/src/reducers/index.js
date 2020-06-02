import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import customerlistReducer from "./customerlistReducer";



export default combineReducers({
  customerlist: customerlistReducer,
  auth: authReducer,
errors: errorReducer

   
});