import { getMarkerMovement } from './get-map-marker.js';

//создание главного маркера
const getMainMarker = (map) => {
  const icon = L.icon({
    iconUrl: '../../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });
  const marker = L.marker(
    [35.6892, 139.692], {icon: icon, draggable: true}).addTo(map)
    .bindPopup('Текст главной страницы');
  getMarkerMovement(marker);
};

export { getMainMarker };
