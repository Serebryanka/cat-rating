
import { connect } from "react-redux";

import CatView from '../../components/cat-view';

const mapStateToProps = (state, ownProps) => {
  const cat = state.cats.items.find(item => item.id === ownProps.catID);
  return {
    cat,
  };
};

export default connect(
  mapStateToProps,
  null
)(CatView);
