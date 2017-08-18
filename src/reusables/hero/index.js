import React from 'react';
import Autocomplete from 'react-autocomplete';
import logo from './logo.svg';
import countries from './countries';
import './style.css';

export default function Hero({ changeInputValue, searchValue, fetchArtistListByCountry }) {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="hero-text">
          Browse popular artist by country
        </div>
        <div className="search">
          <Autocomplete
            getItemValue={item => item.label}
            items={countries.map((country, index) => ({
              index,
              label: country,
            }))}
            renderItem={(item, isHighlighted) => (
              <div
                className="autocomplete-item"
                style={{
                  color: '#333',
                  background: isHighlighted ? 'lightgray' : 'white'
              }}>
                {item.label}
              </div>)
            }
            shouldItemRender={(item, value) => {
              if (item.label === value) {
                return (value);
              }
              if (item.label.toLowerCase().slice(0, value.length) === value) {
                return true;
              }
              return false;
            }}
            value={searchValue}
            onChange={e => changeInputValue(e.target.value)}
            onSelect={val => {
              changeInputValue(val);
              fetchArtistListByCountry(val);
            }}
          />
        </div>
      </div>
    </div>
  );
}
