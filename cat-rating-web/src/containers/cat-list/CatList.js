import { connect } from "react-redux";
import { removeCat, toggleLike } from "../../actions/cats";

import CatList from '../../components/cat-list';

const mapStateToProps = state => ({
  cats: state.cats.items,
});

export default connect(
  mapStateToProps,
  {
    onDelete: removeCat,
    onLikeChanged: toggleLike,
}
)(CatList);
