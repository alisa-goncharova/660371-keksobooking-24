import { switchForm } from '../helpers/form.js';
import { dataUsers } from '../helpers/generating-markup-elements.js';
import { getMapMarker } from './get-map-marker.js';
import { getMainMarker} from './get-main-marker.js';
//отображение карты
const getMap = () => {
  const map = L.map('map-canvas')
    .on('load',()=>{
      switchForm();
    })
    .setView([35.6892, 139.692], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  //отрисовка главного маркера
  getMainMarker(map);
  //перебор фейковых данных и их отрисовка
  dataUsers.forEach((elem) => {
    const lat = elem.location.lat;
    const lng = elem.location.lng;
    getMapMarker(map, lat, lng);
  });
  return map;
};

export { getMap };
