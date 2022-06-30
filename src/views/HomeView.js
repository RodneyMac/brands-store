import React from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import SearchResult from '../components/SearchResult/SearchResult';

const HomeView = () => {
  return (
    <div className="container">
      <Header/>
      <Navbar/>
      <SearchResult/>
    </div>
  )
}

export default HomeView;