import React from 'react';
import "../Navbar/Navbar.css";
import {AiOutlineMenu} from "react-icons/ai";
import {IoSearch} from "react-icons/io5";
import {HiOutlineUser} from "react-icons/hi";
import {BsSuitHeartFill} from "react-icons/bs";
import {ImCart} from "react-icons/im";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-top'>
        <AiOutlineMenu className="menu-icon"/>
        <img src='https://www.moov.com.ar/on/demandware.static/Sites-Moov-Site/-/default/dw4ec5fce6/images/logo.svg' alt='Logo' className='logo'/>
          <IoSearch className="input-navbar-icon"/>
          <input type="text" className="input-navbar" placeholder='Buscar...'/>
        <div className="div-nabvar-icons">
          <HiOutlineUser className='user-icon'/>
          <BsSuitHeartFill className='heart-icon'/>
          <ImCart className='cart-icon'/>
        </div>
      </div>
      <div className='navbar-bottom'>
        <div className='div-img-dexter'>
          <img src='https://www.moov.com.ar/on/demandware.static/Sites-Moov-Site/-/default/dwe93dcda1/images/logo-redirect-dexter.svg' alt='Dexter' className='img-dexter'/>
        </div>
        <div className='btn-navbar-bottom'>
          <a href='#hombre' className='btn-n-b'>Hombre</a>
          <a href='#mujer' className='btn-n-b'>Mujer</a>
          <a href='#zapatillas' className='btn-n-b'>Zapatillas</a>
          <a href='#marcas' className='btn-n-b'>Marcas</a>
          <a href='#sale' className='btn-n-b'>Sale</a>
        </div>
      </div>
      <IoSearch className="input-navbar-mobile-icon"/>
      <input type="text" className='input-mobile' placeholder='Buscar...'/>
    </div>
  )
}

export default Navbar;