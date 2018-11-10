import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Router is not used but needs to be here to work?
import PropTypes from 'prop-types';
import slugify from 'slugify';

import Nav from 'components/Nav.js';
import Filter from 'components/Filter.js';
import ProductList from 'components/ProductList.js';

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
    console.log('render')
    let { categories, products, filterString } = this.state;
    let match = this.context.router.route.location.pathname.match(/\/([^\/]+)\/?$/);    
    let currentCategorySlug = match ? match[1] : undefined;
    
    return (
      <div className="App">
        <section className="container">
          {categories &&
          <Nav items={categories} currentItem={currentCategorySlug} />}
          <Route
            exact
            path="/"
            render={() => <div>Please pick a category above</div>}
          />
          <Route
            path="/categories/:slug"
            render={({match})=> {
              let currentCategory = categories.find(cat => cat.slug === match.params.slug);
              // todo: handle routing when url is wrong (can't find category). at the moment is not rendering anything
              if (!currentCategory) { return false; }
              return (
                <>
                  <Filter
                    onTextChange={text => this.setState({filterString: text})}
                  />
                  {products &&
                  <ProductList
                    items={products
                      .filter(product => product.categories.some(cat => cat.id === currentCategory.id))
                      .filter(item => item.title.toLowerCase().includes(filterString.toLowerCase()))
                    }
                    match={match}// matched url (with current category)
                  />
                  }
                </>
              )
            }
              
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
