import React from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';

const OlMap = ({lon, lat, zoom, id}) => {
  const lonLat = [lon, lat];
  const webMercator = fromLonLat(lonLat);

  //console.log (lonLat);
  
  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    target: `${id}`,
    view: new View({
      center: webMercator,
      zoom: 10
    }),
  });

  return (
      <div className='map' id={id}></div>
  );
};

export default OlMap;