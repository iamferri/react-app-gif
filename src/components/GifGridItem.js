import React from 'react';
import Card from '@mui/material/Card'
import { CardContent, CardHeader } from '@mui/material';

export const GifGridItem = ({id, tittle, url}) => {
  return (
    <div className='card'>
      <Card sx={{bgcolor:'#d1f2eb'}}>
        <CardContent>
        <img src={url} alt={tittle}/>
        </CardContent>
      </Card>
    </div>
  );
};
