import React from "react";
import Service from '../../Components/Service';
import { Route } from 'react-router-dom';

const Services = props => {
  return (
    <div>
      <Route
        exact
        path="/translation"
        render={() => {
          return <Service
            typeServ='Translation'
            carouselImgs="translation_service"
            typeImg={process.env.PUBLIC_URL + '/images/placeholder_red.png'}
            areaServ={process.env.PUBLIC_URL + '/images/placeholder_gray.png'}
          />;
        }}
      />
    </div>
  );
};

export default Services;
