import React, {useEffect, useState} from 'react';

function ProductCard(props) {

    const [title, setTitle] = useState('')

    const splitText = (text, length) => {
      return text.slice(0, length) + '...'
    };

    useEffect(() => {
      if(props.title.length > props.max_length_title){
        return setTitle(splitText(props.title, props.max_length_title))
      }
      return setTitle(props.title)
    }, [props.title])

    return (
      <div className='mb-[6vh] w-[100%]'>
        <a href={props.product_url} target='_blank' className='font-Inter w-[100%] text-[1rem] xl:text-[1.2vw] font-normal text-white text-justify'>{title}</a>
        <p className='font-Roboto font-thin text-[1rem] xl:text-[1.2vw] mt-[2vw] md:mt-[0.5vh] text-white text-justify'>{props.description}</p>
        <div className='flex flex-row flex-wrap font-Roboto font-extralight text-[0.8rem] xl:text-[0.9vw] mt-[2vw] md:mt-[0.5vh] text-white'>
            <span className='w-[100%] lg:w-auto lg:mr-[5%]'>Ultima Actualización: {props.date}</span>
            <span className='mr-[5%]'>Tienda: {props.store}</span>
            <span className='mr-[5%]'>Precio: {props.price}</span>
            <a href={props.product_url} target='_blank' className=' mr-[5%] font-medium no-underline hover:underline'>Visitar Tienda</a>
        </div>
      </div>
    );
  }

  export default ProductCard;