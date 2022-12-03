import React from 'react';
import './style.css';

import Stock from './Stock.js';

class Products extends React.Component {
  render() {
    return (
      <div>
        <div id="productHeader" className="productStl">
          <h3>Name</h3>
          <h3>Price</h3>
        </div>
        <Stock />
      </div>
    );
  }
}

export default Products;
