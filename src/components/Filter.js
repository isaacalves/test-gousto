import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Filter = ({ filterString, updateTextFilter }) => (
  <div className="Filter">
    <h2 className="Filter__title">Filter</h2>
    <input
      type="text"
      onChange={e => updateTextFilter(e.target.value)}
      value={filterString}
    />
  </div>
);

Filter.propTypes = {
  filterString: PropTypes.string.isRequired,
  updateTextFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    filterString: state.filterString
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTextFilter: value => {
      dispatch({
        type: 'ON_FILTER_TEXT_UPDATE',
        value: value
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
