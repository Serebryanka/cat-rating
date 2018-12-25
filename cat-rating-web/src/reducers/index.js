import { combineReducers } from "redux";
//import visibilityFilter from "./visibilityFilter";
import cats from "./cats";
import searchFilter from "./searchFilter";
import sorting from "./sorting";

export default combineReducers({
  cats,
  searchFilter,
  sorting,
  //visibilityFilter
});
