import React from 'react';
import Card from '../card/card';

const CardList = ({selection}) => {
  return <div className='card-container'>
      {selection.map((city) => {
        return <Card key={city.id} id={city.id} name={city.name} 
                     country={city.country} imgId={city.imgId}
                     lon={city.lon} lat={city.lat} zoomX={city.zoom}/>
      })}
    </div>
};

export default CardList;