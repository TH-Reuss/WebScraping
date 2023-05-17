'use client';
import React, { useState } from 'react';

import ProductCard from '../components/product_card'
import '../public/main.css'
export default function Home() {

  const axios = require('axios');
  
  const [isLoading, setLoading] = useState(false)
  const [inputProduct, setInputProduct] = useState('');
  const [products, setProducts] = useState([])
  const [enter, setEnter] = useState('');

  const handleChange = (event) => {
    setInputProduct(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      makeHTTPRequest();
    }
  };

  const makeHTTPRequest = () =>{
    axios.get('http://127.0.0.1:4000/products/' + inputProduct)
    .then(function (response) {
      // handle success
      setProducts(response.data) 
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }

  return (
    <main className="w-screen h-screen bg-black flex flex-wrap flex-col items-center justify-center">

      <div className='flex flex-row flex-wrap w-[100%] h-[100%]'>

        <div className='flex flex-wrap flex-col justify-between w-[40%]  pt-[7%] pl-[5%]'>
          <div className='flex flex-col justify-center'>
            <div className='w-[85%]'>
              <h1 className='font-inter text-[7vw] font-black text-white'>Web</h1>
              <h1 className='font-inter text-[7vw] font-black text-orange -mt-[10%]'>Scraping</h1>
            </div>

            <input 
              className='w-[85%] mt-5 mb-9 py-3 bg-gray focus:border-orange focus:outline-none text-black font-inter font-light px-2' 
              type='text' 
              placeholder='Ingresa una busqueda'
              value = {inputProduct}
              onChange = {handleChange}
              onKeyDown = {handleKeyDown}
            />

            <div className='w-[85%]  flex w- flex-row flex-wrap'>
              <div className='w-full font-inter font-light'><h3>Lista de páginas</h3></div>
              <div className='flex flex-col w-6/12 mt-3 font-inter font-light text-[0.8vw]'>
                <a>https://www.falabella.com/falabella-cl</a>
                <a>https://www.falabella.com/falabella-cl</a>
                <a>https://www.falabella.com/falabella-cl</a>
              </div>
              <div className='flex flex-col w-6/12 mt-3 font-inter font-light text-[0.8vw] text-right'>
                <a>https://www.falabella.com/falabella-cl</a>
                <a>https://www.falabella.com/falabella-cl</a>
                <a>https://www.falabella.com/falabella-cl</a>
              </div>
            </div>
          </div>

          <div className='Tag pb-[7%]'>
            <h5 className='font-inter font-light text-[0.8vw]'>Version 1.0</h5>
            <h5 className='font-inter font-light text-[0.8vw]'>Diseñado y desarrollado por Thomas Muñoz R.</h5>
          </div>
          
        </div>
          
        <div className=' scroll-container relative max-h-[100vh] flex items-center w-[60%]  border-l-[1px] border-white'>
          <div className="h-[80%] w-[100%] overflow-x-hidden pl-[6%]">
            {products.map((product, index) => (
              <ProductCard 
              title = {product.title} 
              description = {"Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur, id dapibus montes placerat dignissim mollis accumsan."}
              price = {product.price}
              date = {new Date().toLocaleDateString()}
              store = {"Falabella"}
              product_url = {product.url}
              ></ProductCard>
            ))}
          </div>
          <img src="SVG_Silueta.svg" alt='silueta' className=' invisible w-[83%] absolute bottom-0 right-0'></img>
        </div>

      </div>

    </main>
  )
}
