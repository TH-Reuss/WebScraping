import Image from 'next/image'
import { Inter, Roboto } from 'next/font/google'

export default function Home() {
  return (
    <main className="w-screen h-screen bg-black flex flex-wrap items-center justify-center">

      <div className='flex flex-row flex-wrap w-[100%] h-[100%]'>

        <div className='flex flex-wrap flex-col justify-between basis-5/12  pt-[7%] pl-[5%]'>
          <div className='flex flex-col justify-center'>
            <div className='w-[85%]'>
              <h1 className='font-inter text-[7vw] font-black text-white'>Web</h1>
              <h1 className='font-inter text-[7vw] font-black text-orange -mt-[10%]'>Scraping</h1>
            </div>

            <input className='w-[85%] mt-5 mb-9 py-3 bg-gray focus:border-orange focus:outline-none text-black font-inter font-light px-2' type='text' placeholder='Ingresa una busqueda'></input>

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
          
        <div className='basis-7/12 relative'>
          <img src="SVG_Silueta.svg" alt='silueta' className='w-[83%] absolute bottom-0 right-0'></img>
        </div>
      </div>

    </main>
  )
}
