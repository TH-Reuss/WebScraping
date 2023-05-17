import React from "react";

function loadingMessage(props){
    return (
        <div className='mb-[2.5vw]'>
          <h4 className='font-Inter text-[1.2vw]'>{props.title}</h4>
          <p className='font-Roboto font-extralight text-[1.2vw] mt-[0.2vw] w-[85%]'>{props.description}</p>
          <div className='flex flex-row justify-between font-Roboto font-extralight text-[0.8vw] mt-[0.5vw] w-[60%]'>
              <span>Ultima Actualización: {props.date}</span>
              <span>Tienda: {props.store}</span>
              <span>Precio: {props.price}</span>
              <a href={props.product_url} target='_blank' className=' font-medium no-underline hover:underline'>Visitar Tienda</a>
          </div>
        </div>
    );
}

export default loadingMessage