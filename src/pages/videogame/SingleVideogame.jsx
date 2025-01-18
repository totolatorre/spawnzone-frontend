import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { useParams } from "react-router-dom"

import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchVideogameByIdQuery } from '../../redux/features/videogames/videogamesApi';

const SingleVideogame = () => {
    const {id} = useParams();
    const {data: videogame, isLoading, isError} = useFetchVideogameByIdQuery(id);

    const dispatch =  useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    if(isLoading) return <div>Caricamento...</div>
    if(isError) return <div>Errore</div>
  return (
    <div className="max-w-lg shadow-md p-5">
            <h1 className="text-2xl font-bold mb-6">{videogame.title}</h1>

            <div className=''>
                <div>
                    <img
                        src={`${getImgUrl(videogame.coverImage)}`}
                        alt={videogame.title}
                        className="mb-8"
                    />
                </div>

                <div className='mb-5'>
                    <p className="text-gray-700 mb-2"><strong>Autori: </strong> {videogame.author || 'admin'}</p>
                    <p className="text-gray-700 mb-4">
                        <strong>Pubblicato: </strong> {new Date(videogame?.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700 mb-4 capitalize">
                        <strong>Categoria:</strong> {videogame?.category}
                    </p>
                    <p className="text-gray-700"><strong>Descrizione:</strong> {videogame.description}</p>
                </div>

                <button onClick={() => handleAddToCart(videogame)} className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
                    <FiShoppingCart className="" />
                    <span>Aggiungi al carrello</span>

                </button>
            </div>
        </div>
  )
}

export default SingleVideogame