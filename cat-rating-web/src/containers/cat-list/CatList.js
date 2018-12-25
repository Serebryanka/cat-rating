import { connect } from "react-redux";
import { removeCat, toggleLike } from "../../actions/cats";
import { getFilteredAndSortedCats } from "../../selectors/cats";

import CatList from '../../components/cat-list';

const mapStateToProps = state => {
  const { searchFilter, sorting } = state;
  const cats = getFilteredAndSortedCats(state, sorting.sortField, searchFilter.value);
  return { cats };
};

export default connect(
  mapStateToProps,
  {
    onDelete: removeCat,
    onLikeChanged: toggleLike,
  }
)(CatList);
