import React from 'react';
import "../views/HomeView.css";
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Product from '../components/Product/Product';
import SearchResult from '../components/SearchResult/SearchResult';

const HomeView = () => {
  return (
    <div className="container">
      <Header/>
      <Navbar/>
      <SearchResult/>
      <Product/>
    </div>
  )
}

export default HomeView;