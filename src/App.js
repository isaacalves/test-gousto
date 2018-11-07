import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { getCategories, getProducts } from './api/gousto.js';

import Nav from 'components/Nav.js';
import Filter from 'components/Filter.js';
import List from 'components/List.js';

const Home = () => 
  <div>Please pick a category above</div>

class App extends Component {

  state = {
    categories: undefined,
    products: undefined,
    currentCategoryId: undefined,
    currentProductId: undefined 
  }

  componentDidMount() {
    Promise.all([
      getCategories().then(res => res.json()),
      getProducts().then(res => res.json())
    ])
      .then((res) => {
        this.setState({
          categories: res[0].data,
          products: res[1].data
        })
      })
  }
  
  render() {
    let { categories, products, currentCategoryId } = this.state;
    
    // todo: get currentCategoryId from the URL and 1) filter products here 2) only render Filter if a category is selected

    return (
      <Router>
        <div className="App">
          <section>
            {categories &&
            <Nav
              items={categories}
            />}
            <Filter />
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              path="/categories/:id"
              render={({match})=><List
                products={products}
                match={match}
              />}
            />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
