import { connect } from "react-redux";
import { setFilter } from "../../actions/cats";

import CatSearch from '../../components/cat-search';


export default connect(
  null,
  {onSearchChanged: setFilter}
)(CatSearch);
