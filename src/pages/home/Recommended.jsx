import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import VideogameCard from '../videogame/VideogameCard';
import { useFetchAllVideogamesQuery } from '../../redux/features/videogames/videogamesApi';


const Recommended = () => {
   

    const {data: videogames = []} = useFetchAllVideogamesQuery();
  return (
    <div className='py-16'>
         <h2 className='text-3xl font-semibold mb-6'> Consigliati per te </h2>


         <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={{ nextEl: '.custom-nexts',
                    prevEl: '.custom-prevs',
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
                   videogames.length > 0 && videogames.slice(8, 18).map((videogame, index) => (
                        <SwiperSlide key={index}>
                            <VideogameCard videogame={videogame} />
                        </SwiperSlide>
                    ))
                }



            </Swiper>
            <div className="custom-navigations">
               <button className="custom-prevs  bg-gray-800 text-white rounded-full p-3 hover:bg-gray-600 transition">Precedente</button>
               <button className="custom-nexts  bg-gray-800 text-white rounded-full p-3 hover:bg-gray-600 transition">Successivo</button>
           </div>
    </div>
  )
}

export default Recommended