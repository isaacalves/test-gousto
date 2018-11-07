import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { getCategories, getProducts } from './api/gousto.js';

import Nav from 'components/Nav.js';
import Filter from 'components/Filter.js';
import ProductList from 'components/ProductList.js';

const Home = () => 
  <div>Please pick a category above</div>

class App extends Component {

  state = {
    categories: undefined,
    products: undefined,
    currentCategoryId: undefined,
    currentProductId: undefined,
    filterString: ''
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
    let { categories, products, currentCategoryId, filterString } = this.state;
    
    // todo: get currentCategoryId from the URL and 1) filter products here 2) only render Filter if a category is selected

    return (
      <Router>
        <div className="App">
          <section>
            {categories &&
            <Nav
              items={categories}
            />}
            <Filter
              onTextChange={text => this.setState({ filterString: text })}
            />
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              path="/categories/:id"
              render={({match})=><ProductList
                products={products}
                filterString={filterString}
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
