import React, { useState } from 'react'
import InputField from './InputField'
import SelectField from './SelectField'
import { useForm } from 'react-hook-form';
import { useAddVideogameMutation } from '../../../redux/features/videogames/videogamesApi';
import Swal from 'sweetalert2';

const AddVideogame = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [imageFile, setimageFile] = useState(null);
    const [addVideogame, {isLoading, isError}] = useAddVideogameMutation()
    const [imageFileName, setimageFileName] = useState('')
    const onSubmit = async (data) => {
 
        const newVideogameData = {
            ...data,
            coverImage: imageFileName
        }
        try {
            await addVideogame(newVideogameData).unwrap();
            Swal.fire({
                title: "Videogioco aggiunto",
                text: "Il tuo videogioco è stato caricato correttamente",
                icon: "successo",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33"
               
              });
              reset();
              setimageFileName('')
              setimageFile(null);
        } catch (error) {
            console.error(error);
            alert("Errore. Riprova ancora.")   
        }
      
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            setimageFile(file);
            setimageFileName(file.name);
        }
    }
  return (
    <div className="max-w-lg   mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Aggiungi un nuovo videogioco</h2>

      
      <form onSubmit={handleSubmit(onSubmit)} className=''>
        <InputField
          label="Title"
          name="title"
          placeholder="Inserisci il titolo"
          register={register}
        />

        <InputField
          label="Description"
          name="description"
          placeholder="Inserisci una descrizione"
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
            <span className="ml-2 text-sm font-semibold text-gray-700">E' di tendenza</span>
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

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Copertina</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2 w-full" />
          {imageFileName && <p className="text-sm text-gray-500">Selezionata: {imageFileName}</p>}
        </div>

        <button type="submit" className="w-full py-2 bg-green-500 text-white font-bold rounded-md">
         {
            isLoading ? <span className="">Aggiungendo.. </span> : <span>Aggiungi</span>
          }
        </button>
      </form>
    </div>
  )
}

export default AddVideogame