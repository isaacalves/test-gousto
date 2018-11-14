import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Router is not used but needs to be here to work?
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { connect } from 'react-redux';

import Nav from 'components/Nav.js';
import ProductsPage from 'components/ProductsPage.js';

// import { getCategories, getProducts } from './api/gousto.js';
import Products from 'api/__mocks__/products.json';
import Categories from 'api/__mocks__/categories.json';

import { addCategories, addProducts } from 'actions';

class App extends Component {
  state = {
    categories: [],
    products: []
  };

  componentDidMount() {
    Promise.all([
      // getCategories().then(res => res.json()),
      // getProducts().then(res => res.json())
      Categories,
      Products
    ]).then(res => {
      // console.log('res[0].data: ', res[0].data);

      // this.setState({
      //   categories: res[0].data.map(({ id, title }) => {
      //     return { slug: slugify(title, { lower: true }), id, title };
      //   }),
      //   products: res[1].data.map(({ id, categories, description, title }) => {
      //     return { id, categories, description, title };
      //   })
      // });

      this.props.addCategories(
        res[0].data.map(({ id, title }) => {
          return { slug: slugify(title, { lower: true }), id, title };
        })
      );
      this.props.addProducts(
        res[1].data.map(({ id, categories, description, title }) => {
          return { id, categories, description, title };
        })
      );
    });
  }

  render() {
    let { categories, products } = this.props;
    let match = this.context.router.route.location.pathname.match(
      /\/([^\/]+)\/?$/
    );
    let currentCategorySlug = match ? match[1] : undefined;

    return (
      <div className="App">
        <section className="container">
          {categories && (
            <Nav items={categories} currentItemSlug={currentCategorySlug} />
          )}
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
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCategories: arr => {
      dispatch(addCategories(arr));
    },
    addProducts: arr => {
      dispatch(addProducts(arr));
    }
  };
};

App.contextTypes = {
  router: PropTypes.object
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
