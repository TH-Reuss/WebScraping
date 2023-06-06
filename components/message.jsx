import React from 'react';
import { IconContext } from 'react-icons';
import { FiLoader } from 'react-icons/fi';


function Message(props) {
  return (
    <div className="w-full xl:w-[70%] mx-auto h-full bg-black flex flex-col justify-center items-center">
        <p className='text-white font-Inter font-normal text-[1.2em] text-center'>!Ups! Mira abajo</p>
        <p className='text-white font-Roboto font-extralight text-center mt-[0.2em] text-[1em]'>{props.message}</p> 
    </div>
  );
}

export default Message