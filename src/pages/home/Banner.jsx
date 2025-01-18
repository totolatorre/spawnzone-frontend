import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="" />
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>Nuove uscite</h1>
            <p className='mb-10'>E' tempo di aggiornare la tua lista con nuovi fantastici giochi</p>
            <Link to="/registrati" className='bg-zinc-200 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'>
             <button>Iscriviti</button>
             </Link>
        </div>

       
    </div>
  )
}

export default Banner