import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { connect } from 'react-redux';

import Nav from 'components/Nav.js';
import ProductsPage from 'components/ProductsPage.js';
import { addCategories, addProducts } from 'actions';
// import { getCategories, getProducts } from './api/gousto.js';
import Products from 'api/__mocks__/products.json';
import Categories from 'api/__mocks__/categories.json';

class App extends Component {
  componentDidMount() {
    Promise.all([
      // getCategories().then(res => res.json()),
      // getProducts().then(res => res.json())
      Categories,
      Products
    ]).then(([categories, products]) => {
      this.props.addCategories(
        categories.data.map(({ id, title }) => ({
          slug: slugify(title, { lower: true }),
          id,
          title
        }))
      );
      this.props.addProducts(
        products.data.map(({ id, categories, description, title }) => ({
          id,
          categories,
          description,
          title
        }))
      );
    });
  }

  render() {
    let { categories, products } = this.props;

    return (
      <ConnectedRouter history={this.props.history}>
        <div className="App">
          <section className="container">
            {categories && <Nav items={categories} />}
            <Route
              exact
              path="/"
              render={() => <div>Please pick a category above</div>}
            />
            <Route
              path="/:slug"
              render={({ match }) => (
                <ProductsPage
                  products={products}
                  categories={categories}
                  matchedSlug={match.params.slug}
                />
              )}
            />
          </section>
        </div>
      </ConnectedRouter>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  categories: state.main.categories,
  products: state.main.products
});

const mapDispatchToProps = dispatch => ({
  addCategories: arr => {
    dispatch(addCategories(arr));
  },
  addProducts: arr => {
    dispatch(addProducts(arr));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
