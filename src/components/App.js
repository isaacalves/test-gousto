import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Router is not used but needs to be here to work?
import PropTypes from 'prop-types';
import slugify from 'slugify';

import Nav from 'components/Nav.js';
import ProductPage from 'components/ProductPage.js';

// import { getCategories, getProducts } from './api/gousto.js';
import Products from 'api/__mocks__/products.json';
import Categories from 'api/__mocks__/categories.json';


class App extends Component {

  state = {
    categories: [],
    products: [],
    filterString: ''
  }

  componentDidMount() {
    // if can't connect to API, use mockies
    Promise.all([
      // getCategories().then(res => res.json()),
      // getProducts().then(res => res.json())
      Categories,
      Products
    ])
      .then((res) => {
        this.setState({
          categories: res[0].data.map(({id, title}) => {
            return { slug: slugify(title, { lower: true }), id, title }
          }),
          products: res[1].data.map(({id, categories, description, title}) => {
            return { id, categories, description, title }
          })
        })
      })
  }
  
  render() {
    let { categories, products, filterString } = this.state;
    
    let match = this.context.router.route.location.pathname.match(/\/([^\/]+)\/?$/); 
    let currentCategorySlug = match ? match[1] : undefined;

    return (
      <div className="App">
        <section className="container">
          {categories &&
          <Nav items={categories} currentItemSlug={currentCategorySlug} />}
          <Route
            exact
            path="/"
            render={() => <div>Please pick a category above</div>}
          />
          <Route
            path="/:slug"
            render={({match})=> 
              <ProductPage
                products={products}
                categories={categories}
                matchedSlug={match.params.slug}
                filterString={filterString}
                onFilterTextChange={text => this.setState({filterString: text})} // use redux
              />
            }
          />
        </section>
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object
};

export default App;
