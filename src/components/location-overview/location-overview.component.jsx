import React, { useEffect, useState } from 'react';

import CustomMap from '../../components/custom-map/custom-map.component';
import LocationInfo from '../../components/location-info/location-info.component';

import './location-overview.styles.scss';


const LocationOverview = ({data, title}) => {
    const {latitude, longitude, city, continent_name, country_name, ip, region_name, type} = data;

    const DisplayMap = ({lat, lon, zoom}) => {
        return <CustomMap 
            lat={lat} 
            lon={lon} 
            zoom={zoom} />
      }

    return(
        <div className="location-overview">
            <span className='overview-title'>{title}</span>
            <DisplayMap 
                lat={latitude}
                lon={longitude}
                zoom='5'
            />
          <LocationInfo
              city={city}
              continent_name={continent_name}
              country_name={country_name}
              ip={ip}
              region_name={region_name}
              type={type}
          />
        </div>
    )
};

export default LocationOverview;