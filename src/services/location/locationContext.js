import React, { useState, createContext, useEffect } from 'react';

import { getLocation, locationTransform } from './locationService';

const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState('san fransisco');

  const onSearch = (searchKeyword = 'Antwerp') => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    getLocation(searchKeyword)
      .then(locationTransform)
      .then((result) => {
        setLocation(result);
        console.log(result, 'result');
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };

  console.log(keyword, 'keyword');

  useEffect(() => {
    onSearch(keyword);
  }, []);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export { LocationContext, LocationContextProvider };
