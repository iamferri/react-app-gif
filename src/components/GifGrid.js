import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    
    const {data, loading} = useFetchGifs(categoria);

  return (
    <Container className='container' sx={{marginBottom: '10px', width:'90%'}}>
        <Box sx={{bgcolor: '#93def7', borderRadius: 2, padding: '10px'}}>
            {loading?<p>Cargando...</p> : <h2 className='animate__animated animate__rubberBand'>{categoria}</h2>}
            
            <div className='card-grid animate__animated animate__backInRight'>
                {
                    data.map( img =>(
                        <GifGridItem 
                            key = {img.id}
                            {...img}/>        
                    ))
                }
            </div>
        </Box>
    </Container>
  );
};
