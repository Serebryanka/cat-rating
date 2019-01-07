import { combineReducers } from "redux";
//import visibilityFilter from "./visibilityFilter";
import cats from "./cats";
import comments from "./comments";
import searchFilter from "./searchFilter";
import sorting from "./sorting";

export default combineReducers({
  cats,
  comments,
  searchFilter,
  sorting,
  //visibilityFilter
});
