import { combineReducers } from "redux";
//import visibilityFilter from "./visibilityFilter";
import cat from "./cat";
import cats from "./cats";
import comments from "./comments";
import searchFilter from "./searchFilter";
import sorting from "./sorting";

export default combineReducers({
  cat,
  cats,
  comments,
  searchFilter,
  sorting,
  //visibilityFilter
});
