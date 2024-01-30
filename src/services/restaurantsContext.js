import React, { useState, createContext, useEffect, useMemo } from 'react';
import { getRestaurants, restaurantsTransform } from './restaurantsService';

const RestaurantsContext = createContext();

const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [1, 2, 3, 4, 5, 6, 7, 8],
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

export { RestaurantsContextProvider, RestaurantsContext };
