import React from 'react'
import './SearchBar.css';

class sortByOptions {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
  }

}

class SearchBar extends React.Component {
  renderSortByOptions() {
    return
    Object.keys(sortByOptions).map(sortByOptions => {
      let sortByOptionValue = sortByOptions[sortByOption];
      <li key = sortByOptionValue>{sortByOption}</li>
    });
  }
  render() {
    return
    <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
  renderSortByOptions()
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Lets Go</a>
  </div>
</div>
  };
}

export default SearchBar
