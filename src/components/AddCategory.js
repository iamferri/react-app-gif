import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';



export const AddCategory = ({categorias , cat}) => {

  const [inputValue, setInputValue] = useState('') 
  const handleInputChange = (e) =>{
    setInputValue(e.target.value);
  } 
  const handleSubmit = (e) => {
      e.preventDefault();
      if(inputValue){
        categorias([inputValue,...cat])
        setInputValue('')
      } else{
          alert('campo vacio')
      }
       
  }
  return( 
  <form onSubmit={handleSubmit}>
    <TextField
      label='Buscar categorias'
      value={inputValue}
      onChange={handleInputChange}
      sx={{width:'70%'}}
    />
  </form>    
  );
};

AddCategory.propTypes = {
    categorias: PropTypes.func.isRequired,
}
