import React from 'react';
import "../Product/Product.css";
import {FiHeart} from "react-icons/fi";
import {AiOutlineArrowsAlt} from "react-icons/ai";
import {MdKeyboardArrowRight} from "react-icons/md";
import {MdKeyboardArrowLeft} from "react-icons/md";

const Product = () => {
  return (
    <div className='contenedor-general-productos'>
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
          <div className='product-size'>
            <p className='filter-title'>Talle</p>
              <div className='product-filter-item-size'>
                <div className='product-filter-item-size-left'>
                  <label htmlFor="17_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="17_5"/>
                  17.5</label>
                  <label htmlFor="18_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="18_5"/>
                  18.5</label>
                  <label htmlFor="19_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="19_5"/>
                  19.5</label>
                  <label htmlFor="20_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="20_5"/>
                  20.5</label>
                  <label htmlFor="21_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="21_5"/>
                  21.5</label>
                  <label htmlFor="22_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="22_5"/>
                  22.5</label>
                  <label htmlFor="23_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="23_5"/>
                  23.5</label>
                  <label htmlFor="24_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="24_5"/>
                  24.5</label>
                  <label htmlFor="26" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="26"/>
                  26</label>
                  <label htmlFor="27" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="27"/>
                  27</label>
                  <label htmlFor="28" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="28"/>
                  28</label>
                  <label htmlFor="29" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="29"/>
                  29</label>
                  <label htmlFor="30" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="30"/>
                  30</label>
                  <label htmlFor="31" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="31"/>
                  31</label>
                  <label htmlFor="32" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="32"/>
                  32</label>
                  <label htmlFor="33" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="33"/>
                  33</label>
                  <label htmlFor="34" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="34"/>
                  34</label>
                  <label htmlFor="35" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="35"/>
                  35</label>
                  <label htmlFor="36" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="36"/>
                  36</label>
                  <label htmlFor="37" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="37"/>
                  37</label>
                  <label htmlFor="38" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="38"/>
                  38</label>
                  <label htmlFor="39" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="39"/>
                  39</label>
                  <label htmlFor="40" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="40"/>
                  40</label>
                  <label htmlFor="41" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="41"/>
                  41</label>
                  <label htmlFor="42" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="42"/>
                  42</label>
                  <label htmlFor="43" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="43"/>
                  43</label>
                  <label htmlFor="44" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="44"/>
                  44</label>
                  <label htmlFor="45" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="45"/>
                  45</label>
                  <label htmlFor="46" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="46"/>
                  46</label>
                  <label htmlFor="47" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="47"/>
                  47</label>
                  <label htmlFor="48_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="48_5"/>
                  48.5</label>
                  <label htmlFor="50_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="50_5"/>
                  50.5</label>
                </div>
                <div className='product-filter-item-size-right'>
                  <label htmlFor="18" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="18"/>
                  18</label>
                  <label htmlFor="19" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="19"/>
                  19</label>
                  <label htmlFor="20" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="20"/>
                  20</label>
                  <label htmlFor="21" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="21"/>
                  21</label>
                  <label htmlFor="22" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="22"/>
                  22</label>
                  <label htmlFor="23" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="23"/>
                  23</label>
                  <label htmlFor="24" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="24"/>
                  24</label>
                  <label htmlFor="25" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="25"/>
                  25</label>
                  <label htmlFor="26_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="26_5"/>
                  26.5</label>
                  <label htmlFor="27_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="27_5"/>
                  27.5</label>
                  <label htmlFor="28_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="28_5"/>
                  28.5</label>
                  <label htmlFor="29_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="29_5"/>
                  29.5</label>
                  <label htmlFor="30_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="30_5"/>
                  30.5</label>
                  <label htmlFor="31_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="31_5"/>
                  31.5</label>
                  <label htmlFor="32_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="32_5"/>
                  32.5</label>
                  <label htmlFor="33_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="33_5"/>
                  33.5</label>
                  <label htmlFor="34_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="34_5"/>
                  34.5</label>
                  <label htmlFor="35_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="35_5"/>
                  35.5</label>
                  <label htmlFor="36_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="36_5"/>
                  36.5</label>
                  <label htmlFor="37_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="37_5"/>
                  37.5</label>
                  <label htmlFor="38_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="38_5"/>
                  38.5</label>
                  <label htmlFor="39_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="39_5"/>
                  39.5</label>
                  <label htmlFor="40_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="40_5"/>
                  40.5</label>
                  <label htmlFor="41_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="41_5"/>
                  41.5</label>
                  <label htmlFor="42_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="42_5"/>
                  42.5</label>
                  <label htmlFor="43_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="43_5"/>
                  43.5</label>
                  <label htmlFor="44_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="44_5"/>
                  44.5</label>
                  <label htmlFor="45_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="45_5"/>
                  45.5</label>
                  <label htmlFor="46_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="46_5"/>
                  46.5</label>
                  <label htmlFor="47_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="47_5"/>
                  47.5</label>
                  <label htmlFor="49_5" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="49_5"/>
                  49.5</label>
                  <label htmlFor="51" className='product-item-title-size'>
                    <input type="checkbox" className='product-item' name="51"/>
                  51</label>
                </div>
              </div>
          </div>
          <div className='product-price'>
            <p className='filter-title'>Precio</p>
            <div className='product-filter-item'>
              <label htmlFor="2000_4999" className='product-item-title'>
                <input type="checkbox" className='product-item' name="2000_4999"/>
              $2000 - $4999</label>
              <label htmlFor="5000_10000" className='product-item-title'>
                <input type="checkbox" className='product-item' name="5000_10000"/>
              $5000 - $10000</label>
              <label htmlFor="10000_14999" className='product-item-title'>
                <input type="checkbox" className='product-item' name="10000_14999"/>
              $10000 - $14999</label>
              <label htmlFor="15000" className='product-item-title'>
                <input type="checkbox" className='product-item' name="15000"/>
              $15000 o más</label>
            </div>
          </div>
        </div>
        <div className='product-content'>
          <div className='productos'>
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
          <div className='productos'>
            <div className='product-image'>
              <img src='https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw099bfb3d/products/NI_DH4406-101/NI_DH4406-101-1.JPG?sw=400&sh=400' alt="Picture" className='p-img'/>
              <a href='#whishlistTile' className='whishlistTile'><FiHeart className='product-heart-icon'/></a>
              <a href='#quickView' className='quickView'><AiOutlineArrowsAlt className='product-arrows-icons'/></a>
            </div>
            <div className='product-descriptions'>
              <div className='product-description-title'>Zapatillas Nike Air Force 1 '07 Essential</div>
              <div className='product-description-price'>$29.999</div>
            </div>
          </div>
          <div className='productos'>
            <div className='product-image'>
              <img src='https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw4e08044c/products/NI_DH4406-102/NI_DH4406-102-1.JPG?sw=400&sh=400' alt="Picture" className='p-img'/>
              <a href='#whishlistTile' className='whishlistTile'><FiHeart className='product-heart-icon'/></a>
              <a href='#quickView' className='quickView'><AiOutlineArrowsAlt className='product-arrows-icons'/></a>
            </div>
            <div className='product-descriptions'>
              <div className='product-description-title'>Zapatillas Nike Air Force 1 '07 Essential</div>
              <div className='product-description-price'>$25.999 - $29.999</div>
            </div>
          </div>

          <div className='productos'>
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
          <div className='productos'>
            <div className='product-image'>
              <img src='https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw099bfb3d/products/NI_DH4406-101/NI_DH4406-101-1.JPG?sw=400&sh=400' alt="Picture" className='p-img'/>
              <a href='#whishlistTile' className='whishlistTile'><FiHeart className='product-heart-icon'/></a>
              <a href='#quickView' className='quickView'><AiOutlineArrowsAlt className='product-arrows-icons'/></a>
            </div>
            <div className='product-descriptions'>
              <div className='product-description-title'>Zapatillas Nike Air Force 1 '07 Essential</div>
              <div className='product-description-price'>$29.999</div>
            </div>
          </div>
          <div className='productos'>
            <div className='product-image'>
              <img src='https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw4e08044c/products/NI_DH4406-102/NI_DH4406-102-1.JPG?sw=400&sh=400' alt="Picture" className='p-img'/>
              <a href='#whishlistTile' className='whishlistTile'><FiHeart className='product-heart-icon'/></a>
              <a href='#quickView' className='quickView'><AiOutlineArrowsAlt className='product-arrows-icons'/></a>
            </div>
            <div className='product-descriptions'>
              <div className='product-description-title'>Zapatillas Nike Air Force 1 '07 Essential</div>
              <div className='product-description-price'>$25.999 - $29.999</div>
            </div>
          </div>

          <div className='productos'>
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
          <div className='productos'>
            <div className='product-image'>
              <img src='https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw099bfb3d/products/NI_DH4406-101/NI_DH4406-101-1.JPG?sw=400&sh=400' alt="Picture" className='p-img'/>
              <a href='#whishlistTile' className='whishlistTile'><FiHeart className='product-heart-icon'/></a>
              <a href='#quickView' className='quickView'><AiOutlineArrowsAlt className='product-arrows-icons'/></a>
            </div>
            <div className='product-descriptions'>
              <div className='product-description-title'>Zapatillas Nike Air Force 1 '07 Essential</div>
              <div className='product-description-price'>$29.999</div>
            </div>
          </div>
          <div className='productos'>
            <div className='product-image'>
              <img src='https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw4e08044c/products/NI_DH4406-102/NI_DH4406-102-1.JPG?sw=400&sh=400' alt="Picture" className='p-img'/>
              <a href='#whishlistTile' className='whishlistTile'><FiHeart className='product-heart-icon'/></a>
              <a href='#quickView' className='quickView'><AiOutlineArrowsAlt className='product-arrows-icons'/></a>
            </div>
            <div className='product-descriptions'>
              <div className='product-description-title'>Zapatillas Nike Air Force 1 '07 Essential</div>
              <div className='product-description-price'>$25.999 - $29.999</div>
            </div>
          </div>

          <div className='productos'>
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
          <div className='productos'>
            <div className='product-image'>
              <img src='https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw099bfb3d/products/NI_DH4406-101/NI_DH4406-101-1.JPG?sw=400&sh=400' alt="Picture" className='p-img'/>
              <a href='#whishlistTile' className='whishlistTile'><FiHeart className='product-heart-icon'/></a>
              <a href='#quickView' className='quickView'><AiOutlineArrowsAlt className='product-arrows-icons'/></a>
            </div>
            <div className='product-descriptions'>
              <div className='product-description-title'>Zapatillas Nike Air Force 1 '07 Essential</div>
              <div className='product-description-price'>$29.999</div>
            </div>
          </div>
          <div className='productos'>
            <div className='product-image'>
              <img src='https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw4e08044c/products/NI_DH4406-102/NI_DH4406-102-1.JPG?sw=400&sh=400' alt="Picture" className='p-img'/>
              <a href='#whishlistTile' className='whishlistTile'><FiHeart className='product-heart-icon'/></a>
              <a href='#quickView' className='quickView'><AiOutlineArrowsAlt className='product-arrows-icons'/></a>
            </div>
            <div className='product-descriptions'>
              <div className='product-description-title'>Zapatillas Nike Air Force 1 '07 Essential</div>
              <div className='product-description-price'>$25.999 - $29.999</div>
            </div>
          </div>
        </div>
      </div>
      <div className='product-pagination'>
        <div className='product-pagination-content'>
          <div className='product-pagination-title'>Páginas: </div>
          <div className='div-product-pagination-first-page'>
            <div className='product-pagination-first-page'>1</div>
          </div>
          <div className='product-pagination-second-page'>2</div>
          <div className='product-pagination-space'>...</div>
          <div className='product-pagination-more-page'>49</div>
          <div className='div-product-pagination-icon'><MdKeyboardArrowRight className='product-pagination-icon'/></div>
        </div>
      </div>
      <div className='product-pagination-mobile'>
        <div className='previous-pagination-mobile'>
          <div className='div-product-pagination-icon-left-mobile'>
            <MdKeyboardArrowLeft className='product-pagination-icon-left-mobile'/>
          </div>
          <div className='product-pagination-title-left-mobile'>Anterior</div>
        </div>
        <div className='div-product-pagination-first-page-mobile'>
          <div className='product-pagination-first-page-mobile'>1</div>
        </div>
        <div className='next-pagination-mobile'>
          <div className='product-pagination-title-right-mobile'>Siguiente</div>
          <div className='div-product-pagination-icon-right-mobile'>
            <MdKeyboardArrowRight className='product-pagination-icon-right-mobile'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;