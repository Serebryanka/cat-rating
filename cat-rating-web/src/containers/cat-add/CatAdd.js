import { connect } from "react-redux";
import { addCat } from "../../actions/cats";

import CatAdd from '../../components/cat-add';


const mapStateToProps = state => {
  return {
    appending: state.cats.appending,
    appendErr: state.cats.appendErr,
  };
};

export default connect(
  mapStateToProps,
  dispatch => ({
    onAdd: (item) => {
      dispatch(addCat(item))
    },
  })
)(CatAdd);
