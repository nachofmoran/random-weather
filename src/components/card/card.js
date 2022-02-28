import React, { useState, useEffect } from 'react';
import { FaTemperatureLow, FaMapMarkerAlt } from "react-icons/fa";
import { BsThermometerHalf } from "react-icons/bs";
import OlMap from '../map/map';


const Card = ({id, name, country, imgId, lon, lat, zoomX}) => {
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState(0);
  const [img, setImg] = useState([]);
  const [map, setMap] = useState(false);
  const [lonLat, setLonLat] = useState([lon, lat])

  const apiKey = 'baee1a1250bc342c86cdcc1e566e7c04';
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}`;
  const apiPixabayKey = '7008484-3c9d012a08da01a959f0ee624';
  const pixabayUrl = `https://pixabay.com/api/?key=${apiPixabayKey}&id=${imgId}`;

  
  const fetchCardData = async () => {
    setLoading(true);

    try{
      const response = await fetch(url);
      const data = await response.json();
      const responseImg = await fetch(pixabayUrl);
      const dataImg = await responseImg.json();
      // const {hits} = dataImg;
      // console.log('hits', hits[0].pageURL);
      setLoading(false);
      setTemperature(Math.round(kelvinToCelsius(data.main.temp)));
      setImg(dataImg.hits[0].webformatURL);
      //console.log('use state value', img);
    }catch (error){
      setLoading(false);
      console.log(error);
    }

  }

  const kelvinToCelsius = (temperature) => {
    const celsius = temperature - 273.15;
    return celsius;
  }

  useEffect(() => {
    fetchCardData();
    console.log("entra en el useeffect de entrada");
  }, []);

  useEffect(() => {
    console.log('data en map useEffect', map);
    setLonLat([lon, lat]);
  }, [map]);

  if(loading){
    return (
      <div className="card card-pic">
        <h2>Loading</h2>
      </div>
    );
  }

  if(map){
    {console.log("renderiza el map")}
    return(
      <div className='card card-map'>
        <OlMap lon={lonLat[0]} lat={lonLat[1]} zoom={zoomX} id={id}/>
        <div className="buttons">
          <button className="pic-btn" onClick={() => setMap(false)}>
            <BsThermometerHalf className='icon'/>
          </button>
          <button className="map-btn" onClick={() => setMap(true)}>
            <FaMapMarkerAlt className='icon'/>
          </button>
        </div>
      </div>
    );

  }

  return (
    <div className='card card-pic' style={{backgroundImage: `url(${img})`}}>
      <div className="city-data">
          <h1>{temperature}°</h1>
          <h2>{name}</h2>
          <h3>{country}</h3>    
      </div>
      <div className="buttons">
        <button className="pic-btn" onClick={() => setMap(false)}>
          <BsThermometerHalf className='icon'/>
        </button>
        <button className="map-btn" onClick={() => setMap(true)}>
          <FaMapMarkerAlt className='icon'/>
        </button>
      </div>
    </div>
  );
};

export default Card;