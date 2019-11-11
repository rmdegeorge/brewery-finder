import React from 'react';
import { withBreweryData } from '../BreweryDataProvider';


function Favorites(props) {
  return (
    <div className="Favorites">
      Favorites Page
    </div>
  );
}

export default withBreweryData(Favorites);