import React from 'react';
import "../Product/Product.css";
import {FiHeart} from "react-icons/fi";
import {AiOutlineArrowsAlt} from "react-icons/ai";

const Product = () => {
  return (
    <div className='product-container'>
      <div className='product-filter'>
        <div className='genre-filter'>
          <p className='filter-title'>Género</p>
          <div className='product-filter-item'>
            <label htmlFor="hombre" className='product-item-title'>
              <input type="checkbox" className='product-item' name="hombre"/>
            Hombre</label>
            <label htmlFor="mujer" className='product-item-title'>
              <input type="checkbox" className='product-item' name="mujer"/>
            Mujer</label>
            <label htmlFor="ninia" className='product-item-title'>
              <input type="checkbox" className='product-item' name="ninia"/>
            Niña</label>
            <label htmlFor="ninio" className='product-item-title'>
              <input type="checkbox" className='product-item' name="ninio"/>
            Niño</label>
            <label htmlFor="unisex" className='product-item-title'>
              <input type="checkbox" className='product-item' name="unisex"/>
            Unisex</label>
          </div>
        </div>
        <div className='brand-filter'>
          <p className='filter-title'>Marca</p>
          <div className='product-filter-item'>
            <label htmlFor="adidas" className='product-item-title'>
              <input type="checkbox" className='product-item' name="adidas"/>
            adidas</label>
            <label htmlFor="converse" className='product-item-title'>
              <input type="checkbox" className='product-item' name="converse"/>
            Converse</label>
            <label htmlFor="fila" className='product-item-title'>
              <input type="checkbox" className='product-item' name="fila"/>
            Fila</label>
            <label htmlFor="humms" className='product-item-title'>
              <input type="checkbox" className='product-item' name="humms"/>
            Humms</label>
            <label htmlFor="nike" className='product-item-title'>
              <input type="checkbox" className='product-item' name="nike"/>
            Nike</label>
            <label htmlFor="pony" className='product-item-title'>
              <input type="checkbox" className='product-item' name="pony"/>
            Pony</label>
            <label htmlFor="puma" className='product-item-title'>
              <input type="checkbox" className='product-item' name="puma"/>
            Puma</label>
            <label htmlFor="reebok" className='product-item-title'>
              <input type="checkbox" className='product-item' name="reebok"/>
            Reebok</label>
            <label htmlFor="topper" className='product-item-title'>
              <input type="checkbox" className='product-item' name="topper"/>
            Topper</label>
            <label htmlFor="vans_argentina" className='product-item-title'>
              <input type="checkbox" className='product-item' name="vans_argentina"/>
            Vans Argentina</label>
          </div>
        </div>
      </div>
      <div className='product-content'>
        <div className='product-image'>
          <img src='https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwbc424bee/products/NI_DH7568-002/NI_DH7568-002-1.JPG?sw=400&sh=400' alt="Picture" className='p-img'/>
          <a href='#whishlistTile' className='whishlistTile'><FiHeart className='product-heart-icon'/></a>
          <a href='#quickView' className='quickView'><AiOutlineArrowsAlt className='product-arrows-icons'/></a>
        </div>
        <div className='product-descriptions'>
          <div className='product-description-title'>Zapatillas Nike Air Force 1 07 Lv8</div>
          <div className='product-description-price'>$27.999</div>
        </div>
      </div>
    </div>
  )
}

export default Product;