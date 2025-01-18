import React, { useEffect } from 'react'
import InputField from '../addVideogame/InputField'
import SelectField from '../addVideogame/SelectField'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useFetchVideogameByIdQuery, useUpdateVideogameMutation } from '../../../redux/features/videogames/videogamesApi';
import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';
import axios from 'axios';
import getBaseUrl from '../../../utils/baseURL';

const UpdateVideogame = () => {
  const { id } = useParams();
  const { data: videogameData, isLoading, isError, refetch } = useFetchVideogameByIdQuery(id);
  const [UpdateVideogame] = useUpdateVideogameMutation();
  const { register, handleSubmit, setValue, reset } = useForm();
  useEffect(() => {
    if (videogameData) {
      setValue('title', videogameData.title);
      setValue('description', videogameData.description);
      setValue('category', videogameData?.category);
      setValue('trending', videogameData.trending);
      setValue('oldPrice', videogameData.oldPrice);
      setValue('newPrice', videogameData.newPrice);
      setValue('coverImage', videogameData.coverImage)
    }
  }, [videogameData, setValue])

  const onSubmit = async (data) => {
    const updateVideogameData = {
      title: data.title,
      description: data.description,
      category: data.category,
      trending: data.trending,
      oldPrice: Number(data.oldPrice),
      newPrice: Number(data.newPrice),
      coverImage: data.coverImage || videogameData.coverImage,
    };
    try {
      await axios.put(`${getBaseUrl()}/api/videogames/edit/${id}`, updateVideogameData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      Swal.fire({
        title: "Videogame Updated",
        text: "Il videogioco è stato aggiornato con successo!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        
      });
      await refetch()
    } catch (error) {
      alert("Errore nell'update");
    }
  }
  if (isLoading) return <Loading />
  if (isError) return <div>Errore</div>
  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Update videogame</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Title"
          name="title"
          placeholder="Enter videogame title"
          register={register}
        />

        <InputField
          label="Description"
          name="description"
          placeholder="Enter videogame description"
          type="textarea"
          register={register}
        />

        <SelectField
          label="Category"
          name="category"
          options={[
            { value: '', label: 'Scegli una categoria' },
            { value: 'fps', label: 'Fps' },
            { value: 'rpg', label: 'Rpg' },
            { value: 'action', label: 'Action' },
            { value: 'platform', label: 'Platform' },
            { value: 'adventure', label: 'Adventure' },
          ]}
          register={register}
        />
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register('trending')}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">Di tendenza</span>
          </label>
        </div>

        <InputField
          label="Old Price"
          name="oldPrice"
          type="number"
          placeholder="Vecchio prezzo"
          register={register}
        />

        <InputField
          label="New Price"
          name="newPrice"
          type="number"
          placeholder="Nuovo prezzo"
          register={register}
        />

        <InputField
          label="Cover Image URL"
          name="coverImage"
          type="text"
          placeholder="Copertina"
          register={register}
        />

        <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded-md">
          Update Videogame
        </button>
      </form>
    </div>
  )
}

export default UpdateVideogame