import React, {useEffect, useState} from 'react';

function ProductCard(props) {

    const [title, setTitle] = useState('')

    useEffect(() => {
      if(props.title.length > 70){
        setTitle(props.title.slice(0,70) + ' . . .')
      }
    }, [])

    return (
      <div className='mb-[10vw] w-[100%]'>
        <h4 className='font-Inter w-[100%] text-[1rem] md:text-[1.5rem] font-normal text-white text-justify'>{title}</h4>
        <p className='font-Roboto font-extralight text-[1rem] md:text-[1.5rem] mt-[2vw] text-white text-justify'>{props.description}</p>
        <div className='flex flex-row flex-wrap font-Roboto font-extralight text-[0.8rem] mt-[2vw] text-white'>
            <span className='w-[100%]'>Ultima Actualización: {props.date}</span>
            <span className='mr-[5%]'>Tienda: {props.store}</span>
            <span className='mr-[5%]'>Precio: {props.price}</span>
            <a href={props.product_url} target='_blank' className=' mr-[5%] font-medium no-underline hover:underline'>Visitar Tienda</a>
        </div>
      </div>
    );
  }

  export default ProductCard;