import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateTextFilter } from 'actions';

const Filter = ({ searchFilter, updateTextFilter }) => (
  <div className="Filter">
    <h2 className="Filter__title">Filter</h2>
    <input
      type="text"
      onChange={e => updateTextFilter(e.target.value)}
      value={searchFilter}
    />
  </div>
);

Filter.propTypes = {
  searchFilter: PropTypes.string.isRequired,
  updateTextFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchFilter: state.main.searchFilter
});

const mapDispatchToProps = dispatch => ({
  updateTextFilter: value => {
    dispatch(updateTextFilter(value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
