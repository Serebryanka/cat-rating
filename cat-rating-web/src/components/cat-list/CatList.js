import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import CatItem from '../cat-item';

const CatList = ({cats, onDelete, onLikeChanged}) => (
  <List dense>
    {cats.map(cat => (
      <CatItem
        key={cat.id}
        cat={cat}
        onDelete={onDelete}
        onLikeChanged={onLikeChanged}
      />
    ))}
  </List>
);

CatList.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		like: PropTypes.bool.isRequired,
	})).isRequired,
	onDelete: PropTypes.func.isRequired,
	onLikeChanged: PropTypes.func.isRequired,
}

export default CatList;
