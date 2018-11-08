import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { getCategories, getProducts } from './api/gousto.js';

import Nav from 'components/Nav.js';
import Filter from 'components/Filter.js';
import ProductList from 'components/ProductList.js';

import Products from 'api/__mocks__/products.json';
import Categories from 'api/__mocks__/categories.json';


class App extends Component {

  state = {
    categories: undefined,
    products: undefined,
    filterString: ''
  }

  componentDidMount() {
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
  
    return (
      <Router>
        <div className="App">
          <section className="container">
            {categories &&
            <Nav items={categories} />}
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
      </Router>
    );
  }
}

export default App;
