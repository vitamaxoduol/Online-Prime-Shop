import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
    return (
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    );
  }
  
  export default SearchBar;