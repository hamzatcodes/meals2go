import camelize from 'camelize';
import { locations } from './locationMock';

const getLocation = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject('Not found');
    }

    resolve(locationMock);
  });
};

const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};

export { getLocation, locationTransform };
