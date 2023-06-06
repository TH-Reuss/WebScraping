'use client';
import React, { useState } from 'react';

import ProductCard from '../components/product_card'
import LoadingMessage from '@/components/loading_message';
import Message from '@/components/message';
import Menu from '@/components/menu';

import '../public/main.css'
export default function Home() {
  const axios = require('axios');
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  
  'Agregar mensajes de que el input está en blanco y que no se encontraron productos'
  const [message, setMessage] = useState({'state': false, 'message':''})
  const [isLoading, setLoading] = useState(false)
  const [inputProduct, setInputProduct] = useState('');
  const [products, setProducts] = useState([])

  const handleChange = (event) => {
    setInputProduct(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getProducts();
    }
  };

  const getProducts = async () =>{
    setLoading(true)
    
    try{
      const response = await axios.get(apiUrl + 'products/' + inputProduct)
      setProducts(response.data)
      setMessage({'state': false, 'message': ''})
    }
    catch(error){
      setProducts([])
      setMessage({'state': true, 'message': error.response.data.message})
    }

    setLoading(false)
  }

  return (
      <div className='container  overflow-hidden mx-auto bg-black flex flex-col xl:flex-row flex-wrap w-[100vw] px-[7%] py-[5%] xl:px-0 xl:py-0 xl:w-[100vw] xl:h-[100vh] xl:max-w-none'>
        {isLoading && <LoadingMessage message="Estoy buscando el producto que me indicaste, toma asiento y espera un momento."/>}

        <div className='flex flex-col lg:w-[65%] xl:w-[40%] 2xl:w-[40%] xl:pl-[5vw] xl:flex-col-reverse xl:justify-between xl:py-[10vh]'>
          <div className='flex flex-col'>
            <span className='text-[0.9rem] font-extralight text-white md:hidden xl:flex'>Version 1.0</span>
            <span className='text-[0.9rem] font-extralight text-white md:hidden xl:flex'>Diseñado y desarrollado por Thomas Muñoz R</span>
          </div>
          <div>
            <div className='mt-[5%]'>
              <div className='flex flex-row items-baseline'>
                <div>
                  <h1 className='font-inter sm:text-[7rem] lg:text-[8rem] xl:text-[6.5vw] text-[3rem] font-black text-white'>Web</h1>
                </div>
                <div className='flex flex-col'>
                  
                  <span className='text-[0.8rem] font-extralight hidden md:flex xl:hidden text-white'>Diseñado y desarrollado por Thomas Muñoz R</span>
                </div>
              </div>
              <h1 className='mt-[-5%] sm:mt-[-10vw] md:mt-[-7vw] lg:mt-[-6vw] xl:mt-[-4vw] 2xl:mt-[-3vw] sm:text-[7rem]
               lg:text-[8rem] xl:text-[6.5vw] font-inter text-[3rem] font-black text-orange'>Scraping</h1>
            </div>

            <input 
              className=' w-[90%] lg:w-[100%]  mt-[2%] mb-[8%] py-1.5 sm:py-3 bg-gray focus:border-orange 
              focus:outline-none text-black font-inter font-light px-2 xl:w-[83%]' 
              type='text' 
              placeholder='Ingresa una busqueda'
              value = {inputProduct}
              onChange = {handleChange}
              onKeyDown = {handleKeyDown}
            />

            <div className='text-[0.8rem] font-light text-white'>
              <h3>Lista de páginas</h3>
              <div className='flex flex-row flex-wrap justify-between mt-[2%] sm:w-[100%] md:w-[90%] lg:w-[100%] xl:w-[83%]'>
                <a href='https://www.falabella.com/falabella-cl' target='_blank' className=' underline text-[0.8rem] font-light text-white'>https://www.falabella.com/falabella-cl</a>
                <a href='https://www.falabella.com/falabella-cl' target='_blank' className=' underline text-[0.8rem] font-light text-white hidden md:flex'>https://www.falabella.com/falabella-cl</a>
              </div>
              
            </div>

          </div>
        </div>

        <div className=' scroll-container flex flex-col mt-[15%] xl:border-solid xl:border-l-[0.1px] border-white xl:mt-0 xl:w-[55%] 2xl:w-[55%] xl:items-center xl:justify-center'>
          <div className="xl:h-[80vh] xl:w-[85%] overflow-x-hidden">
            {message['state'] && <Message message={message['message']}/>}
            {products.map((product, index) => (
                  <ProductCard 
                  key = {index}
                  title = {product.title}
                  max_length_title = {60}
                  description = {"Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur, id dapibus montes placerat dignissim mollis accumsan."}
                  price = {product.price}
                  date = {new Date().toLocaleDateString()}
                  store = {"Falabella"}
                  product_url = {product.url}
                  ></ProductCard>
            ))}
          </div>
        </div>

        <Menu></Menu>
      </div>
  )
}
