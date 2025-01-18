import React, { useState } from 'react'
import VideogameCard from '../videogame/VideogameCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllVideogamesQuery } from '../../redux/features/videogames/videogamesApi';

const categories = ["Scegli un genere", "fps", "rpg", "action", "platform", "adventure"]

const TopSellers = () => {
    
    const [selectedCategory, setSelectedCategory] = useState("Scegli un genere");

   const {data: videogames = []} = useFetchAllVideogamesQuery();
  
    const filteredVideogames = selectedCategory === "Scegli un genere" ? videogames : videogames.filter(videogame => videogame.category === selectedCategory.toLowerCase())

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Best Seller</h2>
            
            <div className='mb-8 flex items-center'>
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {
                        categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={{ nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                   filteredVideogames.length > 0 && filteredVideogames.map((videogame, index) => (
                        <SwiperSlide key={index}>
                            <VideogameCard  videogame={videogame} />
                        </SwiperSlide>
                    ))
                }



            </Swiper>
            <div className="custom-navigation">
               <button className="custom-prev  bg-gray-800 text-white rounded-full p-3 hover:bg-gray-600 transition">Precedente</button>
               <button className="custom-next  bg-gray-800 text-white rounded-full p-3 hover:bg-gray-600 transition">Successivo</button>
           </div>

        </div>
    )
}

export default TopSellers