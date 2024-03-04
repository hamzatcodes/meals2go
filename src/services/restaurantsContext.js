import React, { useState, createContext, useEffect, useMemo } from 'react';
import { getRestaurants, restaurantsTransform } from './restaurantsService';

const RestaurantsContext = createContext();

const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      getRestaurants()
        .then(restaurantsTransform)
        .then((restaurants) => {
          setRestaurants(restaurants);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => setIsLoading(false));
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

export { RestaurantsContextProvider, RestaurantsContext };
