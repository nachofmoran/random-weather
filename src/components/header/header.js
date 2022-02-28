import React from 'react';

const Header = ({filteredCities}) => {
    return (
    <div className='header'>
      <div className="title">
        <h1>Random<span>Weather</span></h1>
        <h3>by 
          <a href="https://nachofmoran.github.io/" target="_blank"> Nacho F. Morán</a>
        </h3>
      </div>
      <button type='button' className='header-btn' onClick={() => filteredCities()}>Refresh</button>
    </div>);
};

export default Header;