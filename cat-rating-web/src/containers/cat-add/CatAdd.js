import { connect } from "react-redux";
import { addCat } from "../../actions/cats";

import CatAdd from '../../components/cat-add';


export default connect(
  null,
  dispatch => ({
    onAdd: (item) => {
      dispatch(addCat(item))
    },
  })
)(CatAdd);
