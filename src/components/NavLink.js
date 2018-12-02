import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class NavLink extends PureComponent {
  render() {
    let { label, to, pathname } = this.props;

    return (
      <div className={to === pathname ? 'current' : ''}>
        <Link to={`${to}`}>{label}</Link>
      </div>
    );
  }
}

NavLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    pathname: state.router.location.pathname
  };
};

export default connect(mapStateToProps)(NavLink);
