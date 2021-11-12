import { getDataUsers } from '../helpers/data.js';
// import { getData } from '../api/get-data.js';

const COUNT = 10;

const points = (Array.from({length: COUNT}, getDataUsers)).map((elem) => ({
  avatar: elem.author.avatar,
  lat: elem.location.lat,
  lng: elem.location.lng,
  title: elem.offer.title,
  address: elem.offer.address,
  price: elem.offer.price,
  type: elem.offer.type,
  rooms: elem.offer.rooms,
  guests: elem.offer.guests,
  checkin:elem.offer.checkin,
  checkout: elem.offer.checkout,
  features: elem.offer.features,
  description: elem.offer.description,
  photos: elem.offer.photos,
}));

export { points };
