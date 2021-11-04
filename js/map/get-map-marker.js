import { disabledAdress, formValues } from '../helpers/form.js';

//задания поведения маркеру
const getMarkerMovement = (marker) => {
  marker.on('moveend',(evt)=>{
    disabledAdress();
    formValues.address.value = `${(evt.target.getLatLng().lat).toFixed(5)}, ${(evt.target.getLatLng().lng).toFixed(5)}`;
  })
    .on('click', (evt)=>{
      // clickMarker();
      formValues.address.value = `${(evt.target.getLatLng().lat).toFixed(5)}, ${(evt.target.getLatLng().lng).toFixed(5)}`;
    });
};

//создание одного маркера
const getMapMarker = (map, lat, lng) => {
  const icon = L.icon({
    iconUrl: '../../img/pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });
  const marker = L.marker(
    [lat, lng], {icon: icon, draggable: true}).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
  getMarkerMovement(marker);
  return marker;
};

export { getMapMarker, getMarkerMovement };
