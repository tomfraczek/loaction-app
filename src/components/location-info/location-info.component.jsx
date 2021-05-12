import React from 'react';

import './location-info.styles.scss';

const LocationInfo = ({ip, type, continent_name, country_name, region_name, city, country_code, zip}) => (
    <div className="location-info">
        <div className="user-ip info">
            <span>Ip: </span>
            <span>{ip}</span>
        </div>

        <div className="user-type info">
            <span>Type: </span>
            <span>{type}</span>
        </div>

        <div className="user-continet info">
            <span>Continent: </span>
            <span>{continent_name}</span>
        </div>

        <div className="user-country info">
            <span>Country: </span>
            <span>{country_name} {country_code}</span>
        </div>

        <div className="user-region info">
            <span>Region: </span>
            <span>{region_name}</span>
        </div>
        
        <div className="user-city info">
            <span>City: </span>
            <span>{zip} {city}</span>
        </div>
    </div>
)

export default LocationInfo;