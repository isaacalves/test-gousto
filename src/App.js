import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Router is not used but needs to be here to work?
import PropTypes from 'prop-types';

import Nav from 'components/Nav.js';
import Filter from 'components/Filter.js';
import ProductList from 'components/ProductList.js';

// import { getCategories, getProducts } from './api/gousto.js';
import Products from 'api/__mocks__/products.json';
import Categories from 'api/__mocks__/categories.json';


class App extends Component {

  state = {
    categories: undefined,
    products: undefined,
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
          categories: res[0].data.map(({id, title}) => { return { id, title }}),
          products: res[1].data.map(({id, categories, description, title}) => {
            return { id, categories, description, title }
          })
        })
      })
  }
      
  render() {
    let { categories, products, filterString } = this.state;
    let match = this.context.router.route.location.pathname.match(/\/([^\/]+)\/?$/);    
    let currentCategoryId = match ? match[1] : undefined;

    return (
      <div className="App">
        <section className="container">
          {categories &&
          <Nav items={categories} currentItemId={currentCategoryId} />}
          <Route
            exact
            path="/"
            render={() => <div>Please pick a category above</div>}
          />
          <Route
            path="/categories/:id"
            render={({match})=>
              <>
                <Filter
                  onTextChange={text => this.setState({filterString: text})}
                />
                {products &&
                <ProductList
                  items={products
                    .filter(product => product.categories.some(cat => cat.id === match.params.id))
                    .filter(item => item.title.toLowerCase().includes(filterString.toLowerCase()))
                  }
                  match={match}// matched url (with current category)
                />
                }
              </>
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
