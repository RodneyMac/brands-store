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
    <div className='div-results'>
      <div className='most-relevants'>
        <select name='Más relevantes' className='select'>
          <option value="5">Más relevantes</option>
          <option value="4">Más vendidos</option>
          <option value="3">Lanzamiento</option>
          <option value="2">Precio más alto</option>
          <option value="1">Precio más bajo</option>
        </select>
      </div>
      <div className='div-result-count'>
        <p className='result-number'>599</p>
        <p className='result-text'>Resultados</p>
      </div>
    </div>
    <div className='div-resultado-mobile'>
      <div className='mas-relevantes'>
        <select name='Más relevantes' className='selector'>
          <option value="5">Más relevantes</option>
          <option value="4">Más vendidos</option>
          <option value="3">Lanzamiento</option>
          <option value="2">Precio más alto</option>
          <option value="1">Precio más bajo</option>
        </select>
      </div>
      <div className='div-filtro'>
        <div className='btn-filtro'>Filtro</div>
      </div>
    </div>
  </div>
  )
}

export default SearchResult;