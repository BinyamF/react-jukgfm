import React from 'react';
import './style.css';

class Search extends React.Component {
  render() {
    return (
      <div>
        <input
          id="srchInput"
          type="text"
          placeholder="Search..."
          className="content"
        />
        <input id="srchCkBox" type="checkbox" />
        <label for="srchCkBox">Only show products in stock</label>
      </div>
    );
  }
}

export default Search;
