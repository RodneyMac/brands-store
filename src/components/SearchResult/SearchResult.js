import React from 'react';
import "../SearchResult/SearchResult.css";

const SearchResult = () => {
  return (
  <div className='search-result-container'>
    <div className='search-result-content'>
      <a href='#home' className='link-home'>Home</a>
      <p className='search-result-bar'>/</p>
      <a href='#search-result' className='link-search-result'>Resultados de búsqueda</a>
    </div>
  </div>
  )
}

export default SearchResult;