import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import CatItem from '../cat-item';

const CatList = ({cats, loading, loadErr, onDelete, onLikeChanged}) => {
  if (loading) {
    return (
      <div>
        <CircularProgress color="secondary" />
      </div>
    );
  }
  if (loadErr) {
    return (
      <div>
        <img alt="Ooops!" src="https://rlv.zcache.com/oops_tiger_rabbit_funny_t_shirt-ra185828f09034430b082f6d9e44b28b3_k2gl5_307.jpg?rvtype=content" />
      </div>
    );
  }
  return (
    <List dense>
      {cats.map(cat => (
        <CatItem
          key={cat.id}
          cat={cat}
          removing={cat.removing}
          updating={cat.updating}
          onDelete={onDelete}
          onLikeChanged={onLikeChanged}
        />
      ))}
    </List>
  );
};

CatList.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		like: PropTypes.bool.isRequired,
    removing: PropTypes.bool,
    updating: PropTypes.bool,
	})).isRequired,
  loading: PropTypes.bool,
  loadErr: PropTypes.object,
	onDelete: PropTypes.func.isRequired,
	onLikeChanged: PropTypes.func.isRequired,
}

CatList.defaultProps = {
  loading: false,
  loadErr: null,
}

export default CatList;
