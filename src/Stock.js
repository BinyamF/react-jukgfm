import React from 'react';

class Stock extends React.Component {
  render() {
    const stockData = [
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ];
    return (
      <div>
        {stockData.map((stock) => (
          <div className="stockSec">
            <h5>{stock.category}</h5>
            {stock.stocked ? <p className="redName">{stock.name}</p>: <p>{stock.name}</p>}
            <p>${stock.price}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Stock;
