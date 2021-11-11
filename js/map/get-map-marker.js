import { disabledAdress, formValues } from '../helpers/form.js';
import { clickMarker } from './click-marker.js';
// задания поведения маркеру
const getMarkerMovement = (marker) => {
  marker.on('moveend',(evt)=>{
    disabledAdress();
    formValues.address.value = `${(evt.target.getLatLng().lat).toFixed(5)}, ${(evt.target.getLatLng().lng).toFixed(5)}`;
  })
    .on('click', (evt)=>{
      clickMarker();
      formValues.address.value = `${(evt.target.getLatLng().lat).toFixed(5)}, ${(evt.target.getLatLng().lng).toFixed(5)}`;
    });
};

export { getMarkerMovement };
