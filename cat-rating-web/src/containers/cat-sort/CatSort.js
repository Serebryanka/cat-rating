import { connect } from "react-redux";
import { setSorting } from "../../actions/cats";

import CatSort from '../../components/cat-sort';


export default connect(
  null,
  {onSortChange: setSorting}
)(CatSort);
