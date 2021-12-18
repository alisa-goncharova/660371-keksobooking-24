import { switchForm } from '../helpers/form.js';
import { points } from './get-points.js';
import { createCustomPopup } from './ create-сustom-popup.js';
import { clickMarker } from './click-marker.js';
import {getMainMarker} from './get-main-marker.js';
import {getDataFilter} from "../filter/get-data-filter.js";

//отображение карты
const getMap = () => {
  const map = L.map('map-canvas')
    .on('load',()=>{
      switchForm();
    })
    .setView([35.6892, 139.692], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors  | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>\'',
  })
    .addTo(map);
  //генерация маркеров
  points.forEach((point)=>{
    const {lat, lng} = point;
    const icon = L.icon({
      iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const marker = L.marker(
      { lat, lng }, { icon },
    );
    marker
      .addTo(map)
      .bindPopup(createCustomPopup(point))
      .on('click', () => { clickMarker(point); });
  });
  getMainMarker(map);
  return map;
};

export { getMap };
