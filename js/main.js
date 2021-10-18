import {getRandomNumberInt, getMapCoordinates} from './helpers/get-random-number.js';
import {getFakeDataValue, getFakeDataValues,  places, times, features, photos} from './helpers/get-fake-data.js';
import {getAvatarData} from './helpers/get-avatar-data.js';

const getdataUsers = () =>{
  const author = new Object({
    avatar: `img/avatars/user${getAvatarData()}.png`,
  });
  const location = new Object({
    lat: `${getMapCoordinates(35.65000, 35.70000, 5)}`,
    lng: `${getMapCoordinates(139.70000, 139.80000, 5)}`,
  });
  const offer = new Object({
    title: 'Заголовок 1',
    adress: `${location.lat} , ${location.lng}`,
    price: `${getRandomNumberInt(1,10000)}`,
    type: `${getFakeDataValue(places)}`,
    rooms: `${getRandomNumberInt(1,800)}`,
    guests: `${getRandomNumberInt(1,1000)}`,
    checkin: `${getFakeDataValue(times)}`,
    checkout: `${getFakeDataValue(times)}`,
    features: getFakeDataValues(features),
    description: 'Описание помещения',
    photos: getFakeDataValues(photos),
  });
  return {
    author: author,
    offer: offer,
    location: location,
  };
};

const dataUsers = Array.from({length: 10}, getdataUsers);

console.log(dataUsers);
