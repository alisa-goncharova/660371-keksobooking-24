import { switchForm, formValues, disabledAdress } from './form.js';
import { dataUsers } from './generating-markup-elements.js';

//получение точек
const getPoins = () => {
  dataUsers.forEach((elem) => {
    const lat = elem.location.lat;
    const lng = elem.location.lng;

  });
};

//событие на перетаскивание маркера
const getMarkerMovement = (marker) => {
  marker.on('moveend',(evt)=>{
    console.log(evt.target.getLatLng());
    // formValues.address.disabled = true;
    disabledAdress();
    formValues.address.value =  `${(evt.target.getLatLng().lat).toFixed(5)}, ${(evt.target.getLatLng().lng).toFixed(5)}`;
  });
};
//получение кастомного маркера
const setIconMarker = () => L.icon({
  iconUrl: '../../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
  // popupAnchor: [-3, -76],
});
//получение маркера
const getMapMarkers = (map) => {
  const myMarker = L.marker(
    [35.6892, 139.692], {icon: setIconMarker(), draggable: true}).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
    // .openPopup();
  getMarkerMovement(myMarker);
};
//отображение карты
const getMapDisplay = () => {
  const map = L.map('map-canvas')
    .on('load',()=>{
      switchForm();
      getPoins();
    })
    .setView([35.6892, 139.692], 13); //35.6892, 139.692
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  getMapMarkers(map);
};

export { getMapDisplay };
