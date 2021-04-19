import { combineReducers } from "redux";

import artsReducer from "./artsReducer";
import cartsReducer from "./cartsReducer";
import categoriesReducer from "./categoriesReducer";
import usersReducer from "./usersReducer";
import transactionsReducer from "./transactionsReducer";

export default combineReducers({
  arts: artsReducer,
  carts: cartsReducer,
  categories: categoriesReducer,
  users: usersReducer,
  transactions: transactionsReducer,
});
