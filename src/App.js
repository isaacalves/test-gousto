import React, { Component } from 'react';

import { getCategories, getProducts } from './api/gousto.js';

class App extends Component {

  state = {
    categories: undefined,
    products: undefined,
    currentCategoryId: 'e0f3285e-beb3-11e5-9533-02fada0dd3b9',
    currentProductId: undefined 
  }

  componentDidMount() {
    Promise.all([
      getCategories().then(res => res.json()),
      getProducts().then(res => res.json())
    ])
      .then((res) => {
        console.log(res)
        this.setState({
          categories: res[0].data,
          products: res[1].data
        })
      })
  }
  
  render() {
    let { categories, products } = this.state;

    return (
      <div className="App">
        <section>
          <nav className="Nav">
            <h2 className="Nav__title">Categories</h2>
            <ul>
              {categories &&
                categories.map(item => {
                  return (
                    <li className={item.id === this.state.currentCategoryId && 'current' }><a>{item.title}</a></li>
                  )
                })
              }
            </ul>
          </nav>
          <div className="Filter">
            <h2 className="Filter__title">Filter</h2>
            <input type="text"/>
          </div>
          <div className="List">
            <h2 className="List__title">Products</h2>
            <ul>
              {products &&
                products.map(item => {
                  return (
                    <li><a>{item.title}</a></li>
                  )
                })
              }
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
