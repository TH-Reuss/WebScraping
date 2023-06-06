import React, { useEffect } from 'react';

import { IconContext } from 'react-icons';
import { FiLoader } from 'react-icons/fi';
import { useState } from 'react';

  
function Menu(props) {
  const [isActive, setIsActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showHiddenElements, setShowHiddenElements] = useState(false);
  
  const username = 'Thomas Muñoz';

  const styleOpenMenu = 'items-start px-[50px] w-[40%] pointer-events-none';
  const styleCloseMenu = 'items-center w-[3%] cursor-pointer';

  const toggleMenu = () => {
    setIsActive(!isActive);
    //setIsActive(isActive);
  };

  useEffect(() => {
    let timeoutId;
    const timeout = isActive ? setTimeout(() => {setShowHiddenElements(true);}, 500): setShowHiddenElements(false);
    return () => clearTimeout(timeoutId);

  }, [isActive]);

  return (
    <nav className={`py-[5%] h-[100vh] absolute bg-gray right-0 top-0  duration-500 flex flex-col justify-between ${isActive ? styleOpenMenu : styleCloseMenu}`}
    onClick={toggleMenu}
    >
      <img src={'icons/xmark-solid 1.svg'} className='pointer-events-auto cursor-pointer absolute top-10 right-10' alt=""
      onClick={toggleMenu} />
      <div className={`w-full flex ${isActive ? 'justify-start' : 'justify-center'}`}>
        <img className={`w-[28px] ${showHiddenElements ? 'mr-5' : 'm-0'}`} src={'icons/user-astronaut-solid.svg'}  alt="" />
        <h3 className={`align-baseline flex items-end leading-[1] transition-opacity duration-1000 ease-in ${showHiddenElements ? 'flex opacity-100': 'hidden opacity-0'}`}>Hola, {username}</h3>
      </div>
      
      <img className='w-[32px]' src={'icons/shuttle-space-solid 2.svg'}></img>

    </nav>
  );
}



export default Menu