// import { getGeneratingMarkupElements } from './helpers/generating-markup-elements.js';
import { switchForm, submittingForm,  form, formValues, disabledItem, disabledAdress } from './helpers/form.js';
import { getSelectedItem, getSelectedPrice, getSelectedTime } from './helpers/get-selected-item.js';
// import { getMapDisplay } from './helpers/map.js';
// import { getMap } from './helpers/getMap.js';
import { getMap} from './map/get-map.js';
import { dataRecords } from './api/get-data.js';


switchForm(); // переключение формы в (не) активное состояние
//проверка получения данных
console.log(dataRecords);
for(let i = 0; i < dataRecords.length; i++){
  console.log(dataRecords[i]);
}

disabledItem(formValues.numberOfSeats);//блокируем изменение select количество мест
disabledAdress(); //блокируем редактирование адресса
getSelectedItem(formValues); //собитие на нажатие input (количество комнат, количество мест)
// разблокируем select количество мест на нажатие выбора комнат
formValues.numberOfRooms.addEventListener('change', ()=> { disabledItem(formValues.numberOfSeats); }, {once: true});
form.addEventListener('submit', (evt) => submittingForm(evt)); //событие на отправку формы
getSelectedPrice(formValues); // синхронизация полей тип жилья и цена за ночь
getSelectedTime(formValues.checkInTime , formValues.checkOutTime); // синхронизация полей день заезда
getSelectedTime(formValues.checkOutTime, formValues.checkInTime); //и день выезда
// getMapDisplay(); //отображения карты
getMap();
