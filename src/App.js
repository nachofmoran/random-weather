import './App.css';
import React, { useState, useEffect } from 'react';
import cities from './cities';
import CardList from './components/cards/cards';
import Header from './components/header/header';


const zone1= cities.filter((city) => city.zone === 1);
const zone2= cities.filter((city) => city.zone === 2);
const zone3= cities.filter((city) => city.zone === 3);
const zone4= cities.filter((city) => city.zone === 4);
const zone5= cities.filter((city) => city.zone === 5);
const zone6= cities.filter((city) => city.zone === 6);
const world = [zone1, zone2, zone3, zone4, zone5, zone6];
//const initial = [zone1[0], zone2[0], zone3[0], zone4[0], zone5[0], zone6[0]];

const initial = world.map((zone) => {
  const random = Math.floor(Math.random() * zone.length);
  return zone[random];
});

function App() {
  const [selectedCities, setSelectedCities] = useState(initial);

  const filteredCities = () => {
    const newCities = world.map((zone, index) => {
      let random = Math.floor(Math.random() * zone.length);
      if(zone[random].id === selectedCities[index].id){
        random ++;
        if (random >= zone.length){
          random = 0;
        }
      }
      return zone[random];
    });
    setSelectedCities(newCities);
  }

  return (
    <div className='website'>
      <Header filteredCities={filteredCities}/>
      <CardList selection={selectedCities}/>
    </div>
  );
}

export default App;
