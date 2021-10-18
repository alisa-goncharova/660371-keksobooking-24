import {getRandomNumberInt, getMapCoordinates} from './get-random-number.js';
import {getFakeDataValue, getFakeDataValues,  PLACES, TIMES, FEATURES, PHOTOS} from './get-fake-data.js';
import {getAvatarData} from './get-avatar-data.js';

const getDataUsers = () =>{
  const author = new Object({
    avatar: `img/avatars/user${getAvatarData()}.png`,
  });
  const location = new Object({
    lat: `${getMapCoordinates(35.65000, 35.70000, 5)}`,
    lng: `${getMapCoordinates(139.70000, 139.80000, 5)}`,
  });
  const offer = new Object({
    title: 'Заголовок 1',
    address: `${location.lat} , ${location.lng}`,
    price: `${getRandomNumberInt(1,10000)}`,
    type: `${getFakeDataValue(PLACES)}`,
    rooms: `${getRandomNumberInt(1,800)}`,
    guests: `${getRandomNumberInt(1,1000)}`,
    checkin: `${getFakeDataValue(TIMES)}`,
    checkout: `${getFakeDataValue(TIMES)}`,
    features: getFakeDataValues(FEATURES),
    description: 'Описание помещения',
    photos: getFakeDataValues(PHOTOS),
  });
  return {
    author: author,
    offer: offer,
    location: location,
  };
};
export {getDataUsers};

