import { connect } from "react-redux";
import { addCat } from "../../actions/cats";

import CatAdd from '../../components/cat-add';


export default connect(
  null,
  {onAdd: addCat}
)(CatAdd);