import React from 'react';
import { IconContext } from 'react-icons';
import { FiLoader } from 'react-icons/fi';


function LoadingMessage(props) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col justify-center items-center z-50">
        <div className='m-auto flex flex-col pt-[20vh] items-center'>
            <IconContext.Provider value={{ className: 'spinner-icon'}}>
                <FiLoader  className='animate-spin mb-[5vh] text-[1vw] text-white'/>
            </IconContext.Provider>
            <p className=' text-white font-Roboto font-thin text-[1vw]'>{props.message}</p>
        </div>
        <p className='mt-auto mb-[3vw] text-white font-Roboto font-thin text-[0.7vw]'>Si eres reclutador no olvides contratarme</p>
        
    </div>
  );
}

export default LoadingMessage