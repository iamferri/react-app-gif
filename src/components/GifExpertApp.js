import React from 'react';
import {useState} from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
  //const categories = ['love', 'hot','dog'];
  const [categorias, setCategorias] = useState(['holi']);


  return (
  <>
    <h1 className=' animate__animated animate__swing'>GifExpertApp</h1>
    <AddCategory categorias={setCategorias} cat={categorias}/>
    <ol>
      {
        categorias.map(cat => (
          <GifGrid 
            key={cat}
            categoria={cat}
          />
        ))
      }
    </ol>
  </>
  )
};
