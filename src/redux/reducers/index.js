import { combineReducers } from "redux";

import artsReducer from "./artsReducer";

export default combineReducers({
  arts: artsReducer,
});
