import { dataRecords } from '../api/get-data.js';
let index = 0;

const getDataUsers = () =>{
  index++;
  const author = new Object({
    avatar: dataRecords[index].author.avatar,
  });
  const location = new Object({
    lat: dataRecords[index].location.lat,
    lng: dataRecords[index].location.lng,
  });
  const offer = new Object({
    title: dataRecords[index].offer.title,
    address: dataRecords[index].offer.address,
    price: dataRecords[index].offer.price,
    type: dataRecords[index].offer.type,
    rooms: dataRecords[index].offer.rooms,
    guests: dataRecords[index].offer.guests,
    checkin: dataRecords[index].offer.checkin,
    checkout: dataRecords[index].offer.checkout,
    features: dataRecords[index].offer.features,
    description: dataRecords[index].offer.description,
    photos: dataRecords[index].offer.photos,
  });
  return {
    author: author,
    offer: offer,
    location: location,
  };
};
export { getDataUsers };
